# DreamHills Villa Backend Architecture

This document outlines the layered architecture for the DreamHills Spring Boot backend, designed to seamlessly support the Next.js frontend requirements.

## 1. Tech Stack Overview
Based on the `pom.xml`, the backend utilizes:
*   **Java 21**
*   **Spring Boot 4.1.0** (or similar latest version based on POM)
*   **Spring Data JDBC:** For persistence (instead of JPA/Hibernate).
*   **Spring Web MVC:** For building RESTful APIs.
*   **Spring Validation:** For validating incoming DTOs.
*   **PostgreSQL:** Relational database.
*   **Lombok:** To reduce boilerplate code.

## 2. Directory Structure (Layered Architecture)

The project follows a standard n-tier layered architecture located under `src/main/java/com/dreamhills/`:

```text
com.dreamhills/
├── controllers/      # REST API Endpoints (api/v1/*)
├── services/         # Business Logic Interfaces
│   └── impl/         # Business Logic Implementations
├── repositories/     # Database Access (Spring Data JDBC)
├── entities/         # Database Models (Mapped to Tables)
├── dtos/             # Data Transfer Objects (Requests & Responses)
│   ├── request/
│   └── response/
├── configs/          # Configuration Classes (CORS, DB, Security)
├── exceptions/       # Custom Exceptions & Global Exception Handler
└── utils/            # Helper Classes (Date formatters, constants)
```

## 3. Layer Definitions & Components

### 3.1 Entities (`/entities`)
Since we are using Spring Data JDBC, we map these directly to the PostgreSQL tables using `@Table` and `@Id`.
*   `Villa`: Core details of the property (name, base price, description).
*   `Guest`: Information about guests (firstName, lastName, email, phone).
*   `Booking`: Represents a reservation (checkIn, checkOut, totalAmount, status). Links to Guest and Villa.
*   `Addon`: Available extras (Chef, Transfer, Cleaning).
*   `BookingAddon`: Cross-reference table linking Bookings and Addons.
*   `User`: Admin user credentials for the dashboard.

### 3.2 Repositories (`/repositories`)
Interfaces extending `CrudRepository` or `PagingAndSortingRepository`.
*   `VillaRepository`: Fetch villa details.
*   `GuestRepository`: Find guests by email, list guests.
*   `BookingRepository`: Find bookings by date range, guest, or status. Custom `@Query` methods for overlapping dates.
*   `AddonRepository`: List available addons.

### 3.3 Data Transfer Objects (`/dtos`)
*   **Requests (`dtos/request/`)**:
    *   `CreateBookingReq`: Contains check-in/out dates, guest details, list of addon IDs, and total price. Annotated with `@NotBlank`, `@NotNull`, `@Future`.
    *   `UpdateBookingStatusReq`: For admin dashboard (e.g., status updates).
    *   `AdminLoginReq`: Email and password.
*   **Responses (`dtos/response/`)**:
    *   `BookingRes`: Full booking details returned to frontend.
    *   `AvailabilityRes`: Array of booked dates to disable on the frontend calendar.
    *   `DashboardStatsRes`: Aggregated data for admin (revenue, upcoming check-ins).
    *   `ApiResponse<T>`: Generic wrapper for standardizing responses (status, message, data).

### 3.4 Services (`/services` & `/services/impl`)
Interfaces and their implementations to handle business logic.
*   **`BookingService` & `BookingServiceImpl`**:
    *   `checkAvailability(startDate, endDate)`: Logic to ensure dates don't overlap.
    *   `createBooking(CreateBookingReq)`: Calculates totals, validates dates, saves Guest, saves Booking, links Addons.
    *   `getAllBookings(filters)`: For admin dashboard.
*   **`GuestService` & `GuestServiceImpl`**:
    *   `getGuestHistory(guestId)`: Fetches past bookings for a guest.
*   **`DashboardService` & `DashboardServiceImpl`**:
    *   `getStats()`: Aggregates revenue, occupancy rate, etc.

### 3.5 Controllers (`/controllers`)
All controllers must be prefixed with `/api/v1/`.
*   **`BookingController` (`/api/v1/bookings`)**:
    *   `GET /availability`: Returns booked dates.
    *   `POST /`: Creates a new booking.
    *   `GET /`: Admin list bookings.
    *   `PATCH /{id}/status`: Admin update status.
*   **`AddonController` (`/api/v1/addons`)**:
    *   `GET /`: List all addons and prices.
*   **`DashboardController` (`/api/v1/dashboard`)**:
    *   `GET /stats`: Admin overview numbers.
*   **`GuestController` (`/api/v1/guests`)**:
    *   `GET /`: List all guests.
    *   `GET /{id}`: Guest details and history.

### 3.6 Configurations (`/configs`)
*   `CorsConfig`: Allows cross-origin requests from `http://localhost:3000`.
*   `DatabaseConfig`: Custom configurations for Spring Data JDBC if needed (e.g., naming strategies).
*   `SecurityConfig`: (If added later) JWT filter for admin routes, leaving public booking routes open.

### 3.7 Utils & Exceptions (`/utils`, `/exceptions`)
*   `GlobalExceptionHandler`: Uses `@ControllerAdvice` to catch `MethodArgumentNotValidException` (validation errors), `BookingConflictException` (overlapping dates), and returns formatted JSON errors.
*   `PriceCalculatorUtil`: Helper to handle nightly rate, service fees, and taxes centrally to ensure frontend and backend math matches.

## 4. Database Schema (PostgreSQL)

```sql
CREATE TABLE guest (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20)
);

CREATE TABLE booking (
    id SERIAL PRIMARY KEY,
    guest_id INT REFERENCES guest(id),
    check_in DATE,
    check_out DATE,
    status VARCHAR(50), -- PENDING, CONFIRMED, CANCELLED
    base_amount DECIMAL(10, 2),
    tax_amount DECIMAL(10, 2),
    total_amount DECIMAL(10, 2),
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addon (
    id VARCHAR(50) PRIMARY KEY, -- 'airport', 'chef', 'cleaning'
    label VARCHAR(100),
    price DECIMAL(10, 2)
);

CREATE TABLE booking_addon (
    booking_id INT REFERENCES booking(id),
    addon_id VARCHAR(50) REFERENCES addon(id),
    PRIMARY KEY (booking_id, addon_id)
);
```

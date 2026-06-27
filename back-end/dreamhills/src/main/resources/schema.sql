DROP TABLE IF EXISTS booking_addon;
DROP TABLE IF EXISTS addon;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS guest;
DROP TABLE IF EXISTS app_user;

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

CREATE TABLE app_user (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255)
);

-- Insert initial addons
INSERT INTO addon (id, label, price) VALUES 
('airport', 'Airport Transfer', 150.00),
('chef', 'Private Chef', 300.00),
('cleaning', 'Daily Housekeeping', 100.00);

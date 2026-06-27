"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  question: string
  answer: React.ReactNode
  isOpen: boolean
  onClick: () => void
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  const contentRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-xl font-semibold transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}`}>
          {question}
        </span>
        <div className={`ml-4 w-10 h-10 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-100" : "bg-slate-100 group-hover:bg-slate-200"}`}>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : "text-slate-500"}`} 
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : "0px",
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-6 text-lg text-slate-600 leading-relaxed font-light">
          {answer}
        </div>
      </div>
    </div>
  )
}

interface AnimatedAccordionProps {
  items: { question: string; answer: React.ReactNode }[]
}

export function AnimatedAccordion({ items }: AnimatedAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}

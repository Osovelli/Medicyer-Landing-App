import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    id: "1",
    question: "What is Medicyer?",
    answer:
      "Medicyer is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more. Join hundreds of thousands of designers using Medicyer to accelerate research, get decision-makers on",
  },
  {
    id: "2",
    question: "How often do you update the library?",
    answer:
      "We continuously update our library with new designs, components, and resources. Our team works daily to ensure you have access to the latest and most relevant healthcare design patterns and best practices.",
  },
  {
    id: "3",
    question: "Can I get a free trial?",
    answer:
      "Yes, we offer a free trial for new users. Sign up today to explore our full range of medical services and connect with healthcare professionals in your area.",
  },
  {
    id: "4",
    question: "Do you have a monthly plan?",
    answer:
      "We offer flexible monthly subscription plans to suit different needs. You can choose from various tiers depending on your usage and preferences.",
  },
  {
    id: "5",
    question: "Do you have discounts for students and educators?",
    answer:
      "Yes, we provide special discounts for students, educators, and healthcare professionals. Contact our support team for more information about educational pricing.",
  },
  {
    id: "6",
    question: "What forms of payment do you accept?",
    answer:
      "We accept all major credit cards, digital wallets, and bank transfers. Our secure payment processing ensures your financial information is always protected.",
  },
  {
    id: "7",
    question: "Can I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime without penalties. Your access will remain active until the end of your current billing cycle.",
  },
  {
    id: "8",
    question: "How do I switch from a Plan?",
    answer:
      "Switching between plans is easy. Log into your account, go to settings, and select your new plan. The change will be reflected in your next billing cycle.",
  },
  {
    id: "9",
    question: "What is the difference between Enterprise plan and Team plan?",
    answer:
      "The Enterprise plan offers advanced features, priority support, and custom integrations for large organizations. The Team plan is designed for smaller teams with collaborative features and standard support.",
  },
  {
    id: "10",
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with our service. Contact our support team to initiate a refund request within 30 days of purchase.",
  },
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState("1")

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-bold mb-12">Frequently asked questions</h2>

        {/* Accordion */}
        <Accordion type="single" collapsible value={expandedId} onValueChange={setExpandedId} className="space-y-3">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-gray-50 rounded-lg px-6 py-4 border-0 data-[state=open]:bg-gray-50"
            >
              <AccordionTrigger className="hover:no-underline text-left">
                <span className="text-base md:text-lg font-medium text-gray-900">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Help Center Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have more questions? Find answers in our{" "}
            <a href="#" className="text-gray-900 underline font-medium hover:no-underline">
              help center
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

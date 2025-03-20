import { useState } from "react"
import {CircleMinus, CirclePlus } from "lucide-react"

type FAQItem = {
  id: number
  question: string
  answer: string
  category: string
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("TingoGPT")
  const [openItemId, setOpenItemId] = useState<number | null>(1)

  const faqItems: FAQItem[] = [
    
    {
      id: 6,
      question: "How do I change my account email?",
      answer:
        "You can change your account email in your profile settings. After updating, we'll send a verification link to your new email address to confirm the change.",
      category: "General",
    },
    {
      id: 7,
      question: "What is TingoGPT?",
      answer:
        "TingoGPT is our AI-powered assistant that helps with customer inquiries, transaction analysis, and provides personalized financial insights based on your usage patterns.",
      category: "TingoGPT",
    },
    {
      id: 8,
      question: "How accurate is TingoGPT?",
      answer:
        "TingoGPT is trained on our extensive financial database and is regularly updated. It provides highly accurate information but we always recommend verifying critical financial decisions with our human support team.",
      category: "TingoGPT",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id)
  }

  const filteredItems = faqItems.filter((item) => item.category === activeCategory)

  return (
    <section className="w-full py-[90px] text-white">
      <div className="max-w-[768px] mx-auto w-full px-4">
        <div className=" w-full rounded-[16px] p-8 grid gap-[48px]">
          <div className="mb-10 text-center">
            <span className="inline-block px-4 py-[7px] text-[14px] font-medium tracking-wide bg-[#1e293b] rounded-full mb-4 border border-[#374151] bg-custom-gradient">
              FAQ
            </span>
            <h2 className="text-[24px] md:text-[40px] font-semibold mb-4 text-[#E5E7EB]">Got Questions? We've Got Answers!</h2>
            <p className="text-[#A1A6B4] text-[20px]">Everything you need to know about the product and billing.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {["TingoGPT"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-[14px] transition-all font-Inter ${
                  activeCategory === category
                    ? "bg-custom-gradient text-[#98A2B3] border border-[#374151]"
                    : "text-[#98A2B3] hover:text-white border border-[#C9C9C9CC]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="border-b border-[#374151] pb-6">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-[18px] font-semibold font-inter text-[#A1A6B4]">{item.question}</h3>
                  <div className="text-[#F8872B] ml-4">
                    {openItemId === item.id ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
                  </div>
                </button>

                <div
                  className={`mt-4 text-[#A1A6B4] overflow-hidden transition-all duration-300 ${
                    openItemId === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-2  text-[#A1A6B4]">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


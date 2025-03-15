import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Title from '../../../utils/libs/Title'

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const faqData = [
    {
      question: "What is Tingo AI?",
      answer: "Tingo AI combines innovative AI technology with responsible practices to deliver AI-powered data center services and Africa's first AI-driven radio station"
    },
    {
      question: "How does Tingo AI ensure responsible AI?", 
      answer:"Our systems prioritize ethical considerations, data privacy, inclusivity, and cultural relevance to ensure our solutions benefit society responsibly."
    },
    {
      question: "What services does the AI Data Center offer?", 
      answer: "Our AI-powered data center is a game-changer for businesses. Designed to streamline operations, it offers scalable, secure, and efficient data-driven solutions, including AI-driven customer care agents. These agents understand your customers' needs, deliver personalized service, and operate 24/7 to enhance satisfaction. Powered by cutting-edge technology, our data center embodies Tingo AI’s commitment to ethical, adaptive, and responsible AI systems that drive growth and trust."
    },
    {
      question: "What makes Tingo AI Radio unique?",
      answer: "Our AI-driven station offers adaptive programming and interactive experiences, bringing innovation and engagement to radio like never before."
    },
    {
      question: "How can my business benefit from Tingo AI?",
      answer: "Our AI solutions optimize efficiency, improve customer experience, and provide cutting-edge technology tailored to your business needs."
    },
    {
      question: "What is Responsible AI?",
      answer: "Responsible AI refers to the ethical development and deployment of AI technologies,ensuring transparency, fairness, and societal benefit."
    }
  ]

  return (
    <div className="w-full px-4 sm:px-[5%] flex flex-col items-center justify-center py-10">
      <Title>FAQs</Title>
      <h2 className="text-[24px] md:text-[40px] text-fade-black font-Manrope font-semibold text-center mb-8">
        Some Common Questions
      </h2>

      <div className="w-full max-w-[872px] space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center p-4 border border-fade-gray-label rounded-lg text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-Manrope font-semibold text-[16px] sm:text-[20px] text-fade-black pr-4">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5 text-fade-black flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-fade-black flex-shrink-0" />
              )}
            </button>
            
            {activeIndex === index && (
              <div className="px-4 py-3 text-fade-gray font-Manrope text-[14px] sm:text-[16px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQs
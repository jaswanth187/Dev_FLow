import { useState } from 'react'

const faqs = [
  {
    question: 'What is DevFlow?',
    answer:
      'DevFlow is an AI-powered project management platform designed for modern software teams.'
  },
  {
    question: 'How does the AI assistant work?',
    answer:
      'The AI assistant analyzes your project tasks and helps break complex work into smaller actionable steps.'
  },
  {
    question: 'Is there a free plan available?',
    answer:
      'Yes. The free plan is designed for individuals and small projects.'
  },
  {
    question: 'Can I migrate from another tool?',
    answer:
      'Yes. DevFlow can support importing projects and tasks from other project management tools.'
  },
  {
    question: 'Do you offer team or enterprise plans?',
    answer:
      'Yes. DevFlow offers plans designed for growing teams and larger organizations.'
  }
]

const FAQSection = () => {

  const [openIndex, setOpenIndex] = useState<null |number>(null)

  const toggleFAQ = (index:number) => {
    setOpenIndex(
      openIndex === index ? null : index
    )
  }

  return (
    <section className="faq-section">

      <div className="faq-inner">

        <div className="faq-heading">

          <span className="section-label">
            FAQ
          </span>

          <h2>
            Frequently asked questions
          </h2>

        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openIndex === index ? 'open' : ''
              }`}
              key={faq.question}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>
                  {faq.question}
                </span>

                <span className="faq-plus">
                  {openIndex === index ? '−' : '+'}
                </span>

              </button>


              {openIndex === index && (

                <div className="faq-answer">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FAQSection
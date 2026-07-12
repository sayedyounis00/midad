import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item open as in original (open attribute)

  const faqData = [
    {
      question: 'ما الذي تقدّمه المنصة؟',
      answer: 'إجابة توضيحية مختصرة عن طبيعة الخدمة المقدّمة.'
    },
    {
      question: 'هل أحتاج خبرة مسبقة لاستخدامها؟',
      answer: 'إجابة توضيحية مختصرة.'
    },
    {
      question: 'هل المحتوى قابل للتعديل؟',
      answer: 'إجابة توضيحية مختصرة.'
    },
    {
      question: 'ما الفرق بين الفئات المختلفة؟',
      answer: 'إجابة توضيحية مختصرة.'
    },
    {
      question: 'هل الاستخدام مجاني؟',
      answer: 'إجابة توضيحية مختصرة.'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <span className="section-eyebrow">الأسئلة الشائعة</span>
        <h2 className="section-title">أسئلة يطرحها الزوار غالباً</h2>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-title">{item.question}</span>
                  <span className="faq-icon-arrow">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

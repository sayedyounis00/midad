import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item open as in original (open attribute)

  const faqData = [
    {
      question: 'كيف تبدأ العمل مع مِداد؟',
      answer: 'يمكنك التواصل معنا عبر نموذج التواصل أو الزر المباشر، لنبدأ بتحليل احتياجات مشروعك وعقد جلسة استشارية أولية.'
    },
    {
      question: 'هل تقدمون خدمات مخصصة أم باقات جاهزة؟',
      answer: 'نحن نؤمن بأن كل علامة تجارية فريدة؛ لذلك نصمم كل حل وباقة خصيصًا لتلائم أهداف مشروعك واحتياجاتك الفعلية.'
    },
    {
      question: 'ما نوع الشركات والعلامات التجارية التي تتعاملون معها؟',
      answer: 'نعمل مع الناشئين، والشركات المتوسطة والكبيرة، والبراندات التي تسعى لبناء حضور رقمي قوي وترك أثر ملموس.'
    },
    {
      question: 'كيف تتم متابعة تنفيذ المشروعات؟',
      answer: 'نوفر متابعة مستمرة وتقارير دورية قياسية تضمن لك الشفافية التامة ووضوح التقدم والنتائج في كل مرحلة.'
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

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'تواصل معنا',
      desc: 'شاركنا تفاصيل مشروعك واحتياجاتك، لنحدد الخدمة الأنسب لك'
    },
    {
      number: '02',
      title: 'نضع الخطة',
      desc: 'نحلل احتياجك، ونضع استراتيجية وخطة عمل واضحة المعالم'
    },
    {
      number: '03',
      title: 'نبدأ التنفيذ',
      desc: 'ننفذ الخطة خطوة بخطوة، لنمنحك نتائج ملموسة تعكس هويتك'
    }
  ];

  return (
    <section className="workflow" id="how-it-works">
      <div className="container">
        <span className="section-eyebrow">كيف نعمل</span>
        <h2 className="section-title">ثلاث خطوات.. وتبدأ قصتك معنا</h2>

        <div className="workflow-steps">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

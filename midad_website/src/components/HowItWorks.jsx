export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'اختر العنصر',
      desc: 'تصفّح المكتبة، فلتر حسب الفئة، وشاهد التفاصيل قبل الاختيار.'
    },
    {
      number: '02',
      title: 'افتح التفاصيل',
      desc: 'صفحة العنصر تعرض كل المعلومات والمواصفات الدقيقة.'
    },
    {
      number: '03',
      title: 'حمّل وابدأ',
      desc: 'ملف جاهز للفتح مباشرة في برنامج التصميم المفضّل لديك.'
    }
  ];

  return (
    <section className="workflow" id="how-it-works">
      <div className="container">
        <span className="section-eyebrow">طريقة الاستخدام</span>
        <h2 className="section-title">ثلاث خطوات للوصول إلى ملفّك</h2>

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

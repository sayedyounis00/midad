export default function WhyUs() {
  const features = [
    { title: 'ميزة أولى', desc: 'وصف قصير يشرح الميزة الأولى وقيمتها للمستخدم.' },
    { title: 'ميزة ثانية', desc: 'وصف قصير يشرح الميزة الثانية وقيمتها للمستخدم.' },
    { title: 'ميزة ثالثة', desc: 'وصف قصير يشرح الميزة الثالثة وقيمتها للمستخدم.' },
    { title: 'ميزة رابعة', desc: 'وصف قصير يشرح الميزة الرابعة وقيمتها للمستخدم.' }
  ];

  return (
    <section className="why-us">
      <div className="container">
        <span className="section-eyebrow">لماذا نحن</span>
        <h2 className="section-title">ما يميّز المنصة</h2>
        <p className="section-sub">بُنيت المنصة من منظور المستخدم الفعلي لا من منظور أداة عامة.</p>

        <div className="feature-grid">
          {features.map((feat, index) => (
            <div key={index} className="feature-card">
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyUs() {
  const features = [
    { title: 'فهم قبل تنفيذ', desc: 'لا تُبنى فكرة قبل أن نفهم علامتك التجارية واحتياجاتها الحقيقية أولًا' },
    { title: 'استراتيجية، لا مجرد شكل', desc: 'كل ما نصنعه يخدم هدفًا واضحًا، لا مجرد تصميم يُرضي العين' },
    { title: 'شراكة مستمرة', desc: 'نرافقك بعد التسليم، فنحن شركاء في رحلتك لا مجرد منفذين' },
    { title: 'حلول مصممة خصيصًا لك', desc: 'لا نسخ ولا تكرار.. كل مشروع يحمل بصمته الخاصة' }
  ];

  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <span className="section-eyebrow">لماذا نحن؟</span>
        <h2 className="section-title">ما يميّز مِداد</h2>
        <p className="section-sub">"بُنيت رؤيتنا من فهم حقيقي لاحتياجات علامتك التجارية، لا من قوالب جاهزة"</p>

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

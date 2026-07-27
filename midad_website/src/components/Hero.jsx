export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">عن القصة: نبذة عن مِداد</span>
          <h1>كل علامة تجارية تستحق أن<br />تُروى قصتها بالشكل الصحيح</h1>
          <p className="hero-sub">
            في مِداد، نبتكر هوية، نصنع محتوى، ونبني حضورًا رقميًا يترك أثرًا ويحقق النتائج.
          </p>
          <div className="hero-actions">
            <a href="#how-it-works" className="btn btn-primary btn-lg">ابدأ قصتك معنا</a>
          </div>

          <ul className="hero-badges">
            <li>وكالة تسويق متكاملة</li>
            <li>من الفكرة الأولى إلى الأثر الملموس</li>
            <li>نرافقك في كل خطوة</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="float-card card-1">
            <div className="card-thumb"></div>
            <div className="card-label">
              <strong>هوية بصرية وبراندنج</strong>
              <span>نبني هوية تعبّر عنك</span>
            </div>
          </div>
          <div className="float-card card-2">
            <div className="card-thumb"></div>
            <div className="card-label">
              <strong>إدارة السوشيال ميديا</strong>
              <span>محتوى يوصلك لجمهورك الصح</span>
            </div>
          </div>
          <div className="float-card card-3">
            <div className="card-thumb"></div>
            <div className="card-label">
              <strong>استراتيجية تسويقية</strong>
              <span>خطة واضحة نحو أهدافك</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">وصف مختصر للمنصة</span>
          <h1>عنوان رئيسي جذّاب <br /> عن قيمة المنتج</h1>
          <p className="hero-sub">
            فقرة فرعية تشرح الفكرة الأساسية للمنتج، ونوع المحتوى الذي
            توفّره المنصة، وكيف يستفيد المستخدم منها بخطوة بسيطة.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary btn-lg">تصفّح المكتبة</a>
          </div>

          <ul className="hero-badges">
            <li>ميزة أولى مختصرة</li>
            <li>ميزة ثانية مختصرة</li>
            <li>ميزة ثالثة مختصرة</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="float-card card-1">
            <div className="card-thumb"></div>
            <div className="card-label">
              <strong>تصنيف المنتج 1</strong>
              <span>وصف مختصر للمنتج والأبعاد</span>
            </div>
          </div>
          <div className="float-card card-2">
            <div className="card-thumb"></div>
            <div className="card-label">
              <strong>تصنيف المنتج 2</strong>
              <span>وصف مختصر للمنتج والأبعاد</span>
            </div>
          </div>
          <div className="float-card card-3">
            <div className="card-thumb"></div>
            <div className="card-label">
              <strong>تصنيف المنتج 3</strong>
              <span>وصف مختصر للمنتج والأبعاد</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

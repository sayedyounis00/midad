export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="/LOGO ICON.png" alt="شعار المنصة" className="logo-img" />
            <span className="logo-text">اسم المنصة</span>
          </a>
          <p>وصف مختصر عن المنصة.</p>
          <a href="#" className="social-link">رابط التواصل الاجتماعي</a>
        </div>

        <div className="footer-col">
          <h4>المنصة</h4>
          <a href="#">عن المنصة</a>
          <a href="#">تواصل معنا</a>
          <a href="#">الشروط والأحكام</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© اسم المنصة</span>
        <span>صُمم لأصحاب الأفكار.</span>
      </div>
    </footer>
  );
}

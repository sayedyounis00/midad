export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="/web_logo.png" alt="شعار مِداد" className="logo-img" />
          </a>
          <p>وكالة تسويق متكاملة، نؤمن أن كل علامة تجارية تستحق أن تُروى قصتها بالشكل الصحيح.</p>
        </div>

        <div className="footer-col">
          <h4>مِداد</h4>
          <a href="#services">خدماتنا</a>
          <a href="#how-it-works">كيف نعمل</a>
          <a href="#why-us">لماذا نحن</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© جميع الحقوق محفوظة لـ مِداد</span>
        <span>نبتكر هوية، نصنع محتوى، ونبني حضورًا رقميًا.</span>
      </div>
    </footer>
  );
}

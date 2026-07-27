export default function Stats() {
  const statsData = [
    { icon: '⚡', label: 'خدمة متكاملة', sub: 'نغطي احتياجاتك من الألف للياء' },
    { icon: '🎯', label: 'تركيز على النتائج', sub: 'كل خطوة لها هدف واضح' },
    { icon: '🤝', label: 'متابعة مستمرة', sub: 'معك في كل مرحلة من مشروعك' },
    { icon: '🚀', label: 'خبرة متراكمة', sub: 'سنوات من العمل الفعلي في المحتوى والتسويق الرقمي' }
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.icon}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-sub">{stat.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

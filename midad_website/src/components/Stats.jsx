export default function Stats() {
  const statsData = [
    { value: '+35', label: 'عنصر جاهز', sub: 'وصف فرعي قصير' },
    { value: '8', label: 'فئة رئيسية', sub: 'وصف فرعي قصير' },
    { value: 'mm', label: 'دقّة عالية', sub: 'وصف فرعي قصير' },
    { value: 'PDF', label: 'صيغة التحميل', sub: 'وصف فرعي قصير' }
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-sub">{stat.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

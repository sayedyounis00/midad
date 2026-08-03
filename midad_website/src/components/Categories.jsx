import { useState } from 'react';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');

  const categoriesData = [
    { icon: '🎬', title: 'إنتاج الفيديو والمحتوى', desc: 'من التصوير للمونتاج باحترافية' },
    { icon: '💻', title: 'تصميم وبرمجة المواقع', desc: 'حضور رقمي يعكس هويتك' },
    { icon: '📱', title: 'إدارة السوشيال ميديا', desc: 'محتوى يوصلك لجمهورك الصح' },
    { icon: '🎨', title: 'الهوية البصرية والبراندنج', desc: 'نبني هوية تعبّر عنك' },
    { icon: '🧭', title: 'الاستراتيجية التسويقية', desc: 'خطة واضحة نحو أهدافك' },
    { icon: '🎯', title: 'الإعلانات الممولة', desc: 'استهداف دقيق يحقق نتائج' }
  ];

  // Filter based on search term (title or description)
  const filteredCategories = categoriesData.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="categories" id="services">
      <div className="container">
        <span className="section-eyebrow">تصفّح خدماتنا</span>
        <h2 className="section-title">خدماتنا المميزة</h2>
        <p className="section-sub">كل خدمة مصممة لتلبي احتياجًا مختلفًا في رحلة علامتك التجارية</p>

        {/* Dynamic Search Filter Bar */}
        <div className="search-filter-container">
          <input 
            type="text" 
            placeholder="ابحث عن خدمة..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm('')}>✕</button>
          )}
        </div>

        <div className="category-grid">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, index) => (
              <a href="#" key={index} className="category-card">
                <span className="cat-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </a>
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>لم نجد نتائج تطابق بحثك.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

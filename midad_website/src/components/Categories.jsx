import { useState } from 'react';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');

  const categoriesData = [
    { icon: '🍕', title: 'فئة 1', desc: 'وصف قصير للفئة الأولى.' },
    { icon: '🥡', title: 'فئة 2', desc: 'وصف قصير للفئة الثانية.' },
    { icon: '🥐', title: 'فئة 3', desc: 'وصف قصير للفئة الثالثة.' },
    { icon: '💄', title: 'فئة 4', desc: 'وصف قصير للفئة الرابعة.' },
    { icon: '💊', title: 'فئة 5', desc: 'وصف قصير للفئة الخامسة.' },
    { icon: '📦', title: 'فئة 6', desc: 'وصف قصير للفئة السادسة.' },
    { icon: '🛍️', title: 'فئة 7', desc: 'وصف قصير للفئة السابعة.' },
    { icon: '🏷️', title: 'فئة 8', desc: 'وصف قصير للفئة الثامنة.' }
  ];

  // Filter based on search term (title or description)
  const filteredCategories = categoriesData.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="categories">
      <div className="container">
        <span className="section-eyebrow">التصنيفات</span>
        <h2 className="section-title">تصفّح حسب الفئة</h2>
        <p className="section-sub">وصف مختصر يشرح أن كل فئة مصمّمة لاحتياج مختلف.</p>

        {/* Dynamic Search Filter Bar */}
        <div className="search-filter-container">
          <input 
            type="text" 
            placeholder="ابحث عن فئة..." 
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

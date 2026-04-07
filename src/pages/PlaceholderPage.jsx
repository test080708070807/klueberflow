import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle" style={{ marginTop: '16px' }}>
        이 페이지는 준비 중입니다. 향후 요구사항에 맞게 구현될 예정입니다.
      </p>
      <div className="glass-card" style={{ marginTop: '24px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Content for {title} will be displayed here.</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;

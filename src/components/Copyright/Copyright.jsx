import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a', // Sleeker dark shade
        color: '#ffffff',
        textAlign: 'center',
        padding: '1rem 0.5rem', // Reduced padding
        fontFamily: "'Roboto', sans-serif",
        boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.25)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.4' }}> {/* Reduced line height */}
        <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}> {/* Slightly reduced font size */}
          &copy; {currentYear} <strong>Lawar</strong>. All rights reserved.
        </p>
        <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: '#d1d1d1' }}> {/* Adjusted spacing */}
          Designed and developed by{' '}
          <a
            href="https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#4caf50',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#81c784')}
            onMouseOut={(e) => (e.target.style.color = '#4caf50')}
          >
            Lawar James Chaudhary
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Copyright;

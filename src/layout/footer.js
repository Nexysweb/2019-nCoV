import React from 'react';

const footerStyle = {
  bottom: 0,
  width: '100%',
  height: '60px',//; /* Set the fixed height of the footer here */
  lineHeight: '60px',//; /* Vertically center the text there */
  backgroundColor: '#f5f5f5'
}

export default () => {
  return <footer style={footerStyle}>
    <div className="container">
      <span className="text-muted">Nexys &copy; 2020</span>
    </div>
  </footer>
}
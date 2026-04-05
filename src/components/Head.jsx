import { Link } from 'react-router-dom';

function Head() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#2c3e50',
      padding: '15px 0',
      zIndex: 1000
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px'
      }}>
        <Link to="/news" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Новости</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>О проекте</Link>
        <Link to="/contacts" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Контакты</Link>
      </nav>
    </header>
  );
}

export default Head;
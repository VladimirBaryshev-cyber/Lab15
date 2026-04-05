function Footer() {
  const currentDate = new Date().toLocaleDateString('ru-RU');
  
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '10px 0',
      zIndex: 1000
    }}>
      <p>Дата создания: 25.03.2026 {currentDate} | Барышев Владимир</p>
    </footer>
  );
}

export default Footer;
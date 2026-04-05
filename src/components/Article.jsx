import { Routes, Route } from 'react-router-dom';
function News() {
  return (
    <div>
      <h1>Новости</h1>
      <p>Добро пожаловать в раздел новостей! Здесь будут публиковаться самые свежие новости и обновления нашего проекта.</p>
      <p>Следите за обновлениями, чтобы ничего не пропустить!</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>Южный федеральный университет</h1>
    </div>
  );
}

// Компонент для страницы "Контакты"
function Contacts() {
  return (
    <div>
      <h1>Контакты</h1>
      <p>Телефон: +7 (928) 116-40-79</p>
      <p>Email: vbaryshev@sfedu.ru</p>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Страница не найдена. Проверьте правильность адреса.</p>
    </div>
  );
}

function Article() {
  return (
    <div className="article">
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Article;
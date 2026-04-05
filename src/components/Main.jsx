import Section from './Section';
import Article from './Article';
import Aside from './Aside';
import './Main.css';

function Main() {
  return (
    <main className="main-container">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}

export default Main;
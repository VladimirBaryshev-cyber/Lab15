import { BrowserRouter } from 'react-router-dom';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

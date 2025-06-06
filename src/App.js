import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/header';
import ThemeSwitcher from './components/themeSwitcher';
import Footer from './components/footer';
import Article from './components/article';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <ThemeSwitcher />
        <Header />
        <Article />
        <Footer />
      </Provider>

    </div>
  );
}

export default App;

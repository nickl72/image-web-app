// Components
import Footer from './components/main/Footer'
import Header from './components/main/Header'
import Main from './components/main/Main'
import AuthForm from './components/Modals/AuthForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <AuthForm /> */}
      <Footer />
    </div>
  );
}

export default App;

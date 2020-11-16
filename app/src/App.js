// Components
import Footer from './components/main/Footer'
import Header from './components/main/Header'
import Main from './components/main/Main'
import './styles/App.css';
import { pingServer } from './services/api_helper';

function App() {
  // console.log(setInterval(pingServer, 300000));

  
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

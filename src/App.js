import logo from './logo.svg';
import './App.css';
import HeaderDiv from './HeaderDiv/HeaderDiv';
import Main from './Main/Main';
import Footer from './HeaderDiv/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Headd'>
        <span className='top'></span>
          <HeaderDiv>

          </HeaderDiv>

        </div>
        <div className='Mainn'>

          <Main>
          
          </Main>
        </div>
        <Footer>
          
        </Footer>

      </header>
    </div>
  );
}

export default App;

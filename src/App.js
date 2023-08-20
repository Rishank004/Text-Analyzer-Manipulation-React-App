import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
   <Navbar/>
   <div className= "container my-3">
    <Textform heading="Enter the text area to analyze"/>
   </div>
    </>
  );
}

export default App;

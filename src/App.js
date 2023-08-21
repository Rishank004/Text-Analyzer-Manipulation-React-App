
import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
   <Navbar/>
   <div className= "container my-3">
    <Textform heading="Enter the text area to analyze"/>
    {/* <About/> */}
   </div>
    </>
  );
}

export default App;

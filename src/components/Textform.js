import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclicked =()=>{
        let newText = text.toUpperCase();
      console.log('Convert To Uppercase Clicked');
      setText(newText);  
      }
      const handlelowclicked =()=>{
        let newText = text.toLowerCase();
      console.log('Convert To LowerCase Clicked');
      setText(newText);  
      }
      const changehandler =(event)=>{
        console.log('on changed');  
        setText(event.target.value); 
        }
    const handleClearclicked = (event)=>{
        setText("");

    };
    const countSentences = (inputText) => {
        const sentences = inputText.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
        return sentences.length;
      };
      const handleremovespace =() => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      };

const[text,setText] = useState('Enter Text Here');
  return (
    <div className='container'>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="mybox" className="form-label">Enter your Text</label>
        <textarea className="form-control" id="mybox" rows="8" onChange={changehandler} value={text}></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-2" onClick={handlelowclicked}>Convert To LowerCase</button>
      
      <button className="btn btn-primary mx-3 my-2" onClick={handleupclicked}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-3 my-2 " onClick={handleClearclicked}>Clear Text Area</button>
      <button className="btn btn-primary mx-3 my-2 " onClick={handleremovespace}>Remove Extra Spaces</button>
      <div className='container my-3'>
      <h3>Text Summary:</h3>
        <p>No. of words = {text.split(" ").length-1}</p>
        <p>No. of characters: {text.length}</p>
        <p>No. of Spaces: {text.split(" ").length - 1}</p>
        <p>No. of Sentences: {countSentences(text)}</p>
        <p>Estimated minutes {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}


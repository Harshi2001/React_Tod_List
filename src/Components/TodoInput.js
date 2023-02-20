import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-conatiner">
        <input 
        type="text"
         className='input-box-todo' 
         placeholder='Enter Your todo...'
         value={inputText}
          // target the text when onchange is done the array fuction(setInputText) is call.
         onChange={e => { 
            setInputText(e.target.value)
            }}
            onKeyDown={handleEnterPress}
             />
        <button className='add-btn' onClick={()=> {
            props.addList(inputText)
            setInputText(" ")
        }}>+</button>
    </div>
    );
}

export default TodoInput;

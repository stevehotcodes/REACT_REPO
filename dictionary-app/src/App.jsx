import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import DictionaryReducer from './DictionaryReducer'

import './App.scss'
import { useEffect } from 'react'
import { useReducer } from 'react'

function App() {

   const initialState={
      word:'',
      definiton:null,
    }

    const DictionaryReducer=(state, action)=>{
      switch(action.type){
          case 'SET_WORD':
              return{...state, word:action.payload, definition:null};
          case 'SET_DEFINITION':
              return {...state, definition:action.payload}
          default:
              return state
      }
  
        
  }
  

  const [searchWord, setWord] = useState("");
  const [state, dispatch]=useReducer(DictionaryReducer,initialState)
 
 
  const handleSubmit=(e)=>{
        e.preventDefault()
       let  word=e.target[0].value
       console.log(word)
       setWord(word)
      dispatch({type:'SET_WORD',payload:word})
  }






  const fetchDefinition= async ()=>{
    const response =await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
    console.log("fetching ......");
    
    console.log(response.data);
    dispatch({type:'SET_WORD', payload:response.data[0]})
    //
  }

  useEffect(()=>{
    if(searchWord!==""){
      
    fetchDefinition()
    }
  },[searchWord]  )
  console.log(state);


  return (
    <>
    <h1 className='heading'>Hotcodes' Dictionary App</h1>
        <form action="" className="dictionary-form" onSubmit={handleSubmit}>   
            <div className='input-search-icon'>
                  <input type="text" placeholder="Type your search keyword"  onChange={(e)=>dispatch({type:'SET_WORD',payload:e.target[0].value})} /> 
                   <img src="src/assets/search-outline.svg" alt="" />
            </div>
           
        </form>

        {/* <main ></main>
         */}
      

        
    </>
  )
}

export default App

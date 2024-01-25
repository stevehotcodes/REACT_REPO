import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import DictionaryReducer, { initialState } from './DictionaryReducer'
import ClipLoader from "react-spinners/ClipLoader";
import './App.scss'
import { useEffect } from 'react'
import { useReducer } from 'react'
function App() {

   


  //   const DictionaryReducer=(state, action)=>{
  //     switch(action.type){
  //         case 'SET_WORD':
  //             return{...state, word:action.payload, definition:null};
  //         case 'SET_DEFINITION':
  //             return {...state, definition:action.payload}
  //         default:
  //             return state
  //     }
  
        
  // }
  

  const [searchWord, setWord] = useState("");
  const [state, dispatch]=useReducer(DictionaryReducer,initialState)


  // const style={
  //   display: block;
  //   margin: 0 auto;
  //   borderColor: red;
  
  // } 

 
 
  const handleSubmit=(e)=>{
        e.preventDefault()
       let  word=e.target[0].value
       console.log(word)
       setWord(word)
      // dispatch({type:'SET_WORD',payload:word})
  }






  const fetchDefinition= async ()=>{
    dispatch({type:'SET_LOADING',payload:true})
    try {
      const response =await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      console.log("fetching ......");
      
      console.log(response.data);
      dispatch({type:'SET_DEFINITION', payload:response.data})
      dispatch({type:'SET_LOADING',payload:false})
      
    } catch (error) {
       dispatch({type:'SET_ERROR',payload:error})
    
    } 
    finally{
      dispatch({type:'SET_LOADING',payload:false})
    }


    
    //
  }

  useEffect(()=>{
    if(searchWord!==""){
      
    fetchDefinition()
    }
    else{

    }
  },[searchWord]  )
//   console.log("this the current state",state);
//   console.log('State:', state);
//   const fetchedDefinition=state.definition || []
// console.log('Definition:', fetchedDefinition);

if(state.loading){
  // <ClipLoader size={130} color="#fff"
  // loading={state.loading} />
  // return <p>{state.loading}</p>
  console.log("loading steate ",state.loading);
}

if(state.error){
  return <div className='error'>something went wrong.......kindly refresh the page and try again</div>
  console.log( "this is an error",state.error);
}


  return (
    <div className='container'>
    <h1 className='heading'>Hotcodes' Dictionary App</h1>
        <form action="" className="dictionary-form" value={state.word} onSubmit={handleSubmit}>   
            <div className='input-search-icon'>
                  <input type="text" placeholder="Type your search keyword"  onChange={(e)=>dispatch({type:'SET_WORD',payload:e.target.value})} /> 
                   <img src="src/assets/search-outline.svg" alt="" />
            </div>
           
        </form>
        

        <div className='definitionRender'>

          {state.loading&&(
           <ClipLoader size={130} color="#fff"
           loading={state.loading} />
          )}
        {state.word && state.definition  &&(
          <div className="definition" key={state.word}>
            <h2>Definition for: {state.word}</h2>
            {state.definition.map((wordData, index) => (
              <div key={index}>
                <strong>Word:</strong> {wordData.word}
                <br />
                <strong>Phonetic:</strong> {wordData.phonetic}
                <br />
                <strong>Part of Speech:</strong> {wordData.meanings[0].partOfSpeech}
                <ul>
                  {wordData.meanings[0].definitions.map((definition, index) => (
                    <li key={index}>
                      <strong>Definition:</strong> {definition.definition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {state.error??(
          <div> something went wrong.......kindly refresh the page and try again</div>
        )}
      </div>

   
    
       
    
      
      

        
    </div>
  )
}

export default App

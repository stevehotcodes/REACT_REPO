export const initialState= {
    word:'',
    definition:[],
    loading:false,
    error:"",
 }




const DictionaryReducer=(state, action)=>{
    
    switch(action.type){
        case 'SET_WORD':
            return{...state, word:action.payload};
        case 'SET_DEFINITION':
            return {...state,definition:action.payload}   
        case 'SET_LOADING':
            return {...state,loading:action.payload}   
        case 'SET_ERROR':
            return {...state, error:action.payload}  
        default:
            return state
    }

      
}
export default DictionaryReducer
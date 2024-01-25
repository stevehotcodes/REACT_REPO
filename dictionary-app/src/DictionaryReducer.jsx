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
export default DictionaryReducer
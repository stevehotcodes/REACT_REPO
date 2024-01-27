
export const  intialState={
    searchCountry:"",
    country:[],
    loading:false,
    regions:[],
    countries:[],
    selectedRegion:""
}


const Reducer=(state, action)=>{
    
    switch(action.type){
        case 'SET_WORD':
            return{...state, searchCountry:action.payload};
        case 'SET_ERROR':
            return {...state, error:action.payload}  
        case 'SET_LOADING':
              return {...state, loading:action.payload}    
        case 'SET_COUNTRY':
                return {...state,country:action.payload}  
         case 'SET_COUNTRIES':
                    return {...state,countries:action.payload}  
        case 'SET_REGION':
                return {...state,regions:action.payload}   
        case 'SET_SELECTED_REGION':
             return {...state,selectedRegion:action.payload}   
        default:
            return state
    }

}
export default Reducer 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import FlagsDisplay from './components/FlagsDisplay'
import Header from './components/Header'
import { useReducer } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import Reducer, { intialState } from './reducer/Reducer'
import CountryData from './components/countryData'



function App() {
  const [searchCountry, setWord] = useState("");
  const [searchchRegion, setRegion]=useState("");




const [state, dispatch]=useReducer(Reducer,intialState )


  const handleChange =(e)=>{
    e.preventDefault()
    let  countryName=e.target[0].value
    console.log(countryName)
    setWord(countryName)

  }
  

  const fetchAllCountries=async()=>{
    dispatch({type:'SET_LOADING', payload:true})
    try{
         console.log("I am fetching all data of the countries");
         const response=await axios.get(`https://restcountries.com/v3.1/all`);
         console.log("fetching............all countries")
         console.log(response.data)
         dispatch({type:"SET_COUNTRY", payload:response.data})
    }
    catch(error){
      console.log(error);
      dispatch({type:'SET_ERROR',payload:error})
    }
    finally{
      dispatch({type:'SET_LOADING',payload:false})
    }
  }





  const fetchCountry= async ()=>{
    dispatch({type:'SET_LOADING',payload:true});
    try {
      console.log(searchCountry)
        const response=await axios.get(`https://restcountries.com/v3.1/name/${searchCountry}`);
        console.log("fetching........");

        console.log("resposne from the api",response)

        dispatch({type:"SET_COUNTRY", payload:response.data})
        dispatch({type:'SET_LOADING',payload:false});
    } catch (error) {

       console.log(error);
       dispatch({type:'SET_ERROR',payload:error})
      
    }
    finally{
      dispatch({type:'SET_LOADING',payload:false})
    }

  }

 const fetchAllRegions=async ()=>{
      try {
         const response =await axios.get(`https://restcountries.com/v3.1/all`);
         const data= await response.data

        console.log(data)

        const uniqueRegion= [...new Set(data.map(country => country.region))]; // extract unique regions
       
        dispatch({type:'SET_REGION', payload:uniqueRegion.filter(region=>region)})

      
    } catch (error) {
      
      console.log(error);
      dispatch({type:'SET_ERROR',payload:error})
    }

 }


 const fetchCountriesByRegion=async()=>{
     try {
        if(state.selectedRegion){
             const resposne=await axios.get(`https://restcountries.com/v3.1/region/${state.selectedRegion}`);
             console.log("this is a response for counties with regions",resposne)
             const data =await resposne.data
             console.log(data)
             dispatch({type:'SET_COUNTRY',payload:data})
             console.log(state.country)
        }
      
     } catch (error) {
       console.log(error);
       dispatch({type:'SET_ERROR',payload:error})
     }
 }

 




  useEffect(()=>{

    fetchAllRegions()

    if(searchCountry!==""){
        fetchCountry();
        
    }
    else{
        fetchAllCountries()
    }
  },[searchCountry])


  if(state.error){
    return <div className='error'>something went wrong.......kindly refresh the page and try again</div>
    console.log( "this is an error",state.error);
  }
  
  console.log(state.regions)



 

  return (
    <>
        <Header/>
        <div className='form-wrapper'>
              <form  className="inputForm" action="" onSubmit={handleChange}>
                  <input type="text" placeholder="Type your search keyword"  onChange={(e)=>dispatch({type:'SET_WORD',payload:e.target.value})} /> 
                  <select name="region" id="" placeholder="filer by country" value={state.selectedRegion}  onChange={(e)=>dispatch({type:'SET_SELECTED_REGION',payload:e.target.value})}>
                    <option >Filter by country</option>
                    
                    {state.regions.map(region => (
                      <option key={region} value={region}    onClick={fetchCountriesByRegion}>{region}</option>
                     ))}
                  </select>
                  <button onClick={fetchCountriesByRegion}>Fetch Countries</button>
              </form>
        </div>
       
        {/* <FlagsDisplay/> */}
        <h2>search by countryname:{state.searchCountry}</h2>
        <div className="renderingDiv">
        {state.loading&&(
           <ClipLoader size={130} color="#fff"
           loading={state.loading} />
          )}
         
        

           {state.searchCountry||state.country &&!state.loading &&(
            <div className='country'>
              
              
              {state.country.map((countryData) => (<CountryData  key={countryData.fifa} country={countryData}/>

              ))}
          </div>
              

           
          )}

        </div>
      
     
    </>
  )
}

export default App

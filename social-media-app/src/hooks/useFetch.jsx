import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const useFetch = (url) => {
     const [loading, setLoading]=useState(false);
     const[data, setData]=useState([]);


     const getData=useCallback(async ()=>{
        setLoading(true)
        try {
            //fetch data
            const response=await axios.get(url);
            setData(response.data);
            setLoading(false);           
           } 
        catch (error) {
            //catch errors when they occur
             console.log(error);
             setLoading(false)
        }
        finally{
            //regardless whether the try / catch  is executed 
            setLoading(false)
        }
     },[url])

     useEffect(()=>{
        getData();
     },[getData]);

    //   console.log('from fetch',data)
     return {data, loading}

}

export default useFetch
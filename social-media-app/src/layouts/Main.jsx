import Header from "../components/Header"
import ContentLayout from "./ContentLayout"
import "./Main.scss"
import { useReducer } from "react"
import AppReducer, { initialState } from "../reducers/AppReducer"
import Login from "../pages/Login/Login"


const Main=()=>{
     return(
       
        <div className="main-container">
            <Header/>
        
            <ContentLayout/>
            {/* <div>
                {state.isNavigationOpen &&(
                    <Notification handleOnClose={handleNavigationClose}/>
                )}
            </div> */}

        </div>
        
    )

}

export default Main


import "./ContentLayout.scss"
import Content from "../components/Content"
import RightSidebar from "../components/RightSidebar"
import SideMenu from "./SideMenu"
import Notification from "../pages/Notification/Notification"
import { useReducer } from "react"
import AppReducer, { initialState } from "../reducers/AppReducer"

const ContentLayout=()=>{
  
const [state,dispatch]=useReducer(AppReducer,initialState);

const handleNavigationClose=()=>{

       dispatch({type:'SET_NAVIGATION_OPEN',payload:false});
}
if(state.isNavigationOpen){
    console.log("state of teh modal is open")
}



    return (
        <div className="content-wrapper">
            <SideMenu/>
                <Content/>
            <RightSidebar/>
            
          <div>
                {state.isNavigationOpen &&(
                    <Notification handleOnClose={handleNavigationClose}/>
                )}
            </div> 

        </div>
    )
}

export default ContentLayout
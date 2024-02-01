import "./ContentLayout.scss"
import Content from "../components/Content"
import RightSidebar from "../components/RightSidebar"
import SideMenu from "./SideMenu"

const ContentLayout=()=>{
    return (
        <div className="content-wrapper">
            <SideMenu/>
                <Content/>
            <RightSidebar/>
        </div>
    )
}

export default ContentLayout
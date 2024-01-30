import "./ContentLayout.scss"
import Content from "../components/Content"
import RightSidebar from "../components/RightSidebar"

const ContentLayout=()=>{
    return (
        <div className="content-wrapper">
            <Content/>
            <RightSidebar/>
        </div>
    )
}

export default ContentLayout
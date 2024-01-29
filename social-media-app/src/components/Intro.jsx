import './Intro.scss'

const Intro=()=>{
    return(
        <div className='intro-container'>
            <div>
                <h4>Intro</h4>
            </div>
            <p>I am experienced joiner with well developed skills</p>
            <div className='intro-item'>
                <img src="src\assets\location-outline.svg" alt="" />
                <span>2972 Westhemer Rd.</span>
            </div>

            <div className='intro-item'>
                <img src="src\assets\calendar-outline.svg" alt="" />
                <span>Binford Ltd.</span>
            </div>

            <div className='intro-item'>
                <img src="src\assets\calendar-outline.svg" alt="" />
                <span>29 September 2017</span>
            </div>

            <div className='intro-item'>
                <img src="src\assets\link-outline.svg" alt="" />
                <span>dribble.com/Angela</span>
            </div>

        </div>
    )
}

export default Intro
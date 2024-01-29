import './ProfileCompletion.scss'

const ProfileCompletion=()=>{
    return(
        <div className='profile-completion-container'>
            <h4>Complete your Profile</h4>
            <div className='progress-bar'>
                <input type="range" name="" id=""  min="20" max="80"/>
                <p>80%</p>
            </div>
        </div>
    )
}

export default ProfileCompletion
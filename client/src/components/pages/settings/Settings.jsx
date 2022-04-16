import './settings.css'
import Sidebar from '../../sidebar/Sidebar'

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="settingsPP">Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/4560145/pexels-photo-4560145.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" 
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" className="fileInput" 
                    style={{display: "none"}} 
                    />
                </div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="username" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="johndoe@gmail.com" />

                <label htmlFor="passwd">Password</label>
                <input type="password" id="passwd" placeholder="Password" />

                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings
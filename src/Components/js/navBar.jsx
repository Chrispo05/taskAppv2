import homeIcon from  "../../Icons/home.png"
import notebookIcon from  "../../Icons/notebook.png"
import plusIcon from "../../Icons/plus.png"
import settingsIcon from "../../Icons/settings.png"
import "../css/NavBar.css"
import "../css/GlobalStyles.css"

export default function NavBar() {
    return(
        <div className="flex-row justify-center nav-bar-main-container">
            <div className="navBar-container">
                 <div className="navBar-icon-container flex-row justify-center align-center   shadow-1   border-right "><div className="navBar-icon-img-container">  <img src={homeIcon}/> </div> </div>
                 <div className="navBar-icon-container flex-row justify-center align-center shadow-1 border-right"><div className="navBar-icon-img-container">  <img src={notebookIcon}/> </div> </div>
              
                 <div className="navBar-icon-container flex-row justify-center align-center shadow-1  "><div className="navBar-icon-img-container">  <img src={settingsIcon}/> </div> </div>
                
            </div>

        </div>
    )
}
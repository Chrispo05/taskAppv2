import Header from "./js/Header.jsx";
import HomeInfoSection from "./js/HomeInfoSection.jsx";
import NavBar from "./js/navBar.jsx";
import AlertPopUp from "./js/Ui.jsx";
import React, { useState } from 'react';
import UserInfoAuthContextProvider from "./contextProviders/userContext.jsx";







export default function Home() {
    //usestate para mostrar la alerta pop up
    const [isUpAlertPopUp, setisUpAlertPopUp] = useState(false);
    const [isAlertPopUpcolor, setAlertPopUpColor] = useState(false);
    const [alertPopUpMessage, setAlertPopUpMessage] = useState("");
    const [isLoadingAlert, setIsLoadingAlert] = useState(false)

        //funcion para llamar la alerta, se le pasan algunos valores 
        const handleIsUpAlertPopUpState = (isUp,colorState = true,alertMessage,isLoading = false)=>{
            setisUpAlertPopUp(isUp);
            
            setAlertPopUpColor(colorState);
            setIsLoadingAlert(isLoading);
            setAlertPopUpMessage(alertMessage);
            console.log(isAlertPopUpcolor,isUpAlertPopUp,alertPopUpMessage)
            
        }


    return(
        <div>
            <UserInfoAuthContextProvider>

                <AlertPopUp color={isAlertPopUpcolor} message={alertPopUpMessage} isUp={isUpAlertPopUp} isLoading={isLoadingAlert} />
                <Header/>
                <NavBar/>
                <HomeInfoSection alertHandler={handleIsUpAlertPopUpState}/>
            </UserInfoAuthContextProvider>
        </div>
    )
}
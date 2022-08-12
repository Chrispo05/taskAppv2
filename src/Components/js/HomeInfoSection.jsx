import "../css/HomeInfoSection.css"
import { useContext, useEffect, useState } from "react";
import LoginModal, {LoginButton} from "./LoginModal";
import {getUserInfoFromApiCall, userDbCreate, userExistsOnDatabase} from "./ApiCallHelpers.jsx"

import plusIcon from "../../Icons/plus.png"
import notebookIcon from "../../Icons/notebook.png"
import ModalCreate from "./ModalCreate";
import ModalNoteList from "./ModalNoteList";
import { userAuthContext, userGlobalInfoContext } from "../contextProviders/userContext";
import { useAuth0 } from "@auth0/auth0-react";


export default  function HomeInfoSection(props) {

    
   //cada que se renderice home, llamamos la ventana de login si el contexto global es
  const [isAuthenticated, setIsAuthenticated] = useState(false)
        
     
    //contexto global de la info del usuario
    const [userGlobalInfoState, setUserGlobalInfoState] = useContext(userGlobalInfoContext);



    //logica para verificar el estado del usuario si esta loggeado cada que se monte el componente
    //verifica el cotexto global
    const [userAuthState, setUserAuthState] = useContext(userAuthContext);
  





    //cuando se valie el usuario, verificamos si existe en la base de datos
    

     //cuando se valide el usuario, hacemos el guardado del mismo en la base de datos
     
    // useEffect(() => {
    //     if (isAuthenticated) {
            
    //         const {email , name , picture} = user;
    //         //primero verificamos si existe en la base de datos
    //             const userExists =  userExistsOnDatabase(email);
    //                  userExists.then(response =>{
    //                  //si el usuario existe , pasamos su info al contexto global de info del usuario
                    
    //                  if (response) {
    //                     setUserGlobalInfoState({
    //                         name: response[1].name,
    //                         email: response[1].email,
    //                         picture: response[1].picture,
    //                         id: response[0],
    //                         notes: response[1].notes
    //                     })
                        
    
                        
                        
                        
    //                  }else{
    //                     //SI EL USUARIO NO EXISTE, CREAMOS SU PERFil EN LA DB
    //                     console.log("CREAMOS EN DB");
    //                     userDbCreate(user)
    //                         .then((res)=> {
    //                             //despues de obtener el id del nuevo usuario creado en la db
    //                                     //actP objeto global con la info del nuevo usuario
    //                                     setUserGlobalInfoState({
    //                                         name: name,
    //                                         email: email,
    //                                         picture: picture,
    //                                         id: res.name
    //                                     })
                                    
    //                         })
                        
    //                  }
    
    //             })
    //      }
    // }, [isAuthenticated])
    


    return(
        <div>
            
                <div>
                    {userAuthState? "" : <LoginModal alertHandler={props.alertHandler}/>}
                    {/* {!isAuthenticated? <LoginButton/> : ""} */}
                </div>
                <div >
                    {userAuthState? <InfoSection alertHandler={props.alertHandler} userInfoGet={userGlobalInfoState}/> : "" }
                </div>
        </div>
    )
}



function InfoSection(props) {

    //logica para manejar el estado de el modal de crear nota
    const [isOpenModalCreate, setisOpenModalCreate] = useState(false);
        const handleIsOpenModalCreate = ()=>{
            setisOpenModalCreate(isOpenModalCreate? false : true)
        }

    //logica para manejar el estado del modal lista de notas
    const [isOpenModalNoteList, setisOpenModalNoteList] = useState(false)
        const handleIsopenModalNoteList = ()=>{
            setisOpenModalNoteList(isOpenModalNoteList? false : true)
        }

    //logica asincrona para llamar los datos de la persona que hizo login en la base de datos



    return(
     <div>

            {isOpenModalCreate? <ModalCreate alertHandler={props.alertHandler} handleModal={handleIsOpenModalCreate}/> : ""}
            {isOpenModalNoteList? <ModalNoteList alertHandler={props.alertHandler} handleModal={handleIsopenModalNoteList}/> : ""}
            <div className=" home-info-section-main-container flex-row justify-center align-center ">
                
                <div className="home-info-section-container  ">
                    <div className="info-section-user-img-container flex-row justify-center">
                        <img className="shadow-1" src={props.userInfoGet.picture? props.userInfoGet.picture : ""} alt={props.userInfoGet.userName} />
                    </div>

                    <div className="flex-column justify-center align-center color-b font-500">

                        <p>  {props.userInfoGet.name} </p>
                        <p>  {props.userInfoGet.email} </p>
                        <p>  Cantidad de notas: <span className="color-a"> {props.userInfoGet.notes? props.userInfoGet.notes.length : 0 }</span> </p>
                    </div>
                    <div className="flex-column justify-center align-center">
                        <button onClick={handleIsOpenModalCreate} className="home-info-section-plus-button flex-row align-center"> <img src={plusIcon}/> <p className="color-f font-500">Crear nota</p> </button>
                        <button onClick={handleIsopenModalNoteList} className="mt-16 home-info-section-plus-button flex-row align-center"> <img src={notebookIcon}/> <p className="color-f font-500">Ver notas</p> </button>
                    
                    </div>
                
                </div>


            </div>
     </div>
    )
}
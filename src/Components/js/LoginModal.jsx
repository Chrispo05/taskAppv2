import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState } from "react"
import { userAuthContext, userGlobalInfoContext } from "../contextProviders/userContext";
import "../css/LoginModal.css"
import { loginApicall } from "./ApiCallHelpers";





export function LoginButton() {
    
    const {loginWithRedirect} = useAuth0();

    return(
        <button className="loginButton font-500 font-16" onClick={loginWithRedirect}>Ingresa</button>
    )
}




export default function LoginModal(props) {
        //usestate para desplegar login o singin
        let [handleFormCreate, setHandleFormCreate] = useState(false);
            const changehandleformCreateState = ()=>{
                setHandleFormCreate(handleFormCreate? false : true)
                console.log(handleFormCreate)
            }

    
    
    return(
        
        <div className="login-modal-main-container flex-row justify-center align-center ">
            <div className="login-modal-container flex-row justify-center ">
                {!handleFormCreate? <LoginForm alertHandler={props.alertHandler} handlerstateFormCreate={changehandleformCreateState}/> : <CreateForm handlerstateFormCreate={changehandleformCreateState}/>}
            </div>
        </div>
    )
}



function LoginForm(props) {


    //constexto global de usuario autenticado
    
    const [userAuthState, setUserAuthState ]= useContext(userAuthContext);

 //llenamos un objeto con los valores de los inputs del login
    const [loginObj, setLoginObj] = useState({
        email: "",
        password: ""
    });
        function setLoginObjValues(e) {
            setLoginObj({
                ...loginObj,
                [e.target.name]: e.target.value
            })
            
        }

//submit del formulario de login
        function handleLoginSubmit(e) {
            e.preventDefault();
            //Validamos que los campos no estén vacíos
                if (loginObj.email.length === 0 || loginObj.password.length === 0) {
                    props.alertHandler(true,false,"Los campos están vacíos");
                    setTimeout(() => {
                        props.alertHandler(false,false)
                    }, 2000);
                }else{
                    //validamos que el email sea válido
                    const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
                    
                        if (loginObj.email.match(regExp) === null) {    
                            props.alertHandler(true,false,"Email no válido");
                            setTimeout(() => {
                                props.alertHandler(false,false)
                            }, 2000);
                        }else{
                            if (loginObj.password.length > 6) {
                                //sacamos la ayuda visual de carga
                                props.alertHandler(true,true,"",true)
                                //enviamos la petición a ver si existe el usuario
                                    console.log("enviando petición");
                                    console.log(loginObj);


                                    //enviamos la petición con la funcion helper de llamada a la api

                                    loginApicall(loginObj)
                                        .then(resjson =>{
                                            if (resjson.error) {
                                                if (resjson.error === "Unprocessable Entity") {
                                                    props.alertHandler(true,false,"Usuario no existe, crea una cuenta nueva.");
                                                    setTimeout(() => {
                                                        props.alertHandler(false,false)
                                                    }, 2000);
                                                }
                                            }else{
                                                //una vez backend nos devuelve el logged in,
                                                // pasamos a cambiar el contexto global de authenticated
                                                setUserAuthState(true)
                                                console.log(resjson);
                                                props.alertHandler(true,true,"Sesión iniciada.");
                                                setTimeout(() => {
                                                    props.alertHandler(false,true)
                                                }, 2000);
                                            }
                                        })


                                
                            }else{
                                props.alertHandler(true,false,"La contraseña debe contener más de 6 caracteres");
                            setTimeout(() => {
                                props.alertHandler(false,false)
                            }, 2000);
                            }
                        }
                }

          
        }

    return(
        <form className="shadow-1 flex-column justify-center align-center login-modal-form color-h">
            <label className="flex-column">
                <p className="font-500">Email.</p>
                <input onChange={setLoginObjValues} className="mb-16"  type="email" name="email" />
                <p className="font-500">Contraseña.</p>
                <input onChange={setLoginObjValues} className="mb-16" type="password" name="password" />
            </label>
            <input onClick={handleLoginSubmit} className="mt-16" type="submit" value="Iniciar sesión" />
            <p onClick={props.handlerstateFormCreate} className="align-self-end login-modal-create-account-p color-h">Crea una cuenta...</p>
        </form>
    )
}



function CreateForm(props) {


// logica del widget para seleccionar foto
    function openWidgetPhoto(e) {

        e.preventDefault();
        var myCropWidget = window.cloudinary.createUploadWidget({
            cloudName: 'demo', uploadPreset: 'preset1', folder: 'widgetUpload', cropping: true}, 
            (error, result) => { console.log(error, result) })
          
    }




   return(
        <form  className="shadow-1 flex-column justify-center align-center login-modal-form color-h">
            <label className="flex-column">
                <p className="font-500">Nombre.</p>
                <input className=""  type="name" name="name" />
               
                <p className="font-500">Email.</p>
                <input className=""  type="email" name="name" />
                <p className="font-500">Contraseña.</p>
                <input className="" type="password" name="password" />
                <p className="font-500">Confirma contraseña.</p>
                <input className="" type="password" name="password" />
                
           
                {/* <p className="font-500">Sube Foto.</p> */}
                <button id="upload-widget" onClick={openWidgetPhoto} className="cloudinary-button">Sube Foto</button>

            </label>
            <input className="mt-16" type="submit" value="Crear cuenta" />
            <p onClick={props.handlerstateFormCreate}   className="form-create-p align-self-end login-modal-create-account-p">Ya tengo una cuenta...</p>
        </form>
   )
}
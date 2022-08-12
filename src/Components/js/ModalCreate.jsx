import "../css/ModalCreate.css";
import React, { useContext, useState } from 'react';
import { getNotesFromApiCall, updateGlobalContextNotes, userDbCreateNote } from "./ApiCallHelpers";
import { userGlobalInfoContext } from "../contextProviders/userContext";


export default function ModalCreate(props) {
    //para evitar la propagación del evento padre
    const preventPropagation = (e)=>{
        e.stopPropagation()
    }

    //usecontext contenedor de la info global del usuario
    const [userGlobalInfoState, setUserGlobalInfoState] = useContext(userGlobalInfoContext);

    //objeto que se crea de los campos del formulario
    const [newNoteObjCreated, setNewNoteObjCreated] = useState({title: "" , body: ""})
                    
        //funciones para llenar el objeto cuando llenamos los input
            function handleNoteObjTitle(e) {
                setNewNoteObjCreated(prevState=>({...prevState, title: e.target.value}))
                console.log(newNoteObjCreated)
              
            }
            function handleNoteObjBody(e) {
                setNewNoteObjCreated(prevState => ({...prevState, body: e.target.value}))
                console.log(newNoteObjCreated)
            }
    //
        function handleDefault(e) {
            e.preventDefault();
        }
    //funcion para manejar el submit del formulario de creación
            //validamos que los campos no estén vacíos
        function handleCreateSubmitButton(e) {
            e.preventDefault();
            
            if (newNoteObjCreated.title.length === 0 || newNoteObjCreated.body.length === 0) {
               props.alertHandler(true,false,"Los campos están vacíos")
               setTimeout(() => {
                    props.alertHandler(false,false)
               }, 2000);
            }else{

                // //enviamos alerta visual y hacemos llamada a la api para crear la nota en la base de datos
                // const userid = userGlobalInfoState.id;
                //      props.alertHandler(true,true,"",true)
                //  userDbCreateNote(newNoteObjCreated, userid)
                //     .then((res) => {
                //         //si se creó la nota, actualizamos el contexto global para que aparezcan las nuevas notas
                //             getNotesFromApiCall(userGlobalInfoState.id)
                //                 .then((res)=> {
                //                     setUserGlobalInfoState({
                //                         ...userGlobalInfoState,
                //                         notes: res
                //                     });
                //                     setTimeout(() => {
                //                         console.log(userGlobalInfoState);
                //                     }, 2000);
                //                 })
                //         console.log("creando nota", res)
                //         setTimeout(() => {
                //             props.alertHandler(true,true,"Nota creada con éxito")
                //             setTimeout(() => {
                //                 props.alertHandler(false,true)
                //                 props.handleModal();
                              

                //             }, 2000);
                //         }, 1000);
                     
                //     }).catch((res)=>{
                //             console.log("Fallo al crear nota", res)
                //     })
                
               
            }
       
            
        }

    return(
        <div onClick={props.handleModal} className="modal-create-main-container flex-row justify-center align-center">
            <div onClick={preventPropagation} className="modal-create-container">
                <div className="flex-row justify-center note-create-form-main-container">
                    <form className="note-create-form-container shadow-1 flex-column justify-center align-center  color-h">
                        <label className="flex-column align-center note-create-text-label-container ">
                            <p className="font-500">Título de la nota.</p>
                            <input onChange={handleNoteObjTitle} className="mb-16"  type="text" name="title" />
                            <p className="font-500">Cuerpo de la nota.</p>
                            <textarea onChange={handleNoteObjBody} name="body"></textarea>
                        </label>
                        <input onClick={handleCreateSubmitButton} onChange={handleDefault} className="mt--6 note-create-submit-input" type="submit" value="Crear Nota" />
                    
                    </form>


                </div>
            </div>
        </div>
    )
}
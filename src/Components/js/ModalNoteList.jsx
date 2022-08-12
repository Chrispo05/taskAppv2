import { getUserInfoFromApiCall } from "./ApiCallHelpers"
import editIcon from "../../Icons/edit.png"
import deleteIcon from "../../Icons/delete.png"
import "../css/ModalNoteList.css"
import React, { useContext, useState } from 'react';
import ModalEditNote from "./ModalEditNote";
import { userGlobalInfoContext } from "../contextProviders/userContext";





export default function ModalNoteList(props) {

    //logica para obtener la lista de las notas del contexto global de notas
    const [userGlobalInfoState, setUserGlobalInfoState] = useContext(userGlobalInfoContext);
    let notasArray = userGlobalInfoState.notes
    userGlobalInfoState.notes? console.log("sii"): console.log("nooo")
    //logica para parar la propagación de evento
    function handleEventPropagation(e) {
        e.stopPropagation();
    }
   
    // logica para desplegar el formulario de edición de nota
    const [isOpenEditModal, setisOpenEditModal] = useState(false);


        const handleIsOpenEditModal = ()=>{
            setisOpenEditModal(isOpenEditModal? false : true)
        }
            let toEditNote;

    //hook del objeto que se le vapa a el formulario de edicion (nota)
    const [noteEditObj, setnoteEditObj] = useState({})



    //logica para obtener la cantidad de tarjetas a crear
    const getCards = (e)=>{

        function openEditModal(note) {
            //llenar la variable para pasarla al modal de edición
            setnoteEditObj(note);
            console.log(noteEditObj)

            //llamar el modal de edición
           
                handleIsOpenEditModal();
           
           
        }


        return( notasArray.map((note,i)=>{

            //logica para llamar el modal de edicion de nota y pasarle los valores de cada una de las notas
     


           

            let isCardPair;
            if (i%2 === 0 ) {
                isCardPair = true
            }else {
                isCardPair = false
            }
            
            return(<div onClick={handleEventPropagation} className={`flex-column align-center modal-note-card-main-container shadow-1 ${isCardPair? "modal-note-card-margin-top" : ""}`}>
                        <div className="shadow-1 color-f font-500 modal-note-card-title-container flex-row justify-center "><p>{note.title}</p></div>
                        <div className="color-h font-500 modal-note-card-body-container  "><p>{note.body}</p></div>
                        <div className="flex-row modal-note-icon-container">
                            <div onClick={()=> openEditModal(note)}  className=" modal-note-icon-container" > <img className="modal-note-card-edit-icon" src={editIcon}/> </div>
                            <div className=" modal-note-icon-container" > <img className="modal-note-card-edit-icon2" src={deleteIcon}/> </div>

                        </div>
                </div>)
        }))
    }

    // //logica para manejar el scroll de las notas
    // let swipeValue = 0;

    // function handlePageSwipe(e) {
    //     let parentDiv = e.target.parentElement;
    //         swipeValue = swipeValue - 50;
        

    //     parentDiv.style.transform = `translateY(${swipeValue}px)`
    //     console.log(swipeValue)
    // }

    return(
       <div>
            {isOpenEditModal? <ModalEditNote alertHandler={props.alertHandler} handleListModal={props.handleModal} handleEditModal={handleIsOpenEditModal} editNote={noteEditObj}/> : ""}
            <div  onClick={props.handleModal} className="modal-note-list-main-container" >    
                <div  className="modal-note-list-container flex-row">
                    <div className="modal-note-list-card-container  flex-row justify-center">
                        {userGlobalInfoState.notes? getCards() : "no hay notas, crea una"}
                    </div>

                    
                </div>
                
            </div>
       </div>
    )
}
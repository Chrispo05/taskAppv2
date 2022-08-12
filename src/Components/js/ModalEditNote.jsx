import { useState } from "react"
import "../css/ModalEditNote.css"

export default function ModalEditNote(props) {
    
    //logic for event stop propagation
    const preventPropagation = (e)=>{
        e.stopPropagation()
    }

    //objeto contenedor de toda la información de la nueva nota en creación
    const [newNoteInfoObj, setNewNoteInfoObj] = useState(props.editNote)

    




    //logica para llenar el titulo de la nota
  
        

    //logica para obtener valores de los inputs
    function getInputValue(e) {
        setNewNoteInfoObj({
            ...newNoteInfoObj,
            [e.target.name]: e.target.value
        })

        console.log(newNoteInfoObj)
       
    }




    //funcion para manejar lo que hace el botón input para editar la nota y llamar la alerta
    function handleSubmitEditNote(e) {
        e.preventDefault();

        //validamos los formularios
          if (newNoteInfoObj.title.length === 0 || newNoteInfoObj.body.length === 0 ) {
            console.log("zero values");
            props.alertHandler(true,false,"Algunos espacios están en blanco.");
            setTimeout(() => {
                props.alertHandler(false,false)
            }, 2000);

            
          } else{
            //una vez validado el formulario, enviamos la alerta de cargando y hacemos la peticion
            props.alertHandler(true,true,"", true);

                //hacemos la petición asíncrona
                    //si recibimos buena respuesta del server, hacemos...
                   setTimeout(() => {
                    props.alertHandler(true,true,"Nota editada con éxito");
                    props.handleEditModal();
                    setTimeout(() => {
                        props.alertHandler(false,true)
                        
                    }, 2000);
                   }, 2000);
          }


    
        // props.alertHandler(true,true, "", true);
        // setTimeout(() => {
        //     // props.handleEditModal();
        //     props.alertHandler(true, true , "Nota actualizada con éxito", false)
        //     setTimeout(() => {
        //         props.alertHandler(false)
        //         props.handleEditModal();
        //     }, 1000);
            
        //     // props.handleListModal();
        // }, 2000);
       
        
    }



    return(
        <div onClick={props.handleEditModal} className="modal-edit-main-container flex-row justify-center align-center">
            <div  className="modal-edit-container">
                <div onClick={preventPropagation} className="flex-row justify-center note-edit-form-main-container">
                    <form className="note-edit-form-container shadow-1 flex-column justify-center align-center  color-h">
                        <label className="flex-column align-center note-edit-text-label-container ">
                            <p className="font-500">Título de la nota.</p>
                            <input onChange={getInputValue} className="mb-16 modal-edit-title-input" defaultValue={props.editNote.title}  type="text" name="title"/>
                            <p className="font-500">Cuerpo de la nota.</p>
                            <textarea name="body" onChange={getInputValue}>{props.editNote.body}</textarea>
                        </label>
                        <input onClick={handleSubmitEditNote} className="mt--6 note-edit-submit-input" type="submit" value="Editar Nota" />
                    
                    </form>


                </div>
            </div>
        </div>
    )
}
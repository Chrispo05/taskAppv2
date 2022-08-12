import Header from "./Header";
import NavBar from "./navBar";
import "../css/NoteCreate.css"

export default function NoteCreate() {
    return(

    <div>  
        <Header/>
        <NavBar/>
        <div className="flex-column align-center justify-center note-create-main-container">
           
            <div className="flex-row justify-center note-create-form-main-container">
                <form className="note-create-form-container shadow-1 flex-column justify-center align-center  color-h">
                    <label className="flex-column align-center note-create-text-label-container ">
                        <p className="font-500">Título de la nota.</p>
                        <input className="mb-16"  type="text" name="name" />
                        <p className="font-500">Cuerpo de la nota.</p>
                        <textarea></textarea>
                    </label>
                    <input className="mt-16 note-create-submit-input" type="submit" value="Crear Nota" />
                   
                </form>


            </div>


        </div>
    </div>
    )
}
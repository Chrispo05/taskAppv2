import "../css/Ui.css"
import checkIcon from "../../Icons/check.png"
import xMarkIcon from "../../Icons/x-mark.png"

export default function AlertPopUp(props) {



    return(
        <div className="flex-row justify-center " >
            <div className={`${props.isUp? "AlertIsUp" : "" }  alert-pop-up-container flex-row justify-center`} >
                <div className="aler-pop-up-text-container flex-column align-center" style={props.color?{backgroundColor: `var(--color-c)`} : {backgroundColor: `var(--color-b)`}}>
                    <p className="color-f ">{props.message}</p>
                    
                    {props.isLoading? <LoadingIcon/> : <img src={props.color? checkIcon : xMarkIcon}/>}
                </div>
            </div>
        </div>
    )
}



function LoadingIcon() {
    return(
        <div>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
               
            </div>
        </div>  
    )
}
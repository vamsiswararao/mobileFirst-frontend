import "./index.css"
const PopUp=({popup,onClose})=>{
    if(!popup){
        return null
    }
    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Check your email for the password reset link</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default PopUp
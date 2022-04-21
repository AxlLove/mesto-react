import '../../index.css'
function PopupWithForm (props) {
   return <section  className={`pop-up pop-up_type_${props.name} ${props.isOpen ? 'pop-up_opened': ''}`} >
        <div className="pop-up__form-container">
            <button onClick={props.onClose} type="button" className="pop-up__close-button"/>
            <form onSubmit ={props.onSubmit } id='profileForm' name={props.name} className="pop-up__form" noValidate>
                <h2 className="pop-up__title">{props.title}</h2>
                {props.children}
                <button  type="submit" className="pop-up__save-edit-button">{props.buttonName}</button>
            </form>
        </div>
    </section> 
}
export default PopupWithForm
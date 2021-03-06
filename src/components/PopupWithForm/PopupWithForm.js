function PopupWithForm ({name, isOpen, onClose,onSubmit,title,buttonName,children}) {
   return <section  className={`pop-up pop-up_type_${name} ${isOpen ? 'pop-up_opened': ''}`} >
        <div className="pop-up__form-container">
            <button onClick={onClose} type="button" className="pop-up__close-button"/>
            <form onSubmit ={onSubmit } id='profileForm' name={name} className="pop-up__form" noValidate>
                <h2 className="pop-up__title">{title}</h2>
                {children}
                <button  type="submit" className="pop-up__save-edit-button">{buttonName}</button>
            </form>
        </div>
    </section> 
}
export default PopupWithForm
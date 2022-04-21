import '../../index.css'
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
function EditProfilePopup (props) {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext)
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.onClose]);
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }
    return  <PopupWithForm onSubmit = {handleSubmit} onClose = { props.onClose } isOpen = {props.isOpen} name = 'profile-edit' title = "Редактировать профиль" buttonName = "Сохранить">
        <fieldset className="pop-up__edit-container">
            <div className="pop-up__imput-container">
                <input id='name' required name="name" type="text" value={name}
                       className="pop-up__edit pop-up__edit_type_name"
                       placeholder="Введите имя" minLength="2" maxLength="40"
                        onChange={handleNameChange}/>
                <span id="name-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
            <div className="pop-up__imput-container">
                <input id="title" required name="title" type="text" value={description}
                       className="pop-up__edit pop-up__edit_type_title"
                       placeholder="Введите профессию" minLength="2" maxLength="200"
                       onChange={handleDescriptionChange}/>
                <span id="title-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
        </fieldset>
    </PopupWithForm>
}
export default EditProfilePopup
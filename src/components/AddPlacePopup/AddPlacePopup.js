import '../../index.css'
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
function AddPlacePopup  (props) {
    const [cardName, setCardName] = React.useState('')
    const [cardLink, setCardLink] = React.useState('')

    React.useEffect(() => {
        setCardName('');
        setCardLink('');
    }, [props.onClose]);
    function handleCardNameChange(e) {
        setCardName(e.target.value);
    }
    function handleCardLinkChange(e) {
        setCardLink(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: cardName,
            link: cardLink,
        });
    }


    return   <PopupWithForm onSubmit ={handleSubmit} onClose = { props.onClose } isOpen = { props.isOpen } name = "card-edit"   title = "Новое место" buttonName = "Сохранить">
        <fieldset className="pop-up__edit-container">
            <div className="pop-up__imput-container">
                <input onChange={handleCardNameChange} id="card-name" required name="name" type="text" value={cardName}
                       className="pop-up__edit pop-up__edit_type_card-name" placeholder="Название" minLength="2"
                       maxLength="30"/>
                <span id="card-name-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
            <div className="pop-up__imput-container">
                <input onChange={handleCardLinkChange} id="link" required name="link" type="url" value={cardLink}
                       className="pop-up__edit pop-up__edit_type_card-link"
                       placeholder="Ссылка на картинку"/>
                <span id="link-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
        </fieldset>
    </PopupWithForm>

}
export default AddPlacePopup
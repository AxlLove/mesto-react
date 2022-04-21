import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useState, useEffect } from "react";

function AddPlacePopup  ({isOpen, onAddPlace, onClose}) {
    const [cardName, setCardName] = useState('')
    const [cardLink, setCardLink] = useState('')

    useEffect(() => {
        setCardName('');
        setCardLink('');
    }, [isOpen]);

    function handleCardNameChange(e) {
        setCardName(e.target.value);
    }
    function handleCardLinkChange(e) {
        setCardLink(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
         onAddPlace({
            name: cardName,
            link: cardLink,
        });
    }


    return   <PopupWithForm onSubmit ={handleSubmit} onClose = { onClose } isOpen = { isOpen } name = "card-edit"   title = "Новое место" buttonName = "Сохранить">
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
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useState, useEffect, useRef } from "react";
function EditProfilePopup ({isOpen, onUpdateAvatar, onClose}) {

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.value=''
    }, [isOpen]);
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }
    return  <PopupWithForm onSubmit = {handleSubmit}  onClose = { onClose } isOpen = {isOpen} name = "avatar-edit"   title = "Обновить Аватар" buttonName = "Сохранить">
        <fieldset className="pop-up__edit-container">
            <div className="pop-up__imput-container">
                <input ref={inputRef}   id="avatar-link" required name="link" type="url"
                       className="pop-up__edit pop-up__edit_type_avatar-link" placeholder="Введите ссылку"
                       minLength="2"
                       maxLength="200"/>
                <span id="avatar-link-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
        </fieldset>
    </PopupWithForm>

}
export default EditProfilePopup
import '../../index.css'
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React from "react";
function EditProfilePopup (props) {

   const [link, setLink] = React.useState()
    React.useEffect(() => {
        setLink('');
    }, [props.onClose]);
    const inputRef = React.useRef()
    function handleLinkChange(e) {
        setLink(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }
    return  <PopupWithForm onSubmit = {handleSubmit}  onClose = { props.onClose } isOpen = {props.isOpen} name = "avatar-edit"   title = "Обновить Аватар" buttonName = "Сохранить">
        <fieldset className="pop-up__edit-container">
            <div className="pop-up__imput-container">
                <input ref={inputRef} onChange={handleLinkChange}  id="avatar-link" required name="link" type="url" value={link}
                       className="pop-up__edit pop-up__edit_type_avatar-link" placeholder="Введите ссылку"
                       minLength="2"
                       maxLength="200"/>
                <span id="avatar-link-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
        </fieldset>
    </PopupWithForm>

}
export default EditProfilePopup
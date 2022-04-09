import logo from '../../logo.svg';
import React from "react";
import '../../index.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";
function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})



    function handleEditAvatarClick () {
        setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick () {
        setEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick () {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick (link, name) {
    setSelectedCard({open: true, link: link, name: name})
}


    function closeAllPopups () {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard({})
    }

  return (
      <div className="page">
        <PopupWithForm onClose = { closeAllPopups } isOpen = {isEditProfilePopupOpen} name = 'profile-edit' title = "Редактировать профиль" buttonName = "Сохранить">
          <fieldset className="pop-up__edit-container">
            <div className="pop-up__imput-container">
              <input id='name' required name="name" type="text" value=""
                     className="pop-up__edit pop-up__edit_type_name"
                     placeholder="Введите имя" minLength="2" maxLength="40"/>
              <span id="name-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
            <div className="pop-up__imput-container">
              <input id="title" required name="title" type="text" value=""
                     className="pop-up__edit pop-up__edit_type_title"
                     placeholder="Введите профессию" minLength="2" maxLength="200"/>
              <span id="title-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
            </div>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm onClose = { closeAllPopups } isOpen = {isAddPlacePopupOpen} name = "card-edit"   title = "Новое место" buttonName = "Сохранить">
           <fieldset className="pop-up__edit-container">
               <div className="pop-up__imput-container">
                   <input id="card-name" required name="name" type="text" value=""
                          className="pop-up__edit pop-up__edit_type_card-name" placeholder="Название" minLength="2"
                          maxLength="30"/>
                   <span id="card-name-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
               </div>
               <div className="pop-up__imput-container">
                   <input id="link" required name="link" type="url" value=""
                          className="pop-up__edit pop-up__edit_type_card-link"
                          placeholder="Ссылка на картинку"/>
                   <span id="link-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
               </div>
           </fieldset>
       </PopupWithForm>

          <PopupWithForm  onClose = { closeAllPopups } isOpen = {isEditAvatarPopupOpen} name = "avatar-edit"   title = "Обновить Аватар" buttonName = "Сохранить">
              <fieldset className="pop-up__edit-container">
                  <div className="pop-up__imput-container">
                      <input id="avatar-link" required name="link" type="url" value=""
                             className="pop-up__edit pop-up__edit_type_avatar-link" placeholder="Введите ссылку"
                             minLength="2"
                             maxLength="200"/>
                      <span id="avatar-link-error" className="pop-up__error-massage pop-up__error-massage_hidden"></span>
                  </div>
              </fieldset>
          </PopupWithForm>

          <PopupWithForm onClose = { closeAllPopups } name = "confirm"   title = "Вы уверены?" buttonName = "Да"/>

          <ImagePopup card = { selectedCard } onClose = { closeAllPopups } />


        <Header />
        <Main onEditProfile = {handleEditProfileClick}
              onAddPlace = {handleAddPlaceClick}
              onEditAvatar = {handleEditAvatarClick}
              onCardClick = {handleCardClick}/>

        <Footer />
      </div>

  );
}

export default App;

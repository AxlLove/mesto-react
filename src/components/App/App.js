import logo from '../../logo.svg';
import React from "react";
import '../../index.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../EditAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "../AddPlacePopup/AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])

    React.useEffect(()=>{
        api.getProfile()
            .then((res)=> {
                setCurrentUser(res)
            }).catch(console.log);
    },[]);

    React.useEffect(()=> {
        api.getInitialCards().then((res)=>{
            setCards(res);
        })
            .catch(console.log);
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch(console.log);
    }

    function handleCardDelete (card) {
        api.deleteCard(card._id).then((newCard)=> {
            setCards((state)=> state.filter((c) =>c._id !== card._id))
        }).catch(console.log)
    }


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

    function handleUpdateUser (info) {
        api.editProfile(info).then((res)=>{
            setCurrentUser(res)
            closeAllPopups ()
        }).catch(console.log)
    }
    function handleUpdateAvatar ({avatar}) {
        api.editAvatar(avatar).then((res)=>{
            setCurrentUser(res)
            closeAllPopups ()
        }).catch(console.log)
    }
    function  handleAddPlaceSubmit (newCard) {
        api.addCard(newCard).then((res)=>{
             setCards([res, ...cards])
            closeAllPopups ()
        }).catch(console.log)
    }
    return (
      <CurrentUserContext.Provider value ={currentUser}>

          <div className="page">
              <EditProfilePopup onUpdateUser = {handleUpdateUser}
                                onClose = { closeAllPopups }
                                isOpen = {isEditProfilePopupOpen}/>

              <AddPlacePopup onAddPlace = {handleAddPlaceSubmit}
                             onClose = { closeAllPopups }
                             isOpen = {isAddPlacePopupOpen}/>

              <EditAvatarPopup onUpdateAvatar ={handleUpdateAvatar}
                               isOpen={isEditAvatarPopupOpen}
                               onClose={closeAllPopups} />

              <PopupWithForm onClose = { closeAllPopups } name = "confirm"   title = "Вы уверены?" buttonName = "Да"/>

              <ImagePopup card = { selectedCard } onClose = { closeAllPopups } />

              <Header />
              <Main onEditProfile = {handleEditProfileClick}
                    onAddPlace = {handleAddPlaceClick}
                    onEditAvatar = {handleEditAvatarClick}
                    onCardClick = {handleCardClick}
                    cards = {cards}
                    onCardLike = {handleCardLike}
                    onCardDelete ={handleCardDelete}
              />
              <Footer />
          </div>
      </CurrentUserContext.Provider>



  );
}

export default App;

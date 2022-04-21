import '../../index.css'
import {api} from "../utils/Api";
import React from "react";
import Card from "../Card/Card";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";


function Main (props) {
    const currentUser = React.useContext(CurrentUserContext)

    return <main className="content">
        <section className="profile">
            <div className="profile__information">
                <button type="button" style={{backgroundImage: `url(${currentUser.avatar})`}} onClick={props.onEditAvatar} className="profile__image"/>
                <div className="profile__text">
                    <div className="profile__text-edit">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" onClick={props.onEditProfile}   className="profile__button profile__button_type_profile-edit"/>
                    </div>
                    <p className="profile__title">{currentUser.about}</p>
                </div>
            </div>
            <button type="button" onClick={props.onAddPlace} className="profile__button profile__button_type_card-edit">
            </button>
        </section>
        <section className="place-area">
            <ul className="places">
                {
                    props.cards.map(card=>(
                        <Card onCardClick = {props.onCardClick}
                              onCardLike = {props.onCardLike}
                              card = {card}
                              onCardDelete = {props.onCardDelete}
                              key = {card._id}
                        />
                    ))
                }
            </ul>
        </section>
    </main>
}

export default Main
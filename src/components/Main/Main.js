import '../../index.css'
import {api} from "../utils/Api";
import React from "react";
import Card from "../Card/Card";

function Main (props) {
    const [userName, setUserName] = React.useState('')
    const [userDescription , setUserDescription ] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])


React.useEffect(()=>{
api.getProfile()
    .then((res)=> {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
    })
    .catch(console.log)
},[])
    React.useEffect(()=> {
        api.getInitialCards().then((res)=>{
            setCards(res)
        })
            .catch(console.log)
    }, [])


    return <main className="content">
        <section className="profile">
            <div className="profile__information">
                <button type="button" style={{backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatar} className="profile__image"/>
                <div className="profile__text">
                    <div className="profile__text-edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" onClick={props.onEditProfile}   className="profile__button profile__button_type_profile-edit"/>
                    </div>
                    <p className="profile__title">{userDescription}</p>
                </div>
            </div>
            <button type="button" onClick={props.onAddPlace} className="profile__button profile__button_type_card-edit">
            </button>
        </section>
        <section className="place-area">
            <ul className="places">
                {
                    cards.map(item=>(
                        <Card onCardClick = {props.onCardClick} link={item.link} name = {item.name} likeCount={item.likes.length} key = {item._id}/>
                    ))

                }
            </ul>
        </section>
    </main>
}

export default Main
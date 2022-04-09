import '../../index.css'
function Card (props) {
    function handleClick() {
        props.onCardClick(props.link, props.name);
    }
    return (
    <li className="places__item">
        <button type="button" className="places__delete-button"/>
        <img onClick={handleClick} src = {props.link} alt="Изображение" className="places__image"/>
            <div className="places__text">
                <h2 className="places__name">{props.name}</h2>
                <div className="places__like-container">
                    <button type="button" className="places__like-button"/>
                    <span className="places__like-count">{props.likeCount}</span>
                </div>
            </div>
    </li>);
};

export default Card;
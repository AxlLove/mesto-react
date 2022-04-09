function ImagePopup (props) {
  return(
      <section className={`pop-up pop-up_type_image ${props.card.open ? 'pop-up_opened': ''}`}>
        <figure className="pop-up__image-container">
            <button onClick={props.onClose} type="button" className="pop-up__close-button"/>
            <img src= {props.card.link} alt={props.card.name} className="pop-up__image"/>
                <figcaption className="pop-up__image-title">{props.card.name}</figcaption>
        </figure>
    </section>
);
}
export default ImagePopup
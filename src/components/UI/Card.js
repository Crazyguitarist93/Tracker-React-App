import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

// la props.children conterrĂ  tutto il contenuto della card dove andiamo a richiamare il componente

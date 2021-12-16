import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

// la props.children conterrà tutto il contenuto della card dove andiamo a richiamare il componente

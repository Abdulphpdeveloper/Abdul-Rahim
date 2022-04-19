import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //props.children is a inbuild wrapper components and it is a special props
  //children is a reserved name
  //value of the special children props is always a content between the opening and closing tags of the custom component
  return <div className={classes}>{props.children}</div>;
};

export default Card;

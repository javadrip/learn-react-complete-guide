import "./Card.css";

// Card component is a wrapper component that can be used to wrap other components.
// This principle is called "composition".
const Card = props => {
  // The "card" style is defined in the Card.css file.
  // The line below adds the "card" style on top of the other styles that might be defined in the className property of the component.
  const classes = "card " + props.className;
  // The div acts as a shell around the content we pass into the component.
  // The props.children property is a special property that outputs whatever you pass between the opening and closing tags of the component.
  return <div className={classes}>{props.children}</div>;
};

export default Card;

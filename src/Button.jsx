import PropTypes from "prop-types";
import { useState } from "react";

export default function Button(props) {
  const [name, setName] = useState(props.name);

  const clicked = () => {
    setName("atbedel");
  };

  return <button onClick={clicked}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: "Click",
};

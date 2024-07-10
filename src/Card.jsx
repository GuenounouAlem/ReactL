import PropTypes from "prop-types";

export default function Card(props) {
  const disap = (e) => {
    e.target.style.display = "none";
  };
  const normalCard = (
    <div className="card">
      <img
        onClick={(e) => {
          disap(e);
        }}
        className="card-image"
        src="https://picsum.photos/200/300"
        alt="card image"
      />
      <h2 className="card-title">Name: {props.name}</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ipsam
        maiores tenetur labore. Ipsa, debitis non rerum commodi error, ex quod
        molestias facere esse ipsam autem possimus tempore odit. Consequuntur?
      </p>
    </div>
  );
  const panormalCard = (
    <div className="card">
      <img
        className="card-image"
        src="https://picsum.photos/200/300"
        alt="card image"
      />
      <h2 className="card-title">Name: No Name</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ipsam
        maiores tenetur labore. Ipsa, debitis non rerum commodi error, ex quod
        molestias facere esse ipsam autem possimus tempore odit. Consequuntur?
      </p>
    </div>
  );

  return props.isOk ? normalCard : panormalCard;
}

Card.propTypes = {
  name: PropTypes.string,
  isOk: PropTypes.bool,
};

Card.defaultProps = {
  name: "Assem",
  isOk: true,
};

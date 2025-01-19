import { NavLink } from "react-router-dom";
import "./collection-cards.css";

const Cards = ({ image, title, sub_title, price, id }) => {
  return (
    <NavLink
      to={`/task/${id}`} // Dynamic route with ID
      state={{ image, title, sub_title, price }} // Passing only necessary data
    >
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="card-title">{title}</div>
        <div className="card-sub">{sub_title}</div>
        <div className="card-price">₹{price}</div>
      </div>
    </NavLink>
  );
};

export default Cards;

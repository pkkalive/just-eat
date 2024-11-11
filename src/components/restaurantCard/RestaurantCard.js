import biryani from "../../../public/assets/biryani.jpg";

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card">
      <img src={biryani} className="res-logo" alt="res-logo" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
export default RestaurantCard;

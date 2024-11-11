import biryani from "../../../public/assets/biryani.jpg";

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src={biryani} className="res-logo" alt="res-logo" />
      <h3>Meghna Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
export default RestaurantCard;

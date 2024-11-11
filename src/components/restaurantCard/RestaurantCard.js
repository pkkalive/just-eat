import { RESTAURANT_LOGO_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurantInfo }) => {
  const { id, name, cloudinaryImageId, cuisines, avgRating, deliveryTime } =
    restaurantInfo;
  return (
    <div key={id} className="res-card">
      <img
        src={`${RESTAURANT_LOGO_URL}/${cloudinaryImageId}`}
        className="res-logo"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;

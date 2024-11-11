import RestaurantCard from "../restaurantCard/RestaurantCard";
import { restaurantsList } from "../../utils/restaurantsList";
import { useState } from "react";

const MainBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);
  const getTopRated = () => {
    const topRatedRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4.5
    );
    setListOfRestaurants(topRatedRestaurants);
  };
  return (
    <main className="main">
      <section className="search">Search</section>
      <section className="toprated">
        <button onClick={() => getTopRated()}>Top Rated Restaurants</button>
      </section>
      <section className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurantInfo={restaurant} />
        ))}
      </section>
    </main>
  );
};

export default MainBody;

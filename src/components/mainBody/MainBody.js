import RestaurantCard from "../restaurantCard/RestaurantCard";

const MainBody = () => {
  return (
    <main className="main">
      <section className="search">Search</section>
      <section className="res-container">
        <RestaurantCard
          resName="Meghna Food"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burgers, Pizza, Drinks" />
      </section>
    </main>
  );
};

export default MainBody;

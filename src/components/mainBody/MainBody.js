import RestaurantCard from "../restaurantCard/RestaurantCard";

const MainBody = () => {
  return (
    <main className="main">
      <section className="search">Search</section>
      <section className="res-container">
        <RestaurantCard />
      </section>
    </main>
  )
}

export default MainBody;
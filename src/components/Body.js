import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { RestaurantCard } from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  return restaurants?.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
}
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.79802818504704&lng=82.73469876497984&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
      const restaurantsData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setAllRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
      console.log(restaurantsData)
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  }
  
  

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1 className="text-center text-red-500 font-bold text-xl mt-8">Offline, please check your Internet connection</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Restaurants</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-2/3 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search for restaurants..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-orange-400 text-white p-2 rounded-md ml-2 hover:bg-orange-600"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Shimmer />
        ) : filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant.info.id} className="m-4">
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;

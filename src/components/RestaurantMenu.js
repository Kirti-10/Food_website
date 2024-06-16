import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import MenuShimmer from "./shimmmer_menu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Cart from "./Cart";
import FoodItem from "./FoodItem";

function filterData(searchInput, foodItems) {
  return foodItems?.filter((foodItem) =>
    foodItem?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
}

const RestaurantMenu = () => {

  const dispatch=useDispatch();
  

  const addFoodItem=(name)=>{
     dispatch(addItem(name));
  };

  const { id } = useParams();
  const restaurant = useRestaurant(id);
  console.log(restaurant)
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurant) {
      const groupedCards = restaurant?.cards?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const items = [];
      if (groupedCards) {
        groupedCards.forEach((card) => {
          if (card.card?.card?.itemCards) {
            card.card.card.itemCards.forEach((item) => {
              items.push(item.card.info.name);
            });
          }
        });
      }
      setFoodItems(items);
      setFilteredFoodItems(items);
      setLoading(false); 
    }
  }, [restaurant]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredData = filterData(searchInput, foodItems);
    setFilteredFoodItems(filteredData);
  };

  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;
  

  return (
    <>
      {loading ? (
        <MenuShimmer />
      ) : (
        <>
        <FoodItem props={restaurantInfo}/>
          {restaurantInfo?.cloudinaryImageId && (
            <img
              className="restaurant-image w-full max-w-xs mx-auto rounded-lg shadow-md mb-4"
              src={IMG_CON_URL + restaurantInfo?.cloudinaryImageId}
              alt={restaurantInfo?.name}
            />
          )}
          <div className="flex justify-center m-4">
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-2/3 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Search for dishes..."
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button
              className="bg-orange-400 text-white p-2 rounded-md ml-2 hover:bg-orange-500 transition duration-300 ease-in-out text-2xl"
              onClick={handleSearchClick}
            >
              search
            </button>
          </div>
          <div className="restaurant-details text-center p-5">
            <h1 className="restaurant-name text-4xl font-bold mb-2">{restaurantInfo?.name}</h1>
            <h2 className="restaurant-id text-lg text-gray-500 mb-2">Restaurant ID: {restaurantInfo?.id}</h2>
            <h3 className="restaurant-rating text-xl font-semibold text-orange-500">Avg Rating: {restaurantInfo?.avgRating}</h3>
            <h3 className="text-gray-600">{restaurantInfo?.totalRatingsString}</h3>
            <h4 className="text-gray-600">Cuisines: {restaurantInfo?.cuisines?.join(", ")}</h4>
            <h4 className="text-gray-600">{restaurantInfo?.sla?.slaString}</h4>
          </div>
          <div className="menu p-5">
            <h1 className="text-3xl font-semibold mb-4">Menu</h1>
            <ul className="menu-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredFoodItems.map((name, index) => (
                <li key={index} className="menu-item p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-300 ease-in-out">
                  <span className="text-lg font-normal text-gray-800">{name}</span>
                  <button className="p-2 bg-purple-100 rounded-sm m-2"  onClick={()=>addFoodItem(name)}>Add</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default RestaurantMenu;
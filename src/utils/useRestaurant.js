import { useState,useEffect } from "react";
import React from "react";
const Restaurant=(id)=>{

   const [restaurant,setRestaurant]=useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

  

   useEffect(() => {
    getRestaurantInfo();
  }, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading restaurant information.</div>;
  }

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.54638045815248&lng=77.19013821333647&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER` +id
      );
      const json = await response.json();
      setRestaurant(json.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching restaurant info:", err);
      setError(err);
      setLoading(false);
    }
  }

  return restaurant;
}
export default Restaurant;
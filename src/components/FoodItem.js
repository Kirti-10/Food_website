import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { IMG_CON_URL } from "../config";
import { RestaurantCard } from "./RestaurantCard";

const FoodItem=(props)=>{

    const {user}=useContext(UserContext);

    return (
        <div>
          <div>{props?.name}</div>
      </div>
)
}
export default FoodItem;
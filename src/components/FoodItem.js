import { IMG_CON_URL } from "../utils/constants";

const FoodItem = ({ name, imageId, description, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border w-56 m-2 p-4 hover:shadow-2xl bg-white">
      <h1 className="text-2xl font-bold mb-2 text-gray-900">{name}</h1>
      <img className="w-full rounded-2xl  h-48 object-cover mb-2"
      src={IMG_CON_URL + imageId} 
        alt={name} 
      />
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-800 font-bold">rupees-{(price / 100)}</p>
    </div>
  );
}

export default FoodItem;

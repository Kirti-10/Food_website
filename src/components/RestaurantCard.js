import React from "react";
import { IMG_CON_URL } from "../config";

export const RestaurantCard = ({
    name,
    cuisines = [],
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className="card-head p-4 flex flex-wrap">
            <div className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img
                    src={IMG_CON_URL + cloudinaryImageId}
                    alt="restaurant"
                    style={{ width: '232px', height: '182px' }}
                    className="object-cover"
                />
                <div className="p-4 w-60 h-48">
                    <h1 className="name text-xl font-bold text-gray-800 mb-2">{name}</h1>
                    <h2 className="id text-sm text-gray-600">{cuisines.join(", ")}</h2>
                    <h3 className="mt-2 text-sm text-gray-600">{lastMileTravelString}</h3>
                </div>
            </div>
        </div>
    );
};

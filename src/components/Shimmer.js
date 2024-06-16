import React from "react";

const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-4 p-5">
            {Array(9).fill("").map((_e, index) => (
                <div key={index} className="border border-gray-300 shadow rounded-md p-4 max-w-xs w-72 mx-auto drop-shadow-xl ">
                    <div className="animate-pulse space-y-4">
                        <div className="h-36 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;

import React from "react";
import Image from "next/image";
// import "./ImageGrid.css";
import gridData from "../../../../public/data.json";

const ImageGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-3 pt-3">
        <h3 className="text-3xl font-bold">Browse by Location</h3>
      </div>
      <div className="gallery-container flex flex-wrap justify-between p-5">
        {gridData.items.map((item, index) => {
          return (
            <div
              className="gallery-item mb-5 w-[30%] rounded-md bg-white overflow-hidden hover:-translate-y-[5px] "
              key={index}
            >
              <Image
                src={item.image}
                alt="city"
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="item-details p-2.5">
                <h3 className="m-0 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGrid;

import React from "react";
// import city1 from "../../../images/city1.jpeg";
import Image from "next/image";
import gridData from "../../../../public/data.json";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 image-grid py-5">
      {gridData.items.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.image}
              alt="city1"
              width={300}
              height={300}
              className="h-[200px]"
            />
            <div>
              <h4 className="text-xl font-bold p-2.5">{item.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;

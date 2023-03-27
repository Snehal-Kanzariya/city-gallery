import Image from "next/image";
import React from "react";
import Rajkot from "../../../../public/images/rajkot.jpg";

const Detail = () => {
  return (
    <div>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <Image src={Rajkot} alt="Rajkot" className="rounded-2xl" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-bold pb-5">Rajkot</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            minima dolor optio eaque repellendus provident, possimus nesciunt
            similique ducimus, accusamus cupiditate impedit quae. Consequatur
            maiores impedit hic cum saepe quo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const FlashSell = () => {

  const [flashSellProducts, setFlashSellProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const url = '.../../../../../public/data.json';
        const res = await fetch(url);
        const data = await res.json();
        setFlashSellProducts(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, [])

  return (
    <div className="w-full bg-white myContainer  my-4 md:py-4 py-2  px-1  rounded-md ">
      <h1 className="text-center text-3xl font-bold  text-primaryColor1 capitalize my-4">
        Flash sell
      </h1>
      <Link to="/Chackout">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
          {flashSellProducts.map(({ pName, pImg, originalPrice, discount }) => {
            return (
              <div
                key={pName}
                className="cursor-pointer rounded-md p-3 shadow-md hover:-translate-y-2 transition-transform  duration-300"
              >
                <img
                  src={pImg}
                  alt="flash sell"
                  className="w-[8rem] mx-auto  mb-2 rounded-[2px]"
                />

                <div className="space-y-2">
                  <h3 className="text-[12.2px] md:text-normal">{pName}</h3>

                  <h2 className="text-primaryColor1 text-[18px]  md:text-xl font-semibold">
                    ট30
                  </h2>
                  <p className="text-lg">
                    <span className="line-through text-slate-400">
                      ট{originalPrice}
                    </span>
                    <span className=""> - {discount}%</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default FlashSell;

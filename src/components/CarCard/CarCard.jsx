import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { RiSteering2Fill } from "react-icons/ri";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import Button from "../../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
    const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/details");
  };
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (car && car.id) {
      const likedCars = JSON.parse(localStorage.getItem("likedCars")) || {};
      setLiked(!!likedCars[car.id]);
    }
  }, [car]);

  const toggleLike = () => {
    if (!car || !car.id) return;

    const likedCars = JSON.parse(localStorage.getItem("likedCars")) || {};
    if (liked) {
      delete likedCars[car.id];
    } else {
      likedCars[car.id] = true;
    }
    localStorage.setItem("likedCars", JSON.stringify(likedCars));
    setLiked(!liked);
  };

  if (!car) {
    return null; // or return some placeholder
  }

  return (
    <div className="lg:w-[270px] w-[100vh] h-[334px] bg-white px-[28px] py-[20px] flex flex-col justify-between rounded-[8px]">
      <div className="flex  justify-between">
        <div>
          <h3 className="text-[18px] font-bold p-0 m-0">{car.carName}</h3>
          <p className="p-0 m-0 items-center text-[#90A3BF] mt-1 text-[12px] font-bold">{car.carType}</p>
        </div>

        <div className="cursor-pointer text-[24px]" onClick={toggleLike}>
          {liked ? <IoMdHeart className="text-red-600" /> : <IoMdHeartEmpty />}
        </div>
      </div>

      <div>
        <div className="w-[100%]">
          <img src={car.image} alt={car.carName} className="mt-[3rem] mb-[1.5rem] w-[232px] h-[90px]"/>
        </div>

        <div className="flex items-center justify-between text-[12px] text-[#90A3BF] font-medium mt-[30px]">
            <div className="flex items-center justify-between gap-[10px]">
          <p className="flex items-center gap-2">
            <BsFillFuelPumpFill className="text-[20px]"/>
            {car.fuelCapacity}
          </p>
          <p className="flex items-center gap-2">
            <RiSteering2Fill className="text-[20px]"/>
            {car.transmission}
          </p>
          <p className="flex items-center gap-2">
            <BsPeopleFill className="text-[20px]"/>
            {car.seatingCapacity}
          </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p>
          <span className="text-[20px] font-bold">${car.price}/</span>
          <span className="text-[12px] text-[#90A3BF]">day</span>
        </p>
        <Button 
        btnText="Rent Now" 
        className="bg-blue-700 text-white" 
        func={goToDetails}
        />
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    carName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    carType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fuelCapacity: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    seatingCapacity: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarCard;
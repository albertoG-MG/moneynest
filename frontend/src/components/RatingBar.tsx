import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingBarProps {
  rating: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {

  // Función para generar las estrellas
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 1; i <= fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    for (let i = 1; i <= emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-300" />);
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars(rating)}
    </div>
  );
};

export default RatingBar;

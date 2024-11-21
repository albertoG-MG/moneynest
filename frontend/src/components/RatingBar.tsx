import React from "react";

// Definimos la interfaz para las props
interface RatingBarProps {
  rating: number; // El rating debe ser un número entre 0 y 5
}

const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
  
  const getColor = (rating: number): string => {
    if (rating <= 1) return "bg-red-600";
    if (rating <= 2) return "bg-red-400";
    if (rating <= 3) return "bg-yellow-400";
    if (rating <= 4) return "bg-green-300";
    return "bg-green-600";
  };

  return (
    <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full ${getColor(rating)} rounded-full`}
        style={{ width: `${(rating / 5) * 100}%` }}
      ></div>
    </div>
  );
};

export default RatingBar;
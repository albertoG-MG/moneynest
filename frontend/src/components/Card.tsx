import React from 'react';

interface CardProps {
  key: number;
  imageGame: string;
  imageText: string;
  game: string;
  earn: string;
}

const Card: React.FC<CardProps> = ({key, imageGame, imageText, game, earn }) => {
  return (
    <div className="cursor-pointer flex flex-row md:flex-col gap-4 rounded-lg shadow-lg">
      <div className="w-1/4 md:w-full md:flex-1">
        <img
          src={imageGame}
          className="h-full object-cover rounded-l-lg md:rounded-bl-none md:rounded-t-lg"
          alt={imageText}
        />
      </div>
      <div className="flex-1 md:flex-none font-semibold py-4 pr-2 md:p-4 leading-8">
        <div className="flex flex-col-reverse md:flex-col" style={{ wordBreak: 'break-word' }}>
          <p className="block text-md md:text-lg">{game}</p>
          <p className="block text-md">
            <span className="text-green-500">{earn}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

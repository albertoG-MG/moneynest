import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const data = [
  {
    id: 1,
    imageGame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxdemw-JChNYkhb3hou25OQ776maGFT-50RXkAd5c84LtU2ok09hvxmU&s=10',
    imageText: 'Monopoly Go',
    game: 'Monopoly Go!',
    earn: 'Gana hasta 7,741 huevocoins',
  },
  {
    id: 2,
    imageGame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF9GGssgOMdVBtLkho0Rxp6qWLIdnllFGQjW08jpVaEK4ZyYGfiWl400&s=10',
    imageText: 'Clone Evolution',
    game: 'Clone Evolution',
    earn: 'Gana hasta 3,280 huevocoins',
  },
  {
    id: 3,
    imageGame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAuKFZPSUaDi_tLkvD6h33aS3W7bbJi5r0w&usqp=CAU',
    imageText: 'Install && Build Defense Towers',
    game: 'Install && Build Defense Towers',
    earn: 'Gana hasta 582 huevocoins',
  },
];

const Home: React.FC = () => {
    return (
        <div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 flex items-center gap-3 pr-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-black w-10 h-10" viewBox="0 0 22 22"><path fill="currentColor" d="M2 1H20V2H20.94V20H20V21H2V20H1.06V2H2V1M3 3V19H19V3H3M4 4H18V12H4V4M5 14H8V17H5V14M12 15H14V17H12V15M15 14H17V16H15V14Z" /></svg>
              <h1 className="font-inter text-2x1 md:text-3xl font-bold text-black">Juega juegos y gana!</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-4">
          {data.map((item, index) => (
            <Card
              key={item.id}
              imageGame={item.imageGame}
              imageText={item.imageText}
              game={item.game}
              earn={item.earn}
            />
          ))}           
          </div>
        </div>
    );
};

export default Home;
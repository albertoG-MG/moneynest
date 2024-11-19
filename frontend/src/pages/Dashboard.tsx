import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const data = [
  {
    id: 1,
    imageGame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxdemw-JChNYkhb3hou25OQ776maGFT-50RXkAd5c84LtU2ok09hvxmU&s=10',
    imageText: 'Monopoly Go',
    game: 'Monopoly Go!',
    earn: 'Gana hasta 7,741 HC',
  },
  {
    id: 2,
    imageGame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF9GGssgOMdVBtLkho0Rxp6qWLIdnllFGQjW08jpVaEK4ZyYGfiWl400&s=10',
    imageText: 'Clone Evolution',
    game: 'Clone Evolution',
    earn: 'Gana hasta 3,280 HC',
  },
  {
    id: 3,
    imageGame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAuKFZPSUaDi_tLkvD6h33aS3W7bbJi5r0w&usqp=CAU',
    imageText: 'Install && Build Defense Towers',
    game: 'Install && Build Defense Towers',
    earn: 'Gana hasta 582 HC',
  },
];

const Home: React.FC = () => {
    return (
        <div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 flex items-center gap-3 pr-2.5">
              <svg fill="#000000" className="w-10 h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 293.953 293.953" xmlSpace="preserve"><g><path d="M219.602,99.555h-65.125v-19.43c0-18.985-15.445-34.431-34.43-34.431H85.424c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h34.623c10.714,0,19.43,8.717,19.43,19.431v19.43H74.352C33.354,99.555,0,132.909,0,173.906c0,40.998,33.354,74.353,74.352,74.353c29.215,0,55.804-17.355,67.75-43.692h9.751c11.945,26.338,38.533,43.692,67.749,43.692c40.998,0,74.352-33.355,74.352-74.353C293.953,132.909,260.6,99.555,219.602,99.555z M219.602,233.259c-24.741,0-47.122-15.589-55.691-38.791c-1.088-2.946-3.896-4.902-7.035-4.902H137.08c-3.14,0-5.947,1.956-7.035,4.901c-8.571,23.202-30.952,38.791-55.693,38.791C41.625,233.259,15,206.633,15,173.906c0-32.727,26.625-59.352,59.352-59.352h145.25c32.727,0,59.352,26.625,59.352,59.352C278.953,206.633,252.328,233.259,219.602,233.259z"/><path d="M101.957,166.406H81.852V146.07c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v20.336H46.746c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h20.105v20.337c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-20.337h20.105c4.143,0,7.5-3.358,7.5-7.5C109.457,169.764,106.1,166.406,101.957,166.406z"/><circle cx="219.602" cy="148.203" r="10.668"/><circle cx="219.602" cy="199.608" r="10.668"/><circle cx="245.305" cy="173.907" r="10.668"/><circle cx="193.898" cy="173.907" r="10.668"/></g></svg>
              <h1 className="font-inter text-2x1 md:text-3xl font-bold text-black">Juega juegos y gana!</h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 py-4">
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
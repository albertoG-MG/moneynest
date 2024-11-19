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
        <>
        <div className="mt-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 flex items-center gap-3 pr-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 512 512"><g><path fill="#000000" d="M449.891,87.953c-3.766-8.906-10.031-16.438-17.922-21.781c-7.891-5.328-17.5-8.469-27.719-8.469h-42.656v-7.359h-61.828c0.281-2,0.438-4.063,0.438-6.141C300.203,19.828,280.375,0,256,0s-44.203,19.828-44.203,44.203c0,2.078,0.156,4.141,0.438,6.141h-61.828v7.359H107.75c-6.813,0-13.359,1.391-19.281,3.906c-8.906,3.766-16.453,10.031-21.797,17.922c-5.328,7.906-8.469,17.5-8.469,27.719v355.219c0,6.781,1.391,13.344,3.906,19.281c3.766,8.906,10.031,16.438,17.922,21.781c7.906,5.344,17.5,8.469,27.719,8.469h296.5c6.797,0,13.359-1.375,19.281-3.906c8.922-3.75,16.453-10.031,21.797-17.922c5.328-7.891,8.469-17.5,8.469-27.703V107.25C453.797,100.438,452.422,93.891,449.891,87.953z M256,27.797c9.047,0,16.406,7.359,16.406,16.406c0,2.172-0.438,4.234-1.203,6.141h-30.391c-0.781-1.906-1.219-3.969-1.219-6.141C239.594,35.156,246.969,27.797,256,27.797z M424.328,462.469c0,2.813-0.563,5.406-1.578,7.797c-1.5,3.578-4.063,6.672-7.281,8.859c-3.219,2.156-7,3.406-11.219,3.406h-296.5c-2.813,0-5.422-0.563-7.813-1.563c-3.594-1.516-6.672-4.094-8.844-7.297c-2.156-3.219-3.406-7-3.422-11.203V107.25c0-2.813,0.563-5.422,1.578-7.813c1.516-3.594,4.078-6.688,7.281-8.844c3.219-2.156,7-3.406,11.219-3.422h42.656v6.141c0,11.531,9.344,20.875,20.891,20.875h169.422c11.531,0,20.875-9.344,20.875-20.875v-6.141h42.656c2.813,0,5.422,0.563,7.813,1.578c3.578,1.5,6.672,4.063,8.844,7.281s3.422,7,3.422,11.219V462.469z"/><rect x="156.141" y="170.672" fill="#000000" width="31.625" height="31.625"/><rect x="225.516" y="170.672" fill="#000000" width="130.359" height="31.625"/><rect x="156.141" y="264.125" fill="#000000" width="31.625" height="31.625"/><rect x="225.516" y="264.125" fill="#000000" width="130.359" height="31.625"/><rect x="156.141" y="357.594" fill="#000000" width="31.625" height="31.625"/><rect x="225.516" y="357.594" fill="#000000" width="130.359" height="31.625"/></g></svg>
              <h1 className="font-inter text-2x1 md:text-3xl font-bold text-black">Encuestas</h1>
            </div>
          </div>
        </div>
        <div className="mt-5">
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
        </>
    );
};

export default Home;
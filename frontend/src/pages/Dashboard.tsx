import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    return (
        <div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 flex items-center gap-3 pr-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-black w-10 h-10" viewBox="0 0 22 22"><path fill="currentColor" d="M2 1H20V2H20.94V20H20V21H2V20H1.06V2H2V1M3 3V19H19V3H3M4 4H18V12H4V4M5 14H8V17H5V14M12 15H14V17H12V15M15 14H17V16H15V14Z" /></svg>
              <h1 className="font-inter text-2x1 md:text-3xl font-bold text-black">Juega juegos y gana!</h1>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 py-4">
            
          </div>
        </div>
    );
};

export default Home;
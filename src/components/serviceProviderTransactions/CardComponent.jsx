import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { VscSettings } from 'react-icons/vsc';

const CardComponent = ({ Head, children }) => {
  return (
    <div className="w-full md:w-[428px] h-[926px] mx-auto bg-light-gray shadow-xl overflow-hidden">
      <div className="bg-dark-gray text-primary p-4 h-[90px] flex items-center justify-between">
        <h2 className="text-lg font-heading mt-8 ml-4">{Head}</h2>
        <div className="flex space-x-4 mr-4">
          <button className="p-2 rounded-full hover:bg-gray-300">
            <VscSettings className="w-5 h-5 text-primary mt-8" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-300">
            <CiSearch className="w-5 h-5 text-primary mt-8" />
          </button>
        </div>
      </div>

      <div className="p-4 bg-light-gray space-y-8">
      {children}
        
       
      </div>
    </div>
  );
};

export default CardComponent;

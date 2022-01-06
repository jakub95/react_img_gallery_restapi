import React, { useState } from 'react';

const ImageSearch = ({searchText}) => {

const [text, setText] = useState('');

const onSubmit = (e) =>{
    e.preventDefault();
    searchText(text);
}

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image"
          />
          <button
            className="hover:animate-ping flex-shrink-0 bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-teal-500 hover:border-teal-700 text-sm  text-white py-1 px-2 rounded-md"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

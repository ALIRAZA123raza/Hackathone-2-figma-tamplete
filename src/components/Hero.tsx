import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[704px] flex items-center justify-between px-8 mt-8">
    
    <div className="bg-[#4E4D93] flex flex-col items-start justify-center w-1/2 pl-16 text-white rounded-md h-full ">
      <h1 className="text-6xl font-bold mb-8 leading-tight ">
        The furniture brand for the future, with timeless designs
      </h1>
      <button className="bg-white text-[#4E4D93] px-8 py-3 rounded mb-8">
        View Collection
      </button>
      <p className="mt-6 text-gray-300 text-lg">
        A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
      </p>
    </div>

    
    <div className="w-1/2 h-full flex items-center justify-center relative -ml-[5px] -mr-[14px]"> 
    
      <img
        src="/Product Card.png"  
        alt="The Dandy Chair"
        className="h-full object-contain" 
      />
    </div>
  </div>
  )
}

export default Hero

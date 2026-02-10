const ZoomableLogo = ({ logoRef, logo, onClick }) => (
  <div
    onClick={onClick}
    className="relative w-28 h-28 sm:w-32 sm:h-32 border border-mainColor/10 
               rotate-45 bg-gray-50/60 flex items-center justify-center cursor-pointer"
  >
    <div className="absolute inset-4 border border-mainGold/30 animate-pulse" />
    <img
      ref={logoRef}
      src={logo}
      alt="Mosaic Logo"
      className="-rotate-45 w-16 sm:w-20 h-16 sm:h-20 object-contain"
    />
  </div>
);

export default ZoomableLogo;

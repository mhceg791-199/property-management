const DecorativeSquares = ({ rotateSquareRef, shakeSquareRef }) => {
  return (
    <>
      <div
        ref={rotateSquareRef}
        className="absolute -top-20 -right-10 w-28 h-28 bg-mainColor opacity-10 rotate-45 z-10"
      />
      <div
        ref={shakeSquareRef}
        className="absolute -bottom-20 -left-10 w-24 h-24 border-4 border-mainGold/40 rotate-12 z-10"
      />
    </>
  );
};

export default DecorativeSquares;

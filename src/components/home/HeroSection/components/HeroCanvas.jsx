const HeroCanvas = ({ canvasRef }) => (
  <canvas
    ref={canvasRef}
    className="absolute inset-0 z-0 pointer-events-none opacity-20 md:opacity-40"
  />
);

export default HeroCanvas;

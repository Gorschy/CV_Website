const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          className={`carousel-indicator-item${
            index >= currentIndex && index < currentIndex + 4 ? " active" : ""
          }`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  );
};


export default CarouselIndicators;

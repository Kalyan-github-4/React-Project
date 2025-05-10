const TestamonialDots = ({count, currentIndex, setCurrentIndex}) => {
  return (
    <div className='testimonials-dots'>
      {Array.from({length: count}).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === currentIndex ? "active": ''}`}
          onClick={() => setCurrentIndex(index)}
        ></div>
      ))}
    </div>
  )
}

export default TestamonialDots

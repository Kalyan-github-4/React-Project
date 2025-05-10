const TestimonialNav = ({onPrev, onNext}) => {
  return (
    <div className='testimonials-nav '>
        <button className='prev' onClick={onPrev}>Prev</button>
        <button className='next' onClick={onNext}>Next</button>
    </div>
  )
}

export default TestimonialNav
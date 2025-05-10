const TestimonialCard = ({testimonial}) => {
  return (
    <>
      <div className="testimonials-avatar ">
        <img src={testimonial.avatar} alt={testimonial.autor} />
      </div>
      <div className="testimonials-quote">{testimonial.quote}</div>
      <div className="testimonials-author">{testimonial.author}</div>
      <div className="testimonials-role">{testimonial.role}</div>

    </>
  )
}

export default TestimonialCard
const testimonials = [
  {
    quote:
      'DevFlow has completely changed the way our team works. The AI insights are a game changer!',
    name: 'Rahul Mehta',
    role: 'CTO at Pixelcraft',
    avatar: 'R'
  },
  {
    quote:
      'Simple, powerful and beautifully designed. Our productivity has improved so much.',
    name: 'Priya Sharma',
    role: 'Product Manager at Nova',
    avatar: 'P'
  },
  {
    quote:
      "The best project management tool we've used. Clean UI and incredible features.",
    name: 'Arjun Nair',
    role: 'Founder at Buildly',
    avatar: 'A'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="landing-section testimonials-section">

      <div className="section-header">

        <span className="section-label">
          WHAT OUR USERS SAY
        </span>

        <h2>
          Loved by builders worldwide
        </h2>

        <p>
          Teams of all sizes use DevFlow to ship better software.
        </p>

      </div>


      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (

          <div
            className="testimonial-card"
            key={testimonial.name}
          >

            <p className="testimonial-quote">
              "{testimonial.quote}"
            </p>


            <div className="testimonial-user">

              <div className="testimonial-avatar">
                {testimonial.avatar}
              </div>

              <div>

                <strong>
                  {testimonial.name}
                </strong>

                <span>
                  {testimonial.role}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default TestimonialsSection
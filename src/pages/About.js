import React from 'react'

function About() {
  return (
    <section>
      <img src={require()} alt='myphoto' />
      <p>
        Hi there! My name is Mordecai Agyapong, and I convey stories visually.
        turning the visions of design into pixel perfect reality. let's
        transform your ocncepts into enthralling works of art!.
      </p>

      <article className='projects__overview'>
        <div>
          <h2>10+</h2>
          <span>Years of Experience</span>
        </div>
        <div>
          <h2>200+</h2>
          <span>Years of Experience</span>
        </div>
        <div>
          <h2>15</h2>
          <span>Received Awards</span>
        </div>
        <div>
          <h2>150</h2>
          <span>Digital products</span>
        </div>
      </article>

      <section className='skills'>
        <h1>My skills</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni optio
          dignissimos nam iste in assumenda accusamus nostrum et quia nulla? Sed
          iure tempora veniam labore temporibus. Debitis doloremque modi
          perferendis?
        </p>

        <article className='skills__overview'>
          <div className='left'>
            <img src={require('')} alt='logo' />
          </div>

          <div className='right'></div>
        </article>
      </section>
    </section>
  )
}

export default About

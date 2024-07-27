import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import { Link } from 'react-router-dom'
import Contact from './components/header/contact'

function App() {
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    fetch('/resume.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  var skills = resumeData?.resume?.skills.map(function (skills) {
    var className = 'bar-expand ' + skills.name.toLowerCase()
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    )
  })

  return (
    <div className='App'>
      <Header />

      <section className='hero mx-auto mt-2 p-8 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 bg-slate-200 border-solid border-1 border-slate-600'>
        <div className='left text-center  md:ml-24'>
          <h1 className='text-3xl  font-bold uppercase  xs:text-4xl sm:text-6xl lg:text-8xl 2xl:text-9xl    '>
            i'm Mordecai Agyapong
          </h1>
          <h2 className='text-3xl uppercase sm:text-6xl '>
            full stack Developer
          </h2>
          <p className=' my-4'>Excellent, Hardworking, Great Personality</p>
        </div>
        <div className='right mt-8'>
          <img
            className='w-80 h-80  object-cover rounded-full border-solid border-8 border-teal-200 md:w-96 md:h-96'
            src={require('./assets/img/profile.jpg')}
            alt=''
          />
        </div>
      </section>

      <section className='about container mx-auto my-40 grid grid-cols-1  md:grid-cols-2 items-center gap-16 '>
        <div className='left flex-1 w-54'>
          <h2 className='uppercase text-5xl'>WHAT do i help</h2>
          <p className='font-medium align-left mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, saepe! Lorem ipsum dolor sit Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Nesciunt, illum voluptatum sed
            consequuntur quibusdam libero voluptatibus quasi placeat!
            Reprehenderit, sapiente. Reprehenderit accusamus tenetur ullam dicta
            culpa aspernatur, sit exercitationem nulla.
          </p>

          <div className='numbers mt-8 flex justify-around items-center '>
            <div className='left text-center'>
              <div className='num text-3xl'>250+</div>
              <span>Project Completed</span>
            </div>
            <div className='left text-center'>
              <div className='num text-3xl'>250+</div>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
        <div className='right flex flex-col gap-4'>
          <div className='card flex items-center gap-4  bg-green-200 rounded-lg p-4'>
            <span className='material-icons-sharp p-4 bg-green-400 rounded-full text-slate-100'>
              palette
            </span>
            <div className='right'>
              <h2 className='text-2xl'>Website Design</h2>
              <p className='text-slate-600 font-medium'>22 Projects</p>
            </div>
          </div>
          <div className='card flex items-center gap-4  bg-yellow-200 rounded-lg p-4'>
            <span className='material-icons-sharp p-4 bg-yellow-400 rounded-full text-slate-100'>
              computer
            </span>
            <div className='right'>
              <h2 className='text-2xl'>Website Design</h2>
              <p className='text-slate-600 font-medium'>22 Projects</p>
            </div>
          </div>
          <div className='card flex items-center gap-4  bg-slate-300 rounded-lg p-4'>
            <span className='material-icons-sharp p-4 bg-slate-400 rounded-full text-slate-100'>
              diversity_3
            </span>
            <div className='right'>
              <h2 className='text-2xl'>Website Design</h2>
              <p className='text-slate-600 font-medium'>22 Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='bg-slate-300 p-8 md:p-26'>
        <div className='container mx-auto max-w-7xl'>
          <h1 className='text-center font-semibold text-4xl'>About</h1>

          <p>
            I am a passionate and hardworking Developer with a strong commitment
            to excellence and continuous improvement. My journey in software
            development is driven by a deep love for technology and an eagerness
            to learn and grow. I thrive in collaborative environments where
            teamwork and consistency are key to delivering high-quality
            solutions.
          </p>
        </div>

        <div className='container mx-auto max-w-7xl mt-8 flex  flex-col gap-8 md:flex-row'>
          <div>
            <h2 className='text-3xl font-semibold'>Contact Details</h2>
            <p className='address'>
              <span>Mordecai Agyapong</span>
              <br />
              <span>
                123 Dev Lane
                <br />
                Manchester Stockport, M19 3NA
              </span>
              <br />
              <span>+44 123456789</span>
              <br />
              <span>agyapongmordecai@gmail.com</span>
            </p>
          </div>

          <div className=''>
            <p>
              <a
                href=''
                className='p-4 flex items-center gap-4 text-white bg-slate-400 rounded-lg cursor-pointer shadow-lg'
              >
                <i className='fa fa-download'></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        id='projects'
        className='projects container mx-auto text-center mt-[10rem]'
      >
        <h1 className='text-3xl font-semibold'>Projects</h1>

        <div class='grid gap-4 mt-8 md:grid-cols-3'>
          <Link to='https://biblekama.org' target='_blank'>
            <div class='project-col '>
              <img src={require('./assets/img/bible.png')} alt='' />
              <div class='layer'>
                <h3>Bible</h3>
              </div>
            </div>
          </Link>
          <Link to='http://kamapos.ghkama.org/signin' target='_blank'>
            <div class='project-col'>
              <img src={require('./assets/img/pos.png')} alt='' />
              <div class='layer'>
                <h3>POS</h3>
              </div>
            </div>
          </Link>
          <Link to='http://kamaelection.ghkama.org/login' target='_blank'>
            <div class='project-col'>
              <img src={require('./assets/img/elect.png')} alt='' />
              <div class='layer'>
                <h3>Election</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section id='resume' className='container mx-auto mt-[5rem]'>
        <h1 className='text-center text-3xl font-bold'>Skills</h1>
        <p className=' text-center text-2xl mb-[8 text-slate-300'>
          {resumeData?.resume?.skillmessage}
        </p>
        <div>
          <div className='bars'>
            <ul className='skills'>{skills}</ul>
          </div>
        </div>
      </section>

      {/* <section className='services container mx-auto mt-[5rem] '>
        <h1 className='text-center text-5xl font-semibold mb-2 md:5xl'>
          Our Services
        </h1>
        <p className='text-center mb-2'>
          No templates, only exclusive solutions
        </p>

        <div className='container grid gap-4 lg:flex items-center justify-between'>
          <div className='item text-center p-4 border-2 border-solid border-red-200 rounded-xl'>
            <div className='icon'></div>
            <h1 className='text-2xl font-semibold mb-2'>Website development</h1>
            <p>
              We will create an action site with the necessary set of
              information blocks to attract the attention and interest of your
              client
            </p>
          </div>
          <div className='item text-center p-4 border-2 border-solid border-red-200 rounded-xl'>
            <div className='icon'></div>
            <h1 className='text-2xl font-semibold mb-2'>Mobile Applications</h1>
            <p>
              Mobile application development is one of my areas. I am an expert
              and familiar with the features of each of the popular platforms.
            </p>
          </div>
          <div className='item text-center p-4 border-2 border-solid border-red-200 rounded-xl'>
            <div className='icon'></div>
            <h1 className='text-2xl font-semibold mb-2'>UI/UX Design</h1>
            <p>
              We will create an action design with the necessary set of
              information for landing pages, User flow, wireframing, prototyping
              and MObile App Design.
            </p>
          </div>
        </div>
      </section> */}

      <section
        id='contact'
        className='contact my-20 p-4 flex justify-center items-center bg-primary  text-secondary md:p-16'
      >
        <div className='container mx-auto text-center grid md:grid-cols-2'>
          <div className='left'>
            <h1 className='uppercase font-medium text-center text-4xl md:text-5xl 2xl:text-8xl'>
              Lets Start By saying Hi
            </h1>
            <button className='mt-8 text-2xl border-solid border-2 border-amber-200 cursor-pointer rounded-lg py-4 px-8'>
              Email me
            </button>
          </div>
          <div className='right'>
            <Contact />
          </div>
        </div>
      </section>

      {/* <! ----------- Footer ----------- !> */}

      <section class='footer p-4 '>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
          aliquit turpis nulla
        </p>

        <div class='icons'>
          <i class='fab fa-facebook'></i>
          <i class='fab fa-twitter'></i>
          <i class='fab fa-instagram'></i>
          <i class='fab fa-linkedin'></i>
        </div>
        <p>
          Made with <i class='fas fa-heart text-red-500'></i> by Morde
        </p>
      </section>
    </div>
  )
}

export default App

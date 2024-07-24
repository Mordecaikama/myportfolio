import './App.css'
import Header from './components/header/header'

function App() {
  return (
    <div className='App'>
      <Header />

      <section className='hero mx-auto mt-2 p-8 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 bg-slate-200 border-solid border-1 border-slate-600'>
        <div className='left ml-24  '>
          <h1 className='text-6xl  font-bold uppercase 2xl:text-9xl lg:text-8xl md:text-7xl  '>
            i'm Mordecai Agyapong
          </h1>
          <h2 className='text-6xl uppercase '>full stack Developer</h2>
          <p className=' my-4'>Excellent, Hardworking, Great Personality</p>

          <button className='border-solid border-2 border-slate-700 cursor-pointer rounded-2xl p-4 text-center'>
            Click for More
          </button>
        </div>
        <div className='right mt-16'>
          <img
            className='w-96 object-cover h-96 rounded-full border-solid border-8 border-teal-200'
            src={require('./assets/img/profile.jpg')}
            alt=''
          />
        </div>
      </section>

      <section className='container mx-auto mt-40   text-center'>
        <h1 className='text-5xl '>My Working History</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className='history flex flex-row justify-center align-center gap-16 text-left mt-4'>
          <div className='card w-80 border-solid border-2 border-slate-500 rounded-md'>
            <img
              className='w-full'
              src={require('./assets/img/profile.jpg')}
              alt=''
            />
            <div className='card__bottom ml-2'>
              <h4>Lorem ipsum dolor.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='card w-80 border-solid border-2 border-slate-500 rounded-md'>
            <img
              className=''
              src={require('./assets/img/profile.jpg')}
              alt=''
            />
            <h4>Lorem ipsum dolor.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </div>
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

      <section className='projects container mx-auto text-center mt-[10rem]'>
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div class='row flex items-center justify-between gap-4 mt-8'>
          <div class='project-col '>
            <img src={require('./assets/img/london.png')} alt='' />
            <div class='layer'>
              <h3>Bible</h3>
            </div>
          </div>
          <div class='project-col'>
            <img src={require('./assets/img/newyork.png')} alt='' />
            <div class='layer'>
              <h3>POS</h3>
            </div>
          </div>
          <div class='project-col'>
            <img src={require('./assets/img/washington.png')} alt='' />
            <div class='layer'>
              <h3>Election</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='services container mx-auto mt-[5rem] '>
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
      </section>

      <section className='contact my-40 flex justify-center items-center bg-primary h-screen text-secondary'>
        <div className='container mx-auto text-center'>
          <h1 className='uppercase font-medium text-center text-6xl md:text-7xl 2xl:text-8xl'>
            Lets Start By saying Hi
          </h1>
          <button className='mt-8 text-2xl border-solid border-2 border-amber-200 cursor-pointer rounded-lg py-4 px-8'>
            Email me
          </button>
        </div>
      </section>

      {/* <! ----------- Footer ----------- !> */}

      <section class='footer'>
        <h4>About Us</h4>
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
          Made with <i class='far fa-heart'></i> by Morde
        </p>
      </section>
    </div>
  )
}

export default App

import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'

import mainImg from '../components/assets/coupe.jpg'

const Home = () => {
  return (
    <div className='hero min-h-full '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={mainImg} className='max-w-full rounded-lg shadow-2xl' />
        <div className='flex flex-col align-start'>
          <FaCode className='text-8xl text-sky-900' />
          <h1 className='text-5xl font-bold pb-4'>David Mott </h1>
          <h3 className='pb-6 text-xl'>Full Stack Web Developer</h3>
          <div className='flex justify-start gap-12'>
            <a
              href='https://github.com/Hi-ImDave'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='text-4xl' />
            </a>
            <a
              href='https://www.linkedin.com/in/hi-imdave/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='text-4xl' />
            </a>
          </div>
          <div className='divider'></div>
          <div>
            <h3 className='text-xl font-bold'>About Me</h3>
            <p className='py-6'>
              I'm a self-taught software engineer with a passion for User
              Interface design and problem-solving. Proficient in HTML, CSS,
              JavaScript, React, Node, MongoDB, and Express, I excel at
              developing elegant solutions for complex challenges. Check out my
              portfolio to see some of my work and feel free to contact me for
              any potential projects or collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

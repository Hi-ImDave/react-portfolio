import { FaGithub, FaLinkedin, FaSlackHash } from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer items-center p-4 bg-slate-800 text-neutral-content'>
      <div className='items-center grid-flow-col'>
        <FaSlackHash className='text-4xl' />
        <p>Copyright &copy; {footerYear} All right reserved</p>
      </div>
      <div className='grid-flow-col gap-6 md:place-self-center md:justify-self-end pr-6'>
        <a href='https://github.com/Hi-ImDave' target='_blank' rel='noreferrer'>
          <FaGithub className='text-3xl' />
        </a>
        <a
          href='https://www.linkedin.com/in/hi-imdave/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className='text-3xl' />
        </a>
      </div>
    </footer>
  )
}

export default Footer

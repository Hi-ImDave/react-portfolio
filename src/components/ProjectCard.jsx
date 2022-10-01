import { FaLink, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, explanation, repoLink, webLink, projectImg }) => {
  return (
    <div className='card w-96 bg-sky-900/25 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src={projectImg}
          alt={title}
          className='border border-slate-300 rounded-xl  transition hover:scale-125 duration-350 ease-in-out'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>{explanation}</p>
        <div className='card-actions justify-center'>
          <button className='btn btn-outline w-5/12 inline hover:scale-110'>
            <FaGithub />
            <a href={repoLink} target='_blank' rel='noreferrer'>
              View Repository
            </a>
          </button>
          <button className='btn btn-glass w-5/12 inline hover:scale-110'>
            <FaLink />
            <a href={webLink} target='_blank' rel='noreferrer'>
              Visit Website
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

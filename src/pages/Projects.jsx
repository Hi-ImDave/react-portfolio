import ProjectCard from '../components/ProjectCard'
import gitHubFinderIMG from '../components/assets/gitHubFinder.png'
import feedbackAppIMG from '../components/assets/feedbackApp.png'
import hsoIMG from '../components/assets/hsoApp.png'
import mernIMG from '../components/assets/mernApp.png'
import marketplaceIMG from '../components/assets/marketplaceApp.png'

const Projects = () => {
  const gitFinderExplanation =
    'This is a React app to search github user profiles and see profile details.'

  const feedbackAppExplanation =
    'This is a react app for providing feedback and ratings '

  const hsoExplanation =
    'This is a React app to search NASA Astronomy Picture of the Day.'

  const mernExplanation =
    'This is a full stack app for setting and saving goals.'

  const marketplaceExplanation =
    'This is a React app to upload and view house listings.'
  return (
    <div className='grid justify-items-center grid-cols-1 gap-6 2xl:grid-cols-4  xl:grid-cols-3 xl:gap-24  lg:grid-cols-2   md:grid-cols-2 md:gap-12 sm:grid-cols-1'>
      <ProjectCard
        title='Github Finder'
        explanation={gitFinderExplanation}
        repoLink='https://github.com/Hi-ImDave/gitHub-finder'
        webLink='https://github-finder-dmottdev.netlify.app/'
        projectImg={gitHubFinderIMG}
      />
      <ProjectCard
        title='Feedback UI'
        explanation={feedbackAppExplanation}
        repoLink='https://github.com/Hi-ImDave/feedback-app'
        webLink='https://feedback-app-dsm.netlify.app/'
        projectImg={feedbackAppIMG}
      />
      <ProjectCard
        title='NASA Photo Finder'
        explanation={hsoExplanation}
        repoLink='https://github.com/Hi-ImDave/hso-react'
        webLink='https://hso-react.vercel.app/'
        projectImg={hsoIMG}
      />
      <ProjectCard
        title='Goal Setter App'
        explanation={mernExplanation}
        repoLink='https://github.com/Hi-ImDave/mern-app'
        webLink='https://mernappdsm.herokuapp.com/register'
        projectImg={mernIMG}
      />
      <ProjectCard
        title='House Marketplace App'
        explanation={marketplaceExplanation}
        repoLink='https://github.com/Hi-ImDave/house-marketplace-app'
        webLink='https://house-marketplace-pied-nine.vercel.app/'
        projectImg={marketplaceIMG}
      />
    </div>
  )
}

export default Projects

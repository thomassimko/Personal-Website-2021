import {
  faAngular,
  faGithub,
  faJava,
  faLinkedin,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDownload,
  faEnvelope,
  faTree,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import FirebaseLogo from '../../public/assets/images/Firebase.svg';
import MovieRenamer from '../../public/assets/images/MovieRenamer.png';
import MySqlLogo from '../../public/assets/images/MySQL.svg';
import PDG from '../../public/assets/images/pdg.png';
import QuickpickHeatmap from '../../public/assets/images/quickpick-heatmap.png';
import { Meta } from '../layout/Meta';
import { AboutBlock } from '../templates/AboutBlock';
import { IconWithText } from '../templates/IconWithText';
import { Main } from '../templates/Main';
import { ProjectItem } from '../templates/ProjectItem';
import { Section } from '../templates/Section';
import { TechnologyStack } from '../templates/TechnologyStack';

const Index = () => {
  const GithubButton = (
    <a
      className="white-button text-2xl"
      target="_blank"
      href="https://github.com/thomassimko"
      aria-label="Github profile"
      rel="noreferrer"
    >
      <IconWithText icon={faGithub} />
    </a>
  );
  const LinkedInButton = (
    <a
      className="white-button text-2xl"
      target="_blank"
      href="https://www.linkedin.com/in/thomas-simko-0b2491b6/"
      aria-label="LinkedIn profile"
      rel="noreferrer"
    >
      <IconWithText icon={faLinkedin} />
    </a>
  );

  return (
    <>
      <Main
        meta={
          <Meta
            title="Thomas Simko"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
      >
        <nav className="grid grid-flow-col auto-cols-min gap-8 p-4 py-8 md:px-12 text-2xl">
          {GithubButton}
          {LinkedInButton}
        </nav>
        <Section classNames="pb-40 header">
          <h4
            className="text-gray-700 absolute watermark"
            style={{ top: 'calc(100px + 2vw)', left: '-3.8vw' }}
          >
            Software Engineer
          </h4>
          <header className="relative">
            <h1>Thomas Simko</h1>
            <h2>Full-stack Developer</h2>
            <div className="flex text-base pt-12 text-lg">
              <Link
                type="button"
                className="blue-button"
                to="projects"
                duration={500}
                smooth
              >
                View Portfolio
              </Link>
              <a
                type="button"
                className="ml-6 white-button flex items-center whitespace-nowrap"
                href="mailto:tjsimko@gmail.com"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden
                  className="mr-2"
                />
                Contact Me
              </a>
            </div>
          </header>
        </Section>
        <Section classNames="">
          <h3>About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24 my-12 ml-16 md:ml-0">
            <AboutBlock
              title="Fast-paced, data-driven development"
              iconProp={faCode}
            >
              The best way to make decisions is using data, not ego. By
              analyzing and interpreting data, one can determine the optimal
              allocation of resources to solve each problem. Performing this on
              a larger scale, results in faster delivery of features and better
              user satisfaction.
            </AboutBlock>
            <AboutBlock
              title="Collaborate and Embrace Feedback"
              iconProp={faUsers}
            >
              The most important traits of a team are open communication,
              diversity, and a positive attitude. Working with people who share
              a common goal, not only makes the product butter but also makes
              you a better contributor. All feedback is good feedback.
            </AboutBlock>
            <AboutBlock
              title="Leave places better than found"
              iconProp={faTree}
            >
              Whether out in nature or in a new codebase, it is important to
              clean up after yourself and others. In the world of engineering,
              this process has the goal of clear, concise, maintainable code,
              while reducing technical debt as much as possible.
            </AboutBlock>
          </div>
        </Section>
        <Section classNames="bg-gray-700">
          <h4
            className="text-gray-600 absolute watermark"
            style={{ top: '50px', right: '-7vw' }}
          >
            Skills
          </h4>
          <div className="relative py-36">
            <h3>Technologies</h3>
            <p className="text-gray-300 max-w-md text-base">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I've worked with a wide variety of technologies as a full-stack
              engineer, and I’m always learning new ones!
            </p>
            <div className="grid auto-cols-min grid-flow-col grid-rows-2 sm:grid-rows-1 gap-3 justify-between mt-12">
              <TechnologyStack title="React" iconProp={faReact} />
              <TechnologyStack title="AngularJS" iconProp={faAngular} />
              <TechnologyStack title="Java" iconProp={faJava} />
              <TechnologyStack title="Python" iconProp={faPython} />
              <TechnologyStack title="Firebase" image={FirebaseLogo} />
              <TechnologyStack title="MySQL" image={MySqlLogo} />
            </div>
          </div>
        </Section>
        <Section id="projects">
          <div className="relative py-36">
            <h3>Projects</h3>
            <ProjectItem
              title="Movie Renamer"
              image={MovieRenamer}
              description="The goal of this personal project is an application that watches a directory and automatically
                renames the movie file to a customizable format if the name matching algorithm meets a confidence threshold,
                logging the output.  The algorithm uses fuzzy search in ElasticSearch with data seeded from The Movie Database
                API and indexed using a python script."
              technologies={[
                'React',
                'Electron',
                'ElasticSearch',
                'Tailwind',
                'Typescript',
              ]}
            />
            <ProjectItem
              title="Sensor App"
              image={QuickpickHeatmap}
              description="I created something cool"
              technologies={['React', 'Ionic', 'Firestore', 'Typescript']}
            />
            <ProjectItem
              title="Tele-operated Strawberry Harvester"
              image={QuickpickHeatmap}
              description="In collaboration with the California Strawberry Commission, I served as front-end
              technical lead to develop a platform to enhance strawberry production through remote operation
              of strawberry harvesters and analysis of the farm’s data.  This project allowed users to control a robot
              to pick strawberries or classify strawberries as potentially diseased to provide the farm owner a heat
              map of infestations.  The MQTT protocol was used to stream commands to a RaspberryPi-powered robot,
              which streamed a live video feed back to the browser."
              technologies={['React', 'AWS', 'Java Spring', 'Typescript']}
            />
            <ProjectItem
              title="Cloneless: Code Clone Detection via Program Dependence Graphs with Relaxed Constraints"
              image={PDG}
              description="Code clones are pieces of code that have the same functionality. While some clones may
              structurally match one another, others may look drastically different. The inclusion of code clones
              clutters a code base, leading to increased costs through maintenance. While manual clone identification may be
              more accurate than automated detection, it is infeasible due to the extensive size of many code
              bases.  This thesis outlines a method of detecting clones using a program dependence
              graph and subgraph isomorphism to identify similar subgraphs, ultimately illuminating clones."
              technologies={['Java', 'CLI']}
            />
          </div>
        </Section>
        <Section classNames="bg-gray-900">
          <div className="footer grid gap-8 py-6 md:py-10">
            <a className="white-button">
              <IconWithText icon={faDownload} buttonText="Download Resume" />
            </a>
            {GithubButton}
            {LinkedInButton}
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Index;

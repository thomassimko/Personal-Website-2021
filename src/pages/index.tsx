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
            style={{
              top: 'calc(100px + 2vw)',
              marginLeft: '-3.8vw',
              maxWidth: 'calc(100vw + 3.8vw)',
            }}
          >
            Software Engineer
          </h4>
          <header className="relative">
            <h1>Thomas Simko</h1>
            <h2>Full-stack Developer</h2>
            <div className="flex text-base pt-12 text-lg">
              <Link className="blue-button" to="projects" duration={500} smooth>
                View Portfolio
              </Link>
              <a
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
              I make decisions as a programmer based on data. By analyzing and
              interpreting data, I can reduce development time and boost user
              satisfaction.
            </AboutBlock>
            <AboutBlock
              title="Collaborate and embrace feedback"
              iconProp={faUsers}
            >
              As a member of a scrum team, I practice open communication,
              empathy, and a positive attitude. I also value feedback from my
              teammates.
            </AboutBlock>
            <AboutBlock
              title="Leave it better than you found it"
              iconProp={faTree}
            >
              Inside and outside the workplace, it&apos;s important to clean up
              after yourself and others. As a software engineer, this means
              composing clear, concise, and maintainable code.
            </AboutBlock>
          </div>
        </Section>
        <Section classNames="bg-gray-700">
          <h4
            className="text-gray-600 absolute watermark"
            style={{
              top: '50px',
              marginLeft: '37vw',
              maxWidth: 'calc(100vw - 37vw)',
            }}
          >
            Skills
          </h4>
          <div className="relative py-36">
            <h3>Technologies</h3>
            <p className="text-gray-300 max-w-md text-base">
              As a full-stack engineer, I get to work with a variety of
              technologies. I love learning new languages and frameworks, such
              as the ones listed below.
            </p>
            <div className="grid auto-cols-min grid-flow-col grid-rows-2 sm:grid-rows-1 gap-3 justify-between mt-12">
              <TechnologyStack title="React" iconProp={faReact} />
              <TechnologyStack title="AngularJS" iconProp={faAngular} />
              <TechnologyStack title="Java" iconProp={faJava} />
              <TechnologyStack title="Python" iconProp={faPython} />
              <TechnologyStack
                title="Firebase"
                image="/assets/images/Firebase.svg"
              />
              <TechnologyStack title="MySQL" image="/assets/images/MySQL.svg" />
            </div>
          </div>
        </Section>
        <Section id="projects">
          <div className="relative py-36">
            <h3>Projects</h3>
            <ProjectItem
              title="Movie Renamer"
              image="/assets/images/MovieRenamer.png"
              description="As a side project, I'm developing an application that renames movie files to user defined
              formats. The program watches a directory and if the name-matching algorithm meets a confidence threshold,
              it renames the files. The algorithm uses fuzzy matching in ElasticSearch with data seeded from The
              Movie Database API that is indexed using a Python script."
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
              image="/assets/images/sensor-app.png"
              description="I developed a cross-platform mobile app using Ionic that subscribes to real-time updates from a
                variety of Arduino-powered sensors. The sensors post their data to Google Firestore, and the app automatically
                updates with new data. If a certain threshold is met, the app users can be notified."
              technologies={['React', 'Ionic', 'Firestore', 'Typescript']}
            />
            <ProjectItem
              title="Tele-operated Strawberry Harvester"
              image="/assets/images/quickpick-heatmap.png"
              description="In collaboration with the California Strawberry Commission, I served as the front-end
              technical lead to develop a platform to improve strawberry production through remote operation
              of strawberry harvesters and analysis of the farm’s data. This project allowed users to control a robot
              to pick strawberries or classify strawberries as potentially diseased, providing the farm owner a heat
              map of infestations. The MQTT protocol was used to stream commands to a RaspberryPi-powered robot,
              which streamed a live video feed back to the browser."
              technologies={['React', 'AWS', 'Java Spring', 'Typescript']}
            />
            <ProjectItem
              title="Cloneless: Code Clone Detection via Program Dependence Graphs with Relaxed Constraints"
              image="/assets/images/pdg.png"
              description="Code clones are pieces of code that have the same functionality. While some clones may
              structurally match one another, others may look drastically different. The inclusion of code clones
              clutters a code base, leading to increased costs through maintenance. While manual clone identification may be
              more accurate than automated detection, it is infeasible due to the extensive size of many code
              bases. This thesis outlines a method of detecting clones using a program dependence
              graph and subgraph isomorphism to identify similar subgraphs, ultimately illuminating clones."
              technologies={['Java', 'CLI']}
            />
          </div>
        </Section>
        <Section classNames="bg-gray-900">
          <div className="footer grid gap-8 py-6 md:py-10">
            <a
              className="white-button"
              href="/assets/Resume.pdf"
              download="Thomas_Simko_Resume.pdf"
            >
              <IconWithText icon={faDownload} buttonText="Download Resume" />
            </a>
            <a
              className="white-button text-2xl"
              target="_blank"
              href="mailto:tjsimko@gmail.com"
              aria-label="Mail to tjsimko@gmail.com"
              rel="noreferrer"
            >
              <IconWithText icon={faEnvelope} />
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

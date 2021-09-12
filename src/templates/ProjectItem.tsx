import Image from 'next/image';

type IProjectItemProps = {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
};

const ProjectItem = (props: IProjectItemProps) => (
  <div className="project-item relative flex mt-16 flex-col sm:flex-row gap-8">
    <div className="w-full sm:w-1/3">
      <div className="rounded bg-gray-700 text-center p-3">
        <Image src={props.image} layout="responsive" className="rounded" />
      </div>
    </div>
    <div className="w-full sm:w-2/3">
      <div className="project-item__header relative pl-4">
        <h4>{props.title}</h4>
        <h5 className="text-gray-300 text-base flex flex-wrap gap-x-4">
          {props.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </h5>
      </div>
      <p className="text-base">{props.description}</p>
    </div>
  </div>
);

export { ProjectItem };

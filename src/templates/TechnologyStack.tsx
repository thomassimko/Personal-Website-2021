import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ITechnologyStackProps = {
  title: string;
  iconProp?: IconProp;
  image?: string;
};

const TechnologyStack = (props: ITechnologyStackProps) => (
  <div className="tech-stack text-center">
    <div className="h-12 w-full relative">
      {props.image ? (
        <img src={props.image} alt="" />
      ) : (
        props.iconProp && <FontAwesomeIcon icon={props.iconProp} aria-hidden />
      )}
    </div>
    <h4 className="font-base font-light mt-2">{props.title}</h4>
  </div>
);

export { TechnologyStack };

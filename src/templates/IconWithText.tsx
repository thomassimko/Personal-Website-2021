import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IIconWithTextProps = {
  icon: IconProp;
  buttonText?: string;
  iconLocation?: 'left' | 'right';
};

const IconWithText = (props: IIconWithTextProps) => {
  const iconMargin = props.iconLocation === 'right' ? 'ml-2' : 'mr-2';
  return (
    <>
      {props.iconLocation === 'left' && props.buttonText}
      <FontAwesomeIcon
        icon={props.icon}
        className={props.buttonText && iconMargin}
      />
      {props.iconLocation !== 'left' && props.buttonText}
    </>
  );
};

export { IconWithText };

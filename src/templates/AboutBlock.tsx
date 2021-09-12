import React, { ReactNode } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IAboutBlockProps = {
  title: string;
  iconProp: IconProp;
  children: ReactNode;
};

const AboutBlock = (props: IAboutBlockProps) => (
  <div className="relative about-item">
    <FontAwesomeIcon
      icon={props.iconProp}
      className="absolute text-gray-700"
      style={{ fontSize: '90px', transform: 'translateX(-60%)' }}
    />
    <div className="relative py-8">
      <h4 className="font-medium">{props.title}</h4>
      <p className="text-gray-300 text-base">{props.children}</p>
    </div>
  </div>
);

export { AboutBlock };

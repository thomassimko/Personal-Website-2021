import { ReactNode } from 'react';

type ISectionProps = {
  children: ReactNode;
  classNames?: string;
  id?: string;
};

const Section = (props: ISectionProps) => (
  <section
    className={`w-full text-white relative ${props.classNames || ''}`}
    id={props.id}
  >
    <div className="max-w-screen-lg mx-auto px-5 sm:px-8 md:px-12">
      {props.children}
    </div>
  </section>
);

export { Section };

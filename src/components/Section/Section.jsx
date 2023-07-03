import { SectionWrap } from './Section.style';

const Section = ({ children, className }) => (
  <SectionWrap className={className}>{children}</SectionWrap>
);

export default Section;

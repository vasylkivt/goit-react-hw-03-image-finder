import styled from 'styled-components';

export const SectionWrap = styled.section`
  outline: 1px solid black;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorLight};
`;

import styled from 'styled-components';

export const Text = styled.p`
  position: relative;

  /* display: flex; */
  text-align: center;
  width: 500px;
  margin: 0 auto;

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 700;

  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
`;

import styled from 'styled-components';
export const ContainerWrap = styled.div`
  outline: 1px solid black;
  background-color: aliceblue;

  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 28px;
    padding-left: 28px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 36px;
    padding-left: 36px;
    width: 1440px;
  }
`;

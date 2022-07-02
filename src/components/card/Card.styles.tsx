import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;
  width: 600px;
  border-radius: 25px;
  align-items: center;
  box-shadow: -10px -10px 20px #fff, 10px 10px 20px #babecc;
  padding: 25px 25px 25px 15px;
  margin: 20px 20px;

  @media (max-width: 768px) {
    height: 100%;
    width: 300px;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Temperature = styled.span`
  font-size: 60px;
`;

export const MainContent = styled.div`
  height: 100%;
  width: 250px;
  box-shadow: -10px -10px 20px #fff, 10px 10px 20px #babecc;
  border-radius: 10px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Img = styled.img`
  position: absolute;
  left: 45%;

  @media (min-width: 320px) and (max-width: 768px) {
    left: 50%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    left: 28%;
  }
  @media (min-width: 1025px) {
    left: 35%;
  }
`;

export const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoCard = styled.div`
  margin-bottom: 20px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;

  border-radius: 5px;
  box-shadow: 5px 5px 18px -6px #babecc;

  &:first-of-type {
    margin-bottom: 10px;
  }
`;

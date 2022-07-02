import styled from '@emotion/styled';
export const Content = styled.div`
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardList = styled.div`
  @media (max-width: 768px) {
    display: flex;
    overflow: scroll;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  z-index: 100;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    background-color: #f0f0f0;
  }
`;

export const Input = styled.input`
  width: 80%;
  border: 0;
  padding: 10px 6px;
  margin: 20px 0;
  border-radius: 10px;

  &:focus {
    outline: none !important;
    border: 0;
    box-shadow: 5px 5px 18px -6px #babecc;
  }
`;

export const Icon = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;
  border: 0;
  padding: 0;

  & > svg {
    width: 100%;
    height: 100%;
    color: #0f85e7;
  }
`;

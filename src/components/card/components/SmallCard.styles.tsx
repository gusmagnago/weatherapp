import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 18px -6px #babecc;
  align-items: center;
  padding: 3px 15px;
  cursor: ns-resize;
  &:hover {
    transform: scale(1.05);
    background-color: #dedddd;
  }
`;

export const Icon = styled.img`
  width: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

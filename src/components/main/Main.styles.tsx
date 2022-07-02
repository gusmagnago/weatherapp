import styled from '@emotion/styled';

export const DumbInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  font-size: 10px;
  padding: 15px;
  cursor: se-resize;
  & > span {
    margin-bottom: 5px;
    text-transform: lowercase;
  }
  z-index: -1;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

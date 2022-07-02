import React from 'react';
import { Content, Loader, LoaderContent, LoaderPart } from './Spinner.styles';

const Spinner = () => {
  return (
    <Content>
      <LoaderPart />
      <Loader>
        <LoaderContent />
      </Loader>
    </Content>
  );
};

export default Spinner;

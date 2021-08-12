import React from 'react';
import MessageBox from './BaseComponents/MessageBox';

const NoResultsFoundMessageBox: React.FC = () => {
  return (
    <MessageBox type="error">
      Movie not found!
    </MessageBox>
  );
};

export default NoResultsFoundMessageBox;

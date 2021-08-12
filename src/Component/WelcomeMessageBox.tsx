import React from 'react';
import MessageBox from './BaseComponents/MessageBox';

const WelcomeMessageBox: React.FC = () => {
  return (
    <MessageBox type="info">
      Welcome to OMDB Search, search something in the bar above!
    </MessageBox>
  );
};

export default WelcomeMessageBox;

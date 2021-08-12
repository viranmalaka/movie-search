import React, { ReactNode } from 'react';

type MessageBoxProps = {
  type: string,
  children: ReactNode,
}

const MessageBox: React.FC<MessageBoxProps> = ({ type, children }: MessageBoxProps) => {
  return (
    <div className={`message-box message-box-${type}`}>
      {children}
    </div>
  );
};

export default MessageBox;

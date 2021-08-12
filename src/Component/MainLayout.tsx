import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode,
  headerContent: React.ReactNode,
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, headerContent }: MainLayoutProps) => {
  return (
    <div className="layout">
      <div className="header">
        <div className="content flex">
          <div className="logo">OMDB Search</div>
          <div className="header-content">
            {headerContent}
          </div>
        </div>
      </div>
      <div className="body">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

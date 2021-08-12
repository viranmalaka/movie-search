import React, { ReactNode, useState } from 'react';

type ImageCardProps = {
  image: string,
  content: ReactNode,
  subContent: ReactNode,
  actionButton: ReactNode,
  fullWidth: boolean,
}

const ImageCard: React.FC<ImageCardProps> = ({ image, content, subContent, actionButton, fullWidth }: ImageCardProps) => {
  const [hasImageLoadError, setImageLoadError] = useState<boolean>(false);

  const handleImageLoadError = () => {
    setImageLoadError(true);
  }

  return (
    <div className="image-card-area" style={fullWidth ? {flexBasis:'100%'} : {}}>
      <div className="image-card-container">
        <img src={hasImageLoadError ? './movie-poster-placeholder.png' : image} alt={`poster-${image}`} onError={handleImageLoadError}/>
        <div className="card-content">
          <div className="card-main-content">
            {content}
          </div>
          <div className="card-sub-content">
            {subContent}
            {actionButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

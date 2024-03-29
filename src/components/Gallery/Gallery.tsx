import cn from 'classnames';
import { SyntheticEvent, useState } from 'react';
import styles from './Gallery.module.css';
import { GalleryProps } from './Gallery.props';

export const Gallery = ({ images, initialImage, dataTestId }: GalleryProps): JSX.Element => {

  const [activeImg, setActiveImg] = useState(initialImage);

  const handleImgVarClick = (e: SyntheticEvent<HTMLImageElement>) => {
    const imgSrc = e.currentTarget.src;
    if (imgSrc) {
      setActiveImg(imgSrc);
    };
  };

  return (
    <div className={styles.gallery} data-test-id={dataTestId}>
      <div className={styles.imgWrapper}>
        <img
          key={activeImg}
          src={activeImg}
          alt='активное изображение'
        />
      </div>
      <ul className={styles.imgList}>
        {
          images.map((img, i) => (
            <li key={i} className={cn(styles.imgItem, {
              [styles.itemActive]: img === activeImg
            })}>
              <img
                onClick={handleImgVarClick}
                src={img}
                alt={`вариант товара ${i + 1}`}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

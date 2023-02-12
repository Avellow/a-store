import cn from 'classnames';
import { SyntheticEvent, useState } from 'react';
import styles from './Gallery.module.css';
import { GalleryProps } from './Gallery.props';

export const Gallery = ({ images, initialImage }: GalleryProps): JSX.Element => {

  const [activeImg, setActiveImg] = useState<string>(initialImage);

  const handleImgVarClick = (e: SyntheticEvent<HTMLImageElement>) => {
    const imgSrc = e.currentTarget.src;
    if (imgSrc) {
      setActiveImg(imgSrc);
    };
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.imgWrapper}>
        <img
          key={activeImg}
          src={activeImg}
          alt='активное изображение'
        />
      </div>
      <ul className={styles.imgList}>
        {
          !images.length ? (
            <li className={cn(styles.imgItem, styles.itemActive)}>
              <img
                onClick={handleImgVarClick}
                src={initialImage}
                alt='вариант товара'
              />
            </li>
          ) : (
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
          )
        }
      </ul>
    </div>
  );
};

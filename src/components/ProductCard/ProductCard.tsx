import styles from './ProductCard.module.css';
import { ProductProps } from './ProductCard.props';
import { Amount } from '@alfalab/core-components/amount';
import { Typography } from "@alfalab/core-components/typography";
import { Link } from 'react-router-dom';

export const ProductCard = ({
  title,
  id,
  availability,
  preview,
  price
}: ProductProps): JSX.Element => {

  return (
    <Link to={`${id}`} className={styles.product} data-testid='made-in-alfa-product'>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={preview}
          alt={title}
        />
      </div>

      <Typography.TitleResponsive
        view='xsmall'
        tag='h3'
        weight='bold'
        className={styles.title}
      >
        {title}
      </Typography.TitleResponsive>

      <Typography.Text view='primary-large' tag='p'>
        <Amount
          value={price}
          currency='RUB'
          minority={0}
        />
      </Typography.Text>
    </Link>
  );
};

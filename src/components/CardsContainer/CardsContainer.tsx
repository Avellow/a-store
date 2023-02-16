import { CardsContainerProps } from './CardsContainer.props'
import cn from 'classnames';
import styles from './CardsContainer.module.css';
import { ProductCard } from '../ProductCard/ProductCard';

export const CardsContainer = ({ className, cards, ...restProps }: CardsContainerProps): JSX.Element => {
  return (
    <div className={cn(className, styles.container)} {...restProps}>
      <ul className={styles.list}>
        {
          cards.map(card => (
            <li key={card.id} className={styles.item}>
              <ProductCard {...card} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

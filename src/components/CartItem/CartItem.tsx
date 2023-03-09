import { useMemo } from 'react';
import { SuperEllipse } from '@alfalab/core-components/icon-view/super-ellipse';
import { Typography } from '@alfalab/core-components/typography';
import { IconButton } from '@alfalab/core-components/icon-button';
import { AddMIcon } from '@alfalab/icons-glyph/AddMIcon';
import { MinusMIcon } from '@alfalab/icons-glyph/MinusMIcon';
import { Amount } from '@alfalab/core-components/amount';
import { DeleteMBlackIcon } from '@alfalab/icons-classic/DeleteMBlackIcon';

import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { translateToRu } from '../../vendor/engToRuDictionary';
import { useAppDispatch } from '../../store';
import { cartActions } from '../../store/cart';

export const CartItem = ({ item }: CartItemProps): JSX.Element => {

  const dispatch = useAppDispatch();
  const { options, imageURL, title, quantity, price } = item;

  const optionsEntries = useMemo(() => {
    if (options) {
      return Object.entries(options);
    }
  }, [options]);

  const handleDecrease = () => {
    if (item.quantity === 1) {
      dispatch(cartActions.removeItem(item));
    } else {
      dispatch(cartActions.decreaseQuantity(item));
    }
  };

  const handleIncrease = () => {
    dispatch(cartActions.addItem(item));
  };

  const handleRemove = () => {
    dispatch(cartActions.removeItem(item))
  };

  return (
    <div className={styles.item}>
      <SuperEllipse
        size={80}
        imageUrl={imageURL}
        dataTestId='img'
      />
      <div className={styles.info}>
        <div className={styles.details}>
          <Typography.TitleResponsive
            font='styrene'
            view='xsmall'
            weight='bold'
            color='primary'
            tag='h4'
            className={styles.title}
            dataTestId='title'
          >
            {title}
          </Typography.TitleResponsive>

          {!!optionsEntries?.length && (
            <ul className={styles.options}>
              {optionsEntries.map(([name, value]) => (
                <li key={name}>
                  <Typography.Text
                    view='primary-small'
                    weight='bold'
                    className={styles.option}
                    dataTestId={`${name}-option`}
                  >
                    {translateToRu(name)}: {translateToRu(`${value}`)}
                  </Typography.Text>
                </li>
              ))}
            </ul>
          )}

        </div>
        <div className={styles.quantityControl}>
          <div className={styles.control}>
            <IconButton
              icon={MinusMIcon}
              size='xs'
              className={styles.controlIcon}
              onClick={handleDecrease}
              dataTestId='decrease-quantity'
            />
            <span data-test-id='quantity'>{quantity}</span>
            <IconButton
              icon={AddMIcon}
              size='xs'
              className={styles.controlIcon}
              onClick={handleIncrease}
              dataTestId='increase-quantity'
            />
          </div>
          <Amount
            value={quantity * price}
            minority={0}
            currency='RUB'
            className={styles.price}
            dataTestId='total-price'
          />
        </div>
      </div>
      <IconButton icon={DeleteMBlackIcon} colors='inverted' onClick={handleRemove} dataTestId='remove-item' />
    </div>
  );
};

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

export const CartItem = ({ item, onDecrease, onIncrease, onRemove }: CartItemProps): JSX.Element => {

  const { options, imageURL, title, quantity, price } = item;

  const optionsEntries = useMemo(() => {
    if (options) {
      return Object.entries(options);
    }
  }, [options]);

  const handleDecrease = () => {
    onDecrease(item);
  };

  const handleIncrease = () => {
    onIncrease(item);
  };

  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <div className={styles.item}>
      <SuperEllipse
        size={80}
        imageUrl={imageURL}
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
          >
            {title}
          </Typography.TitleResponsive>

          <ul className={styles.options}>
            {optionsEntries && optionsEntries.map(([name, value]) => (
              <li key={name}>
                <Typography.Text view='primary-small' weight='bold' className={styles.option}>
                  {translateToRu(name)}: {translateToRu(`${value}`)}
                </Typography.Text>
              </li>
            ))}
          </ul>

        </div>
        <div className={styles.quantity}>
          <div className={styles.control}>
            <IconButton
              icon={MinusMIcon}
              size='xs'
              className={styles.controlIcon}
              onClick={handleDecrease}
            />
            <span>{quantity}</span>
            <IconButton
              icon={AddMIcon}
              size='xs'
              className={styles.controlIcon}
              onClick={handleIncrease}
            />
          </div>
          <Amount value={quantity * price} minority={0} currency='RUB' className={styles.price} />
        </div>
      </div>
      <IconButton icon={DeleteMBlackIcon} colors='inverted' onClick={handleRemove} />
    </div>
  );
};

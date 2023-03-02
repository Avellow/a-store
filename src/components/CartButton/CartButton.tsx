import { IconButton } from '@alfalab/core-components/icon-button';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { ShoppingBagMIcon } from '@alfalab/icons-glyph/ShoppingBagMIcon';
import { Badge } from '@alfalab/core-components/badge';

import styles from './CartButton.module.css';
import { redColor, whiteColor } from '../../vendor/constants';
import { CartButtonProps } from './CartButton.props';

export const CartButton = ({ goodsQuantity, ...restProps }: CartButtonProps): JSX.Element => {
  const CartIconView = () => (
    <Circle
      size={80}
      backgroundColor={redColor}
      bottomAddons={<Badge view='count' content={goodsQuantity} />}
      dataTestId='cart-size'
    >
      <ShoppingBagMIcon fill={redColor} stroke={whiteColor} />
    </Circle>
  );

  return (
    <IconButton
      className={styles.button}
      icon={CartIconView}
      {...restProps}
    />
  );
};

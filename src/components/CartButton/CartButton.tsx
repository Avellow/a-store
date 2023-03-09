import { IconButton } from '@alfalab/core-components/icon-button';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { ShoppingBagMIcon } from '@alfalab/icons-glyph/ShoppingBagMIcon';
import { Badge } from '@alfalab/core-components/badge';
import { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './CartButton.module.css';
import { redColor, whiteColor } from '../../vendor/constants';
import { CartButtonProps } from './CartButton.props';

let lastQuantity = 0;

export const CartButton = ({ goodsQuantity, className, ...restProps }: CartButtonProps): JSX.Element => {
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

  const [animation, setAnimation] = useState<0 | 1>(0);

  useEffect(() => {
    if (lastQuantity !== goodsQuantity) {
      lastQuantity = goodsQuantity;
      setAnimation(1);
    }
  }, [goodsQuantity]);

  return (
    <IconButton
      key={goodsQuantity}

      className={cn(className, styles.button)}
      icon={CartIconView}
      {...restProps}

      data-animation={animation}
    />
  );
};

import { SidePanelResponsive } from "@alfalab/core-components/side-panel/responsive";
import { Typography } from '@alfalab/core-components/typography';
import { Amount } from '@alfalab/core-components/amount';
import { Button } from '@alfalab/core-components/button';
import { useAppDispatch, useAppSelector } from '../../store';
import { cartActions, cartItemsSelector, totalAmountSelector } from '../../store/cart';
import { CartItemType } from '../../types/api';
import styles from './SideCart.module.css';
import { CartItem } from '../CartItem/CartItem';
import { Divider } from '../Divider/Divider';
import { CrossHeavyMIcon } from '@alfalab/icons-glyph/CrossHeavyMIcon';
import { SideCartProps } from './SideCart.props';
import { v1 } from 'uuid';
import cn from 'classnames';

export const SideCart = ({ className, ...props }: SideCartProps): JSX.Element => {

  const dispatch = useAppDispatch()
  const items = useAppSelector(cartItemsSelector)
  const totalAmount = useAppSelector(totalAmountSelector);

  const handleIncreaseQuantity = (item: CartItemType) => {
    dispatch(cartActions.addItem(item));
  };

  const handleDecreaseQuantity = (item: CartItemType) => {
    if (item.quantity === 1) {
      dispatch(cartActions.removeItem(item))
    } else {
      dispatch(cartActions.decreaseQuantity(item));
    }
  };

  const handleRemoveItem = (item: CartItemType) => {
    dispatch(cartActions.removeItem(item))
  }

  return (
    <SidePanelResponsive
      hasCloser
      className={cn(className, styles.panel)}
      {...props}
    >
      <SidePanelResponsive.Header closerIcon={CrossHeavyMIcon}>
        <Typography.Title
          tag='h3'
          font='styrene'
          weight='bold'
          view='medium'
          color='primary'
          className={styles.title}
        >
          Ваш заказ
        </Typography.Title>
      </SidePanelResponsive.Header>
      <SidePanelResponsive.Content>
        <Divider />
        <ul className={styles.items}>
          {items.map(item => (
            <li key={v1()}>
              <CartItem
                item={item}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
                onRemove={handleRemoveItem}
              />
            </li>
          ))}
        </ul>
        <Divider />
        <Typography.Title tag='div' font='styrene' weight='bold' view='small' className={styles.total} color='primary'>
          Total: <Amount value={totalAmount} currency='RUB' minority={0} />
        </Typography.Title>
        <Button block className={styles.button}>Дальше</Button>
      </SidePanelResponsive.Content>
    </SidePanelResponsive>
  );
};

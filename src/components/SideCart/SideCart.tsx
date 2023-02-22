import { SidePanelResponsive } from "@alfalab/core-components/side-panel/responsive";
import { Typography } from '@alfalab/core-components/typography';
import { Amount } from '@alfalab/core-components/amount';
import { Button } from '@alfalab/core-components/button';
import { useAppSelector } from '../../store';
import { cartItemsSelector, totalAmountSelector } from '../../store/cart';
import styles from './SideCart.module.css';
import { CartItem } from '../CartItem/CartItem';
import { Divider } from '../Divider/Divider';
import { CrossHeavyMIcon } from '@alfalab/icons-glyph/CrossHeavyMIcon';
import { SideCartProps } from './SideCart.props';
import { v1 } from 'uuid';
import cn from 'classnames';

export const SideCart = ({ className, ...props }: SideCartProps): JSX.Element => {

  const items = useAppSelector(cartItemsSelector);
  const totalCartPrice = useAppSelector(totalAmountSelector);

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
        <ul className={styles.items} data-test-id='cart-items-list'>
          {items.map(item => (
            <li key={v1()} data-test-id='cart-item'>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <Divider />
        <Typography.Title
          tag='div'
          font='styrene'
          weight='bold'
          view='small'
          className={styles.total}
          color='primary'
          data-test-id='total-cart-price'
        >
          Total: <Amount value={totalCartPrice} currency='RUB' minority={0} />
        </Typography.Title>
        <Button block className={styles.button}>Дальше</Button>
      </SidePanelResponsive.Content>
    </SidePanelResponsive>
  );
};

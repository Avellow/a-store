import { useReducer } from 'react';
import { v1 } from 'uuid';
import { Typography } from '@alfalab/core-components/typography';
import { Amount } from '@alfalab/core-components/amount';
import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { ModalResponsiveProps } from '@alfalab/core-components/modal/typings';
import { ArrowBackMIcon } from '@alfalab/icons-glyph/ArrowBackMIcon';

import { useAppSelector } from '../../store';
import { cartItemsSelector, totalAmountSelector } from '../../store/cart';
import { CartItem, Divider, Form } from '../../components';
import styles from './Order.module.css';
import { DeliveryEnum, deliveryReducer } from './delivery.reducer';

const initialState = { name: 'Доставка по России', price: 350 }

export const Order = (): JSX.Element => {

  const cartItems = useAppSelector(cartItemsSelector);
  const totalCartPrice = useAppSelector(totalAmountSelector);

  const [delivery, dispatch] = useReducer(deliveryReducer, initialState);

  const handleDeliveryChange = (newDelivery: DeliveryEnum) => {
    dispatch({ type: newDelivery });
  };

  return (
    <div className={styles.order}>

      <Form className={styles.form} onDeliveryChange={handleDeliveryChange} data-test-id='form' />

      <div className={styles.cart} data-test-id='items'>
        <ul className={styles.items} data-test-id='cart-items-list'>
          {cartItems.map(item => (
            <li key={v1()} data-test-id='cart-item'>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <Divider />
        <div className={styles.amount} data-test-id='total'>
          <Typography.Text tag='div' view='primary-small' className={styles.price}>
            Subtotal: <Amount value={totalCartPrice} minority={0} currency='RUB' bold='none' />
          </Typography.Text>
          <Typography.Text tag='div' view='primary-small' className={styles.price}>
            {delivery.name}: <Amount value={delivery.price} minority={0} currency='RUB' bold='none' />
          </Typography.Text>
          <Typography.Text weight='bold' tag='div' view='primary-large' className={styles.total}>
            Total: <Amount value={totalCartPrice + delivery.price} minority={0} currency='RUB' bold='full' />
          </Typography.Text>
        </div>
      </div>

    </div>
  );
};


export const OrderPanel = (
  { onAddonClick, ...props }: ModalResponsiveProps & { onAddonClick?: () => void }
): JSX.Element => {

  const handleAddonClick = () => onAddonClick && onAddonClick();

  return (
    <ModalResponsive fullscreen {...props}>
      <ModalResponsive.Header
        hasCloser
        title='Ваш заказ'
        align='center'
        leftAddons={<ArrowBackMIcon onClick={handleAddonClick} className={styles.backArrow} />}
        contentClassName={styles.header}
      />
      <ModalResponsive.Content>
        <Order />
      </ModalResponsive.Content>
    </ModalResponsive>
  );
};

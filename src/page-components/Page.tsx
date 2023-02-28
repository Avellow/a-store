import { Layout } from "../layout";
import { PageProps } from "./Page.props";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./Page.module.css";
import cn from 'classnames';
import { CartButton } from '../components';
import { SideCart } from '../components';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../store';
import { isCartHasItemsSelector, itemsQuantitySelector } from '../store/cart';
import { OrderPanel } from './Order/Order';

const Page = ({
  children,
  title,
  subtitle,
  className,
  isBasketButtonVisible = true,
  ...restProps
}: PageProps): JSX.Element => {

  const isCartHasItems = useAppSelector(isCartHasItemsSelector);
  const itemsQuantity = useAppSelector(itemsQuantitySelector);

  const [isSideCartOpened, setIsSideCartOpened] = useState<boolean>(false);
  const [isOrderOpened, setIsOrderOpened] = useState<boolean>(false);

  useEffect(() => {
    // закрывает модалки если корзина пуста
    if ((isSideCartOpened || isOrderOpened) && !isCartHasItems) {
      handleCloseSideCart();
      handleCloseOrder();
    }
  }, [isSideCartOpened, isCartHasItems, isOrderOpened]);

  const handleOpenSideCart = () => setIsSideCartOpened(true);
  const handleCloseSideCart = () => setIsSideCartOpened(false);
  const handleCloseOrder = () => setIsOrderOpened(false);
  const handleOpenOrder = () => setIsOrderOpened(true);

  const handleForwardSideCartClick = () => {
    handleOpenOrder();
    handleCloseSideCart();
  };

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body className={cn(className, styles.page)} {...restProps}>
        {
          title && (
            <Typography.Title
              tag="h2"
              view='xlarge'
              weight='bold'
              font='styrene'
              color='primary'
              className={styles.pageTitle}
              data-testid='page-title'
            >
              {title}
            </Typography.Title>
          )
        }

        {
          subtitle && (
            <Typography.Title
              tag='div'
              view='xsmall'
              color='primary'
              className={styles.pageSubtitle}
              data-testid='page-subtitle'
            >
              {subtitle}
            </Typography.Title>
          )
        }

        {children}

        {isBasketButtonVisible && isCartHasItems && (
          <CartButton
            goodsQuantity={itemsQuantity}
            className={styles.cartButton}
            onClick={handleOpenSideCart}
          />
        )}

        <SideCart
          open={isSideCartOpened}
          onClose={handleCloseSideCart}
          onForwardClick={handleForwardSideCartClick}
        />

        <OrderPanel
          open={isOrderOpened}
          onClose={handleCloseOrder}
          onAddonClick={handleCloseOrder}
        />

      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Page;

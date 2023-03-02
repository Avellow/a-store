import { Amount } from '@alfalab/core-components/amount';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/astore';
import { Gallery, ProductSkeleton } from '../../components';
import { CartItemType, CartItemOptionsType, ProductType } from '../../types/api';
import { NotFound } from '../NotFound/NotFound';
import Page from '../Page';
import styles from './Product.module.css';
import { ConfigForm } from '../../components/';
import { formDescription } from '../../vendor/constants';
import { ProductConfigOptionsType } from '../../components/ConfigForm/ConfigForm.props';
import { notificationsActions } from '../../store/notifications';
import { useAppDispatch } from '../../store';
import { cartActions } from '../../store/cart';

export const Product = (): JSX.Element => {

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getProduct(Number(id))
      .then(card => {
        card && setProduct(card);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        dispatch(notificationsActions.error(
          { title: `Ошибка при загрузке товара ${e.message}` }
        ));
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Page data-test-id='product-page-loading'>
        <ProductSkeleton />
      </Page>
    );
  };

  if (!product) {
    return (
      <NotFound />
    );
  };

  const productOptions: ProductConfigOptionsType = {
    sizes: product.sizes,
    colors: product.colors,
    models: product.models,
    stickerNumbers: product.stickerNumbers
  };

  const handleAddProduct = (options: CartItemOptionsType) => {

    const item: CartItemType = {
      title: product.title,
      price: product.price,
      imageURL: product.preview,
      quantity: 1,
      options,
    };

    dispatch(cartActions.addItem(item));
  };

  return (
    <Page className={styles.container} data-test-id='product-page'>
      <div className={styles.section}>
        <Gallery
          dataTestId='gallery'
          images={product.images || []}
          initialImage={product.preview}
        />
      </div>
      <div className={styles.section} data-test-id='description'>
        <Typography.TitleResponsive
          tag='h3'
          view='small'
          font='styrene'
          color='primary'
          className={styles.title}
        >
          {product.title}
        </Typography.TitleResponsive>
        <Typography.Title
          tag='div'
          view='medium'
          font='styrene'
          weight='bold'
          color='primary'
        >
          <Amount
            value={product.price}
            minority={0}
            currency='RUB'
          />
        </Typography.Title>
        <ConfigForm
          productOptions={productOptions}
          onConfirm={handleAddProduct}
        />
        <Typography.Text weight='bold' view='primary-small' className={styles.description} tag='p'>
          {formDescription(product.description)}
        </Typography.Text>
      </div>
    </Page>
  );
};

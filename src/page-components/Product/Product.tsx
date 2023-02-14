import { Amount } from '@alfalab/core-components/amount';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct, getCustomProduct } from '../../api/cards';
import { Gallery } from '../../components';
import { ProductType } from '../../types/api';
import { NotFound } from '../NotFound/NotFound';
import Page from '../Page'
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { ConfigForm } from '../../components/';
import { formDescription } from '../../vendor/constants';

export const Product = ({ type }: ProductProps): JSX.Element => {

  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ЗАГЛУШЕК
    if (type === 'alfa') {
      getProduct(Number(id)).then(card => card && setProduct(card));
    } else {
      getCustomProduct(Number(id)).then(card => card && setProduct(card));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return (
      <Page>
        <NotFound />
      </Page>
    );
  };

  const productOptions: Pick<ProductType, "sizes" | "colors" | "models" | "stickerNumbers"> = {
    sizes: product.sizes,
    colors: product.colors,
    models: product.models,
    stickerNumbers: product.stickerNumbers
  }

  return (
    <Page className={styles.container}>
      <div className={styles.section}>
        <Gallery
          images={product.images || []}
          initialImage={product.preview}
        />
      </div>
      <div className={styles.section}>
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
        />
        <Typography.Text weight='bold' view='primary-small' className={styles.description} tag='p'>
          {formDescription(product.description)}
        </Typography.Text>
      </div>
    </Page>
  );
};

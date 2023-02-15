import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct, getGroupProduct } from '../../api/cards';
import { Gallery } from '../../components';
import { ProductType } from '../../types/api';
import Page from '../Page'
import { ProductProps } from './Product.props';

export const Product = ({ type }: ProductProps): JSX.Element => {

  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ЗАГЛУШЕК
    if (type === 'alfa') {
      getProduct(Number(id)).then(card => card && setProduct(card));
    } else {
      getGroupProduct(Number(id)).then(card => card && setProduct(card));
    }
  }, []);

  return (
    <Page>
      {
        product ? (
          <>
            <Gallery
              images={product.images || []}
              initialImage={product.preview}
            />
            <div>{product.price}</div>
            <div>описание</div>
          </>
        ) : (
          <div>Продукт с таким id не найден</div>
        )
      }
    </Page>
  );
};

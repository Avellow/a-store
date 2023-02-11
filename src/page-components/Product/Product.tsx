import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getCard } from '../../api/cards';
import { ProductType } from '../../types/api';
import Page from '../Page'

export const Product = (): JSX.Element => {

  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    getCard(Number(id)).then(card => card && setProduct(card));
  }, []);


  if (!product) {
    return (
      <div>Товар с таким id не найден</div>
    )
  }

  return (
    <Page>
      <p>{product.id}</p>
      <div>{product.price}</div>
      <div>описание</div>
    </Page>
  );
};

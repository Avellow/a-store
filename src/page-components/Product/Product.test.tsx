import { screen, configure, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Router from "react-router-dom";

import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider';
import * as Api from '../../api/astore';
import { ProductType } from '../../types/api';

configure({ testIdAttribute: 'data-test-id' });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

jest.mock('axios');

const mockedUseParams = jest.spyOn(Router, 'useParams');
const mockedGetProduct = jest.spyOn(Api, 'getProduct');
const pageRoute = '/made-in-alfa/5'
const renderPage = () => renderWithRouterAndProvider(null, pageRoute);

const product = Promise.resolve({
  "id": 5,
  "preview": "http://qa-games.ru/astore/public/images/43306375.jpeg",
  "images": [
    "http://qa-games.ru/astore/public/images/43306375.jpeg",
    "http://qa-games.ru/astore/public/images/25133982.png",
    "http://qa-games.ru/astore/public/images/93661622.png",
    "http://qa-games.ru/astore/public/images/1_3d.png",
    "http://qa-games.ru/astore/public/images/2_3d.png",
    "http://qa-games.ru/astore/public/images/45157942.png",
    "http://qa-games.ru/astore/public/images/Frame_118.png"
  ],
  "title": "Худи с бархатными стикерами",
  "subtitle": "Выберите один из восьми стикеров",
  "price": 4199,
  "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
  "colors": ["white", "black", "red"],
  "sizes": ["XS", "S", "M", "L", "XL"],
  "stickerNumbers": [1, 2, 3, 4, 5, 6, 7, 8],
  "availability": true
} as ProductType)

describe('Product page', () => {

  beforeEach(() => {
    mockedGetProduct.mockReturnValue(product);
    mockedUseParams.mockReturnValue({ id: '5' });
  })

  it('should be rendered correctly', async () => {
    renderPage();
    const page = await screen.findByTestId('product-page');
    expect(page).toBeInTheDocument();
  });

  it('should call `get product` when mounted', async () => {
    renderPage();
    await waitFor(() => expect(mockedGetProduct).toHaveBeenCalled());
  });

  it('should show gallery and description if product was found', async () => {
    renderPage();
    const gallery = await screen.findByTestId('gallery');
    const description = await screen.findByTestId('description');

    expect(gallery).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should show `not found page` if product not found', async () => {
    mockedGetProduct.mockReturnValue(Promise.resolve(undefined));
    renderPage();

    const notFoundPage = await screen.findByTestId('not-found-page');
    expect(notFoundPage).toBeInTheDocument();
  })
})
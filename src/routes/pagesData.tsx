import { routerType } from "./router.types";
import {
  Contacts,
  Home,
  MadeInAlfa,
  NotFound,
  YourDesignPage,
  Product
} from "../page-components";

export const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home'
  },
  {
    path: 'made-in-alfa',
    element: <MadeInAlfa />,
    title: 'madeInAlfa',
    linkTitle: 'Сделано в Альфе'
  },
  {
    path: 'made-in-alfa/:id',
    element: <Product />,
    title: 'madeInAlfaProduct',
  },
  {
    path: 'your-design',
    element: <YourDesignPage />,
    title: 'yourDesign',
    linkTitle: 'Свой дизайн',
  },
  {
    path: 'your-design/:id',
    element: <Product />,
    title: 'yourDesignProduct',
  },
  {
    path: 'contacts',
    element: <Contacts />,
    title: 'contacts',
    linkTitle: 'Контакты'
  },
  {
    path: '*',
    element: <NotFound />,
    title: 'notFound'
  },
]

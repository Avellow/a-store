import {routerType} from "./router.types";
import {Basket, Contacts, Home, MadeInAlfa, NotFound, YourDesign} from "../page-components";

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
        linkTitle: 'Сделано в альфе'
    },
    {
        path: 'your-design',
        element: <YourDesign />,
        title: 'yourDesign',
        linkTitle: 'Свой дизайн'
    },
    {
        path: 'contacts',
        element: <Contacts />,
        title: 'contacts',
        linkTitle: 'Контакты'
    },
    {
        path: 'basket',
        element: <Basket />,
        title: 'basket'
    },
    {
        path: '*',
        element: <NotFound />,
        title: 'notFound'
    },
]


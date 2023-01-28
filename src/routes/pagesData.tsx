import {routerType} from "./router.types";
import {Basket, Contacts, MadeInAlfa, NotFound, YourDesign} from "../page-components";

export const pagesData: routerType[] = [
    {
        path: '',
        element: <MadeInAlfa />,
        title: 'home'
    },
    {
        path: 'made-in-alfa',
        element: <MadeInAlfa />,
        title: 'madeInAlfa'
    },
    {
        path: 'your-design',
        element: <YourDesign />,
        title: 'yourDesign'
    },
    {
        path: 'contacts',
        element: <Contacts />,
        title: 'contacts'
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


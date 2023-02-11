import { useParams } from 'react-router-dom'
import Page from '../Page'

export const Product = (): JSX.Element => {

    const { id } = useParams();

    return (
        <Page>
            <p>{id}</p>
            <div>галерея</div>
            <div>описание</div>
        </Page>
    );
};

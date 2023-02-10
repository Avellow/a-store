import { Grid } from '@alfalab/core-components/grid';
import styles from './Home.module.css';
import {ImgBlockLink} from "../../components";
import {leftImageUrl, rightImageUrl} from "../../vendor/constants";
import { Layout } from "../../layout";

export const Home = (): JSX.Element => {
    return (
        <Layout>
            <Layout.Header />
            <Layout.Body className={styles.blocks}>
                <Grid.Row gutter={0} className={styles.row}>
                    <Grid.Col width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                        <ImgBlockLink
                            title='Сделано в Альфе'
                            imgUrl={leftImageUrl}
                            to='/made-in-alfa'
                            data-testid='made-in-alfa-block-link'
                        />
                    </Grid.Col>
                    <Grid.Col width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                        <ImgBlockLink
                            title='Свой дизайн'
                            imgUrl={rightImageUrl}
                            to='/your-design'
                            data-testid='your-design-block-link'
                        />
                    </Grid.Col>
                </Grid.Row>
            </Layout.Body>
            <Layout.Footer />
        </Layout>
    );
};

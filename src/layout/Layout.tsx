import styles from './Layout.module.css';
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {LayoutProps} from "./Layout.props";
import {FunctionComponent} from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <main className={styles.body}>
                { children }
            </main>
            <Footer className={styles.footer} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

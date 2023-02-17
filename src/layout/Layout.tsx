import styles from './Layout.module.css';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { BodyProps, LayoutProps } from "./Layout.props";
import cn from "classnames";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

const LayoutHeader = (): JSX.Element => (
  <Header className={styles.header} />
);

const LayoutBody = ({ children, className, ...restProps }: BodyProps): JSX.Element => (
  <main className={cn(className, styles.body)} {...restProps}>
    {children}
  </main>
);

const LayoutFooter = (): JSX.Element => (
  <Footer className={styles.footer} />
);

Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Footer = LayoutFooter;

export { Layout };

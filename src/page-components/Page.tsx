import { Layout } from "../layout";
import { PageProps } from "./Page.props";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./Page.module.css";
import cn from 'classnames';
import { CartButton } from '../components';

const Page = ({
  children,
  title,
  subtitle,
  className,
  isBasketButtonVisible = true,
  ...restProps
}: PageProps): JSX.Element => {

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body className={cn(className, styles.page)} {...restProps}>
        {
          title && (
            <Typography.Title
              tag="h2"
              view='xlarge'
              weight='bold'
              font='styrene'
              color='primary'
              className={styles.pageTitle}
              dataTestId='page-title'
            >
              {title}
            </Typography.Title>
          )
        }

        {
          subtitle && (
            <Typography.Title
              tag='div'
              view='xsmall'
              color='primary'
              className={styles.pageSubtitle}
            >
              {subtitle}
            </Typography.Title>
          )
        }

        {children}

        {isBasketButtonVisible && (
          <CartButton goodsQuantity={1} className={styles.cartButton} />
        )}
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Page;

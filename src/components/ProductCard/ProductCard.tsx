import styles from './ProductCard.module.css';
import { ProductProps } from './ProductCard.props';
import { Amount } from '@alfalab/core-components/amount';
import { Typography } from "@alfalab/core-components/typography";

export const ProductCard = ({
    title,
    id,
    availability,
    preview,
    price
}: ProductProps): JSX.Element => {
    return (
        <div className={styles.product} data-testid='made-in-alfa-product'>
            <div className={styles.imgWrapper}>
                <img
                    className={styles.img}
                    src={preview}
                    alt={title}
                />
            </div>

            <Typography.TitleResponsive
                view='xsmall'
                tag='div'
                weight='bold'
                className={styles.title}
            >
                {title}
            </Typography.TitleResponsive>

            <Typography.TitleResponsive view='small' tag='div'>
                <Amount
                    value={price}
                    currency='RUB'
                    minority={0}
                />
            </Typography.TitleResponsive>
        </div>
    );
};

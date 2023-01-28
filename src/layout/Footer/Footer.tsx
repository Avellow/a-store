import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { Typography } from '@alfalab/core-components/typography';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)}>
            <Typography.Text className={styles.rights} weight='medium' view='primary-small'>
                &copy; ООО "Альфа Фьюче Пипл", {format(new Date(), 'yyyy')}
            </Typography.Text>
        </footer>
    );
};

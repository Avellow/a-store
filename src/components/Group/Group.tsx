import { GroupProps } from "./Group.props";
import { Typography } from "@alfalab/core-components/typography";
import styles from './Group.module.css';
import { CardsContainer } from '../CardsContainer/CardsContainer';
import cn from 'classnames';
import { makeLineBreaks } from '../../vendor/constants';

export const Group = ({ group, className, ...restProps }: GroupProps): JSX.Element => {

  const { title, description, products } = group;

  return (
    <div className={cn(className, styles.group)} {...restProps}>
      <Typography.TitleResponsive
        tag='h3'
        weight='bold'
        view='xlarge'
        className={styles.title}
      >
        {makeLineBreaks(title)}
      </Typography.TitleResponsive>
      <Typography.Text
        tag='p'
        weight='bold'
        view='primary-large'
        className={styles.subtitle}
      >
        {description}
      </Typography.Text>
      <CardsContainer cards={products} />
    </div>
  );
};

import { Skeleton } from '@alfalab/core-components/skeleton';
import styles from './ProductSkeleton.module.css';

export const ProductSkeleton = (): JSX.Element => {
  return (
    <div className={styles.product}>
      <Skeleton animate={true} visible={true} className={styles.gallery}>галлерея</Skeleton>
      <div className={styles.info}>
        <Skeleton animate={true} visible={true} className={styles.item}>название</Skeleton>
        <Skeleton animate={true} visible={true} className={styles.item}>цена</Skeleton>
        <Skeleton animate={true} visible={true} className={styles.item}>конфиг</Skeleton>
        <Skeleton animate={true} visible={true} className={styles.item}>описание</Skeleton>
      </div>
    </div>
  );
};

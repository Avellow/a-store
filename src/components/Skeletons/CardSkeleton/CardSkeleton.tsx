import { Skeleton } from '@alfalab/core-components/skeleton';
import styles from './CardSkeleton.module.css';

export const CardSkeleton = (): JSX.Element => {

  return (
    <div className={styles.skeleton} data-testid='card-skeleton'>
      <Skeleton animate={true} visible={true}>
        <div className={styles.imgWrapper} />
      </Skeleton>
      <Skeleton animate={true} visible={true}>
        <div className={styles.title}>название</div>
      </Skeleton>
      <Skeleton animate={true} visible={true}>
        <div>цена</div>
      </Skeleton>
    </div>
  );
};

export const CardSkeletons = ({ amount = 3 }: { amount?: number }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {
        Array(amount).fill('').map((_, i) => (
          <li key={i} className={styles.item}><CardSkeleton /></li>
        ))}
    </ul>
  )
}
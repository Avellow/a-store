import { Typography } from '@alfalab/core-components/typography';
import cn from 'classnames';

import { policyChapters } from '../../vendor/policyText';
import styles from './PolicyText.module.css';

export const PolicyText = (): JSX.Element => {
  return (
    <ol className={styles.chapters}>
      {
        policyChapters.map(({ title, rules, description }, i) => (
          <li key={i} className={styles.chapter}>
            <Typography.TitleResponsive tag='div' view='small' defaultMargins weight='bold'>
              {title}
            </Typography.TitleResponsive>
            {
              description && (
                <Typography.Text tag='div' view='primary-small' className={cn(styles.text, styles.description)}>
                  {description}
                </Typography.Text>
              )
            }
            <ol className={styles.rules}>
              {rules.map((rule, j) => (
                <li key={j} className={styles.rule}>
                  <Typography.Text view='primary-small' className={styles.text}>{rule}</Typography.Text>
                </li>
              ))}
            </ol>
          </li>
        ))
      }
    </ol>
  );
};

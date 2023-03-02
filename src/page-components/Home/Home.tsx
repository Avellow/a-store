import styles from './Home.module.css';
import { ImgBlockLink } from "../../components";
import { leftImageUrl, rightImageUrl } from "../../vendor/constants";
import Page from '../Page';

export const Home = (): JSX.Element => {
  return (
    <Page className={styles.blocks}>
      <ImgBlockLink
        title='Сделано в Альфе'
        imgUrl={leftImageUrl}
        to='/made-in-alfa'
        data-testid='made-in-alfa-block-link'
      />
      <ImgBlockLink
        title='Свой дизайн'
        imgUrl={rightImageUrl}
        to='/your-design'
        data-testid='your-design-block-link'
      />
    </Page>
  );
};

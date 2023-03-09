import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { ArrowBackMIcon } from '@alfalab/icons-glyph/ArrowBackMIcon';

import { OrderPanelProps } from './OrderPanel.props';
import styles from './OrderPanel.module.css';
import { Order } from '../../page-components';

export const OrderPanel = ({ onAddonClick, ...props }: OrderPanelProps): JSX.Element => {

  const handleAddonClick = () => onAddonClick && onAddonClick();

  return (
    <ModalResponsive fullscreen {...props}>
      <ModalResponsive.Header
        hasCloser
        title='Ваш заказ'
        align='center'
        leftAddons={<ArrowBackMIcon onClick={handleAddonClick} className={styles.backArrow} />}
        contentClassName={styles.header}
      />
      <ModalResponsive.Content>
        <Order />
      </ModalResponsive.Content>
    </ModalResponsive>
  );
};
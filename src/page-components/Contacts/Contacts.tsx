import { Fragment, useState } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { YMaps, Map, Placemark, ZoomControl, TypeSelector } from '@pbe/react-yandex-maps';
import cn from 'classnames';

import Page from "../Page";
import styles from './Contacts.module.css';
import { openingHours, paymentTypesInfo, policyTitle, storeAddress, storeEmail, storePhone, ymapStoreCoords } from '../../vendor/constants';
import { Button } from '@alfalab/core-components/button';
import { PolicyText } from '../../components/PolicyText/PolicyText';

export const Contacts = (): JSX.Element => {

  const [isModalWithPolicyOpened, setIsModalWithPolicyOpened] = useState(false);

  const handleModalOpened = () => setIsModalWithPolicyOpened(!isModalWithPolicyOpened);

  const defaultMapState: ymaps.IMapState = {
    center: ymapStoreCoords,
    zoom: 15,
    controls: []
  };

  return (
    <Page title='Контакты' className={styles.contacts}>
      <Typography.Text tag='div' className={cn(styles.text, styles.firstContact)} color='primary'>
        {storePhone}
      </Typography.Text>

      <Typography.Text tag='div' className={cn(styles.text, styles.margin)} color='primary'>
        {storeEmail}
      </Typography.Text>

      <Typography.Text tag='div' className={cn(styles.text, styles.margin)} color='primary'>
        {storeAddress}
      </Typography.Text>

      <div className={styles.margin}>
        {
          openingHours.map(({ day, time: [start, end] }, i) => (
            <Fragment key={i}>
              <Typography.Text tag='div' className={cn(styles.text, styles.day)} color='primary'>
                {day}:
              </Typography.Text>
              <Typography.Text tag='div' className={styles.text} color='primary'>
                {start}&mdash;{end}
              </Typography.Text>
            </Fragment>
          ))
        }
      </div>

      <Typography.Text tag='div' className={cn(styles.text, styles.margin)} color='primary'>
        {paymentTypesInfo}
      </Typography.Text>

      <Typography.Text
        tag='div'
        view='primary-small'
        className={cn(styles.text, styles.policy, styles.margin)}
        color='primary'
        onClick={handleModalOpened}
      >
        {policyTitle}
      </Typography.Text>

      <YMaps>
        <Map defaultState={defaultMapState} className={styles.ymap}>
          <Placemark geometry={ymapStoreCoords} />
          <ZoomControl options={{ position: { left: 20, top: 50 } }} />
          <TypeSelector />
        </Map>
      </YMaps>

      <ModalResponsive open={isModalWithPolicyOpened} onClose={handleModalOpened} hasCloser fullscreen>
        <ModalResponsive.Header>
          Политика в отношении обработки персональных данных
        </ModalResponsive.Header>
        <ModalResponsive.Content>
          <PolicyText />
          <Button onClick={handleModalOpened} view='primary'>Понятно</Button>
        </ModalResponsive.Content>
      </ModalResponsive>
    </Page>
  );
};

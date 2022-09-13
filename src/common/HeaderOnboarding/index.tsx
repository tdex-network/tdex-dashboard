import Icon from '@ant-design/icons';
import { Button, Col, Layout, Row } from 'antd';
import { useEffect, useState, useCallback } from 'react';

import './headerOnboarding.less';
import { ReactComponent as threeDots } from '../../assets/images/three-dots.svg';
import { UserMenu } from '../UserMenu';

export const HeaderOnboarding = (): JSX.Element => {
  const { Header } = Layout;
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const closeUserMenu = () => setIsUserMenuVisible(false);

  const toggleUserMenu = useCallback(
    () => (isUserMenuVisible ? setIsUserMenuVisible(false) : setIsUserMenuVisible(true)),
    [isUserMenuVisible]
  );

  useEffect(() => {
    document.addEventListener('click', (e) => {
      // @ts-ignore
      if (e.target.classList.contains('user-menu-btn')) {
        toggleUserMenu();
      } else {
        // Close menu if click anywhere expect radio buttons
        if (
          // @ts-ignore
          !e.target.classList.contains('ant-radio-button-wrapper') &&
          // @ts-ignore
          !e.target.parentElement?.classList.contains('ant-radio-button-wrapper') &&
          // @ts-ignore
          !e.target.classList.contains('ant-radio-button-input')
        ) {
          closeUserMenu();
        }
      }
    });
  }, [toggleUserMenu]);

  return (
    <Header className="h-100 mt-8">
      <Row>
        <Col span={24} className="d-flex justify-end">
          <Button
            className="user-menu-btn d-flex"
            shape="circle"
            icon={<Icon component={threeDots} className="user-menu-btn-svg" />}
          />
          <UserMenu isUserMenuVisible={isUserMenuVisible} isConnectionPage={true} />
        </Col>
      </Row>
    </Header>
  );
};

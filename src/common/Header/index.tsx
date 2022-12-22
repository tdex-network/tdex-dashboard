import './header.less';

import Icon, { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Grid, Layout, Row, Space } from 'antd';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/tdex-logo.svg';
import { ReactComponent as threeDots } from '../../assets/images/three-dots.svg';
import { CREATE_MARKET_ROUTE, HOME_ROUTE } from '../../routes/constants';
import { UserMenu } from '../UserMenu';

const { useBreakpoint } = Grid;

export const Header = (): JSX.Element => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const closeUserMenu = () => setIsUserMenuVisible(false);
  const screens = useBreakpoint();

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
        <Col span={12}>
          <Link to={HOME_ROUTE}>
            <img src={logo} alt="logo" style={{ height: '65px' }} />
          </Link>
        </Col>
        <Col span={12} className="d-flex justify-end">
          <Space align="center">
            <Button
              className={classNames({ 'd-none': screens.xs, 'd-flex': !screens.xs })}
              icon={<PlusCircleOutlined />}
              onClick={() => navigate(CREATE_MARKET_ROUTE)}
            >
              CREATE NEW MARKET
            </Button>
            <Button
              className="user-menu-btn d-flex"
              shape="circle"
              icon={<Icon component={threeDots} className="user-menu-btn-svg" />}
            />
            <UserMenu isUserMenuVisible={isUserMenuVisible} />
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

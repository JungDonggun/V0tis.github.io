import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const HeaderContainer: React.FunctionComponent = () => {
  return (
      <Header style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }}>
        <Typography>
          <Title>PROJECT NAME</Title>
        </Typography>
      </Header>
  );
};

export default HeaderContainer;

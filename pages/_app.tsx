import { AppProps } from 'next/app';
import '../styles/antd.less';
import '../styles/globals.css';
import HeaderContainer from '../containers/Header/HeaderContainer';
import styled from '@emotion/styled';
import { Layout } from 'antd';

const { Content } = Layout;

const Container = styled.div(() => ({
  height: '100%',
}));

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Container>
        {/*<HeaderContainer/>*/}
        <Content>
          <Component {...pageProps} />
        </Content>
      </Container>
  );
}

export default MyApp;

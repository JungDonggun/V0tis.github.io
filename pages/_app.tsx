import { AppProps } from 'next/app';
import '../styles/antd.less';
import '../styles/globals.css';
import styled from '@emotion/styled';

const Container = styled.div(() => ({
  height: '100%',
}));

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Component {...pageProps} />
      </Container>
  );
}

export default MyApp;

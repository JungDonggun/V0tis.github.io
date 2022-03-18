import { AppProps } from 'next/app';
import '../styles/antd.less';
import '../styles/globals.css';
import styled from '@emotion/styled';
import { RecoilRoot } from "recoil";

const Container = styled.div(() => ({
  height: '100%',
}));

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Container>
  );
}

export default MyApp;

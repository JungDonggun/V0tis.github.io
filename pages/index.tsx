import React from 'react';
import { useRouter } from "next/router";

const IndexPage: React.FunctionComponent = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/introduce');
  }, []);

  return (<></>);
};

export default IndexPage;

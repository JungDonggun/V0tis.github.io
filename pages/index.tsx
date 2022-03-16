import React from 'react';
import UIJumbotron from "../components/UI/UIJumbotron";
import omenImage from '../public/images/omen_bg.jpeg';

const IndexPage: React.FunctionComponent = () => {
  return (
      <div>
        <UIJumbotron image={omenImage} width={'100%'} height={'auto'}>
          <div>
            ㅁㄴㅇㄹ
          </div>
        </UIJumbotron>
      </div>
  );
};

export default IndexPage;

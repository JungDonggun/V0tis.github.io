import React from 'react';
import About from "../../../about/About";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const SecondPhaseIntroduceContent: React.FunctionComponent = () => {
  return (
      <ScrollMenu>
        <About/>
        {/*<Portfolio/>*/}
        {/*<Career/>*/}
      </ScrollMenu>
  );
};

export default SecondPhaseIntroduceContent;

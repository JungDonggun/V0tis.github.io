import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Portfolio from "../../../portfolio/Portfolio";
import { useRecoilState } from "recoil";
import About from "../../../about/About";
import Career from "../../../career/Career";
import { introduceListState } from "../../../../recoil/introduce/introduceState";

const SecondPhaseIntroduceContent: React.FunctionComponent = () => {
  const [ introduce, setIntroduce ] = useRecoilState(introduceListState);
  
  const introduceSelector = React.useCallback((role: ROLES) => {
    if (role === 'ROLE_001') {
      return <About/>;
    } else if (role === 'ROLE_002') {
      return <Portfolio/>;
    } else if (role === 'ROLE_003') {
      return <Career/>;
    } else if (role === 'ROLE_004') {

    }
  }, []);

  return (
      <ScrollMenu>
        {
          introduce.map(({ role }) => introduceSelector(role))
        }
      </ScrollMenu>
  );
};

export default SecondPhaseIntroduceContent;

import React from 'react';
import { COLORS } from "../../common/colors";
import { Col } from "antd";

const BlueLineBar: React.FunctionComponent = () => {
  return (
      <Col sm={1} style={{ backgroundColor: COLORS.deepBlue2 }}/>
  );
};

export default BlueLineBar;

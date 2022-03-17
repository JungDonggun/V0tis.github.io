import React from 'react';

interface Props {
  text: string;
}

const UILabel: React.FunctionComponent<Props> = ({ text }) => {
  return (
      <h1 style={{ color: 'red' }}>{text}</h1>
  );
};

export default UILabel;

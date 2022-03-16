import React from 'react';
import { render } from '@testing-library/react';
import UIPositionCenter from '../components/UI/UIPositionCenter';

it('should render uiPositionCenter', () => {
  render(<UIPositionCenter>
    <div>
      <h2>test</h2>
    </div>
  </UIPositionCenter>);
});


/**
 * Testing our Animation panel component
 */
import React from 'react';
import { shallow } from 'enzyme';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import AnimationPanel from '../AnimationPanel';

const renderComponent = (props = {}) => shallow(
  <BootstrapProvider>
    <AnimationPanel {...props} />
  </BootstrapProvider>
);

describe('<AnimationPanel />', () => {
  it('should render <AnimationPanel />', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import BounceRight from '../BounceRight';
import theme from '../../theme';

const renderComponent = (EffectComponent = BounceRight, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('BounceRight', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render BounceRight', () => {
    const renderedComponent = renderComponent(BounceRight, { children });
    expect(renderedComponent.length).toBe(1);
  });
});

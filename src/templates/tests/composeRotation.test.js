/**
 * Testing our composeRotation HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import composeRotation from '../composeRotation';
import composeAnimation from '../composeAnimation';

describe('composeRotation', () => {
  const makeEffect = () => { // eslint-disable-line arrow-body-style
    return {
      from: {
        width: '0',
      },
      to: {
        width: '100%',
      },
    };
  };
  let RotationAnimation;
  beforeAll(() => {
    RotationAnimation = composeRotation(composeAnimation(makeEffect), '$motion-rotate-in-rotation');
  });

  it('should render an <RotationAnimation /> with user distance', () => {
    const renderedComponent = mount(
      <ThemeProvider theme={theme}>
        <RotationAnimation rotation="10deg">Test</RotationAnimation>
      </ThemeProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <RotationAnimation /> with theme distance', () => {
    const renderedComponent = mount(
      <ThemeProvider theme={theme}>
        <RotationAnimation>Test</RotationAnimation>
      </ThemeProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });
});

/**
 * Testing our composePerspective HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import composePerspective from '../composePerspective';
import composeAnimation from '../composeAnimation';

describe('composePerspective', () => {
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
  let PerspectiveAnimation;
  beforeAll(() => {
    PerspectiveAnimation = composePerspective(composeAnimation(makeEffect), '$motion-rotate-in-rotation');
  });

  it('should render an <PerspectiveAnimation /> with user distance', () => {
    const renderedComponent = mount(
      <ThemeProvider theme={theme}>
        <PerspectiveAnimation perspective="10px">Test</PerspectiveAnimation>
      </ThemeProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <DistanceAnimation /> with theme distance', () => {
    const renderedComponent = mount(
      <ThemeProvider theme={theme}>
        <PerspectiveAnimation rotation="10deg">Test</PerspectiveAnimation>
      </ThemeProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });
});

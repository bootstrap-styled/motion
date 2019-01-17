import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, css } from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { fromJS } from 'immutable';
import mapToCssModules from 'map-to-css-modules';
import { TYPE_ROTATE } from '../typeEnums';
import makeKeyframe from '../makeKeyframe';

/* eslint-disable react/destructuring-assignment, prefer-destructuring */
/**
 * @public
 * @name composeAnimation
 * @descriptiton This is a HoC that will compose a motioncomponent
 * @param makeAnimation {function} - a make keyframe function
 * @return {Component} - the new Motion component
 */
export default function composeAnimation(makeAnimation) {
  // eslint-disable-next-line react/prefer-stateless-function
  class HOC extends React.Component {
    static defaultProps = {
      inline: true,
    };

    /* eslint-disable react/no-unused-prop-types, react/require-default-props */
    static propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
      theme: PropTypes.object.isRequired,
      inlineBlock: PropTypes.bool,
      inline: PropTypes.bool,
      duration: PropTypes.string,
      timingFunction: PropTypes.string,
      delay: PropTypes.string,
      direction: PropTypes.string,
      iterations: PropTypes.string,
      fillMode: PropTypes.string,
      playState: PropTypes.string,

      keyframes: PropTypes.object,

      distance: PropTypes.string,
      degree: PropTypes.string,
      perspective: PropTypes.string,
      backfaceVisibility: PropTypes.string,

      amplification: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    };
    /* eslint-enable react/no-unused-prop-types, react/require-default-props */

    state = {
      defaults: {},
      styles: null,
    };

    makeAnimation = makeAnimation;

    componentWillMount = () => {
      this.updateDefaultsFromTheme(this.updateAnimationStyles);
    }

    componentWillReceiveProps(newProps) {
      if (fromJS(newProps.theme).hashCode() !== fromJS(this.props.theme).hashCode()) {
        this.updateDefaultsFromTheme(this.updateAnimationStyles);
      } else {
        this.updateAnimationStyles();
      }
    }

    updateDefaultsFromTheme = (cb) => {
      const { theme } = this.props;
      /* eslint-disable dot-notation */
      this.setState({
        defaults: {
          duration: theme.motion['$motion-duration']['md'],
          timingFunction: theme.motion['$motion-timing-function']['ease'],
          delay: theme.motion['$motion-delay']['xs'],
          direction: theme.motion['$motion-direction']['normal'],
          iterations: theme.motion['$motion-iterations']['xs'],
          fillMode: theme.motion['$motion-fill-mode']['none'],
          playState: theme.motion['$motion-play-state']['running'],
          distance: theme.motion['$motion-distance']['md'],
          rotation: theme.motion['$motion-degree']['md'],
          perspective: theme.motion['$motion-perspective']['xs'],
          backfaceVisibility: theme.motion['$motion-backface-visibility']['hidden'],
          amplification: theme.motion['$motion-amplification']['md'],
        },
      }, cb);
      /* eslint-enable dot-notation */
    }

    updateAnimationStyles = () => {
      const props = this.props;
      const defaults = this.state.defaults;

      const duration = props.duration || defaults.duration;
      const timingFunction = props.timingFunction || defaults.timingFunction;
      const delay = props.delay || defaults.delay;
      const direction = props.direction || defaults.direction;
      const iterations = props.iterations || defaults.iterations;
      const fillMode = props.fillMode || defaults.fillMode;
      const playState = props.playState || defaults.playState;

      const distance = props.distance || defaults.distance;

      const rotation = props.degree || defaults.rotation;
      const perspective = props.perspective || defaults.perspective;

      const backfaceVisibility = props.backfaceVisibility || defaults.backfaceVisibility;

      const amplification = props.amplification || defaults.amplification;

      const keyframeName = makeKeyframe(this.makeAnimation, {
        distance, rotation, perspective, amplification,
      }, props.keyframes);

      let styles = css`
        animation: ${keyframeName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState};
      `;

      if (TYPE_ROTATE === this.makeAnimation.type) {
        styles = css`
          ${styles}
          backface-visibility: ${backfaceVisibility};
        `;
      }

      this.setState({
        styles,
      });
    }

    render() {
      const {
        className,
        children,
        inline,
        inlineBlock,
        cssModule,
        ...rest
      } = omit(this.props, [
        'theme',
        'duration',
        'timingFunction',
        'delay',
        'iterations',
        'direction',
        'fillMode',
        'playState',
        'keyframes',
        'distance',
        'degree',
        'perspective',
        'backfaceVisibility',
        'amplification',
        'rotation',
        'innerRef',
      ]);
      return (
        <span
          css={css`${this.state.styles}`}
          className={mapToCssModules(cn({
            'd-inline': inline,
            'd-inline-block': inlineBlock,
          }, className), cssModule)}
          {...rest}
        >
          {children}
        </span>
      );
    }
  }

  return withTheme(HOC);
}

/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * AnimationPanel.react.js
 *
 * Animation panel to try animations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';
import styled, { withTheme } from 'styled-components';

import Tooltip from '@bootstrap-styled/v4/lib/Tooltip';
import Collapse from '@bootstrap-styled/v4/lib/Collapse';
import Sub from '@bootstrap-styled/v4/lib/Sub';
import Code from '@bootstrap-styled/rsg-components/lib/Code';
import { Flash } from '../../../src';
import animationsConfig from './settings/animations';
import settingsImport from './settings/settings';
import { examplePanelAnimationWithTheme } from './demo';
import ControlPanelForm from './ControlPanelForm';
import SettingsForm from './SettingsForm';

const defaultAnimationList = [{
  name: 'Flash',
  props: {
    iterations: 'infinite',
  },
  tag: Flash,
}];

console.log('defaultAnimationList', defaultAnimationList);
export class AnimationPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static TAB_THEME_PROVIDER = 'theme-provider-tab';

  static propTypes = {
    className: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    theme: PropTypes.object.isRequired,
  }

  state = {
    selectedAnimationConfig: animationsConfig.flash,
    durationValue: '',
    settings: {},
    animationList: defaultAnimationList,
    isOpen: false,
    tooltipIsOpenList: {},
  }


  onSettingsChange = (settings) => {
    this.setState({
      settings,
    });
  }

  getAnimationProps() {
    const props = {};
    Object.keys(this.state.settings).forEach((key) => {
      props[_.camelCase(key.replace('$motion', ''))] = this.props.theme.motion[key][this.state.settings[key]];
    });
    return props;
  }

  defaultAnimationList = defaultAnimationList;

  handleChangeAnimation = (e) => {
    this.setState({
      selectedAnimationConfig: animationsConfig[e.target.value],
    });
  }

  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  clearAnimation = () => {
    this.setState({
      animationList: [],
      tooltipIsOpenList: {},
    });
  }

  addAnimation = () => {
    this.setState({
      animationList: [{
        tag: this.state.selectedAnimationConfig.tag,
        props: this.getAnimationProps(),
        name: this.state.selectedAnimationConfig.name,
      }].concat(this.state.animationList).reverse(),
    });
  }

  render() {
    const { className, theme, ...rest } = this.props; // eslint-disable-line
    const { selectedAnimationConfig } = this.state;

    /* eslint-disable array-callback-return, consistent-return, react/no-array-index-key */
    return (
      <div className={cn('panel-animation', 'p-1', className)} {...rest}>
        <div className="bd-example text-center" data-example-id="">
          <div className="animation-area py-5 cursor-help">
            {this.state.animationList.map((animation, i) => (
              <span key={`${animation.name}_${i}`}>
                <animation.tag {...animation.props} name={animation.name} id={`tooltip-${i}`}>
                  <span className="bd-booticon animation-item p-0 m-0">B<Sub>s</Sub></span>
                </animation.tag>
                {Object.keys(animation.props).length ? (
                  <Tooltip
                    placement="top center"
                    isOpen={this.state.tooltipIsOpenList[`tooltip-${i}`]}
                    target={`tooltip-${i}`}
                    toggle={() => this.setState({ tooltipIsOpenList: { [`tooltip-${i}`]: !this.state.tooltipIsOpenList[`tooltip-${i}`] } })}
                  >
                    {Object.keys(animation.props).map((key) => (
                      <div key={animation.props[key]}>{key}: {animation.props[key]}</div>
                    ))}
                  </Tooltip>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <ControlPanelForm
          animationsConfig={animationsConfig}
          handleAddAnimation={this.addAnimation}
          handleChangeAnimation={this.handleChangeAnimation}
          toggleHighlight={this.toggleIsOpen}
          clearAnimation={this.clearAnimation}
          isHighlightOpen={this.state.isOpen}
        />
        <Collapse isOpen={this.state.isOpen}>
          <Code className="lang-javascript" theme={theme}>
            {examplePanelAnimationWithTheme({ animation: this.state.selectedAnimationConfig, settings: this.state.settings })}
          </Code>
        </Collapse>
        <SettingsForm
          settings={settingsImport}
          animationConfig={selectedAnimationConfig}
          onChange={this.onSettingsChange}
        />
      </div>
    );
    /* eslint-disable array-callback-return, consistent-return */
  }
}

// eslint-disable-next-line no-class-assign
const AnimationPanelStyled = styled(AnimationPanel)`
  &.panel-animation {
    width: 100%;
    .animation-area {
      min-height: 20rem;
      text-align: center;
    }
    .animation-item {
      font-size: 7rem;
      color: #6942A4;
      margin: 5rem;
      text-shadow: 2px 2px #442f63;
    }
    .menu-configuration {
      width: 100%;
      height: 100%;
      .menu-item {
        margin: 0 0 0 0;
      }
    }
  }
`;

/** @component */
export default withTheme(AnimationPanelStyled);

import React from 'react';
import PropTypes from 'prop-types';
import Fa from '@bootstrap-styled/v4/lib/Fa';
import Button from '@bootstrap-styled/v4/lib/Button';
import Input from '@bootstrap-styled/v4/lib/Input';
import InputGroup from '@bootstrap-styled/v4/lib/InputGroup';
import InputGroupAddon from '@bootstrap-styled/v4/lib/InputGroup/InputGroupAddon';
import Form from '@bootstrap-styled/v4/lib/Form';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import Label from '@bootstrap-styled/v4/lib/Label';
import Option from '@bootstrap-styled/v4/lib/Option';

/* eslint-disable react/destructuring-assignment */
export default class ControlPanelForm extends React.Component {
  static propTypes = {
    handleAddAnimation: PropTypes.func.isRequired,
    handleChangeAnimation: PropTypes.func.isRequired,
    animationsConfig: PropTypes.object.isRequired,
    toggleHighlight: PropTypes.func.isRequired,
    isHighlightOpen: PropTypes.bool.isRequired,
    clearAnimation: PropTypes.func.isRequired,
  };

  handleAddAnimation = (e) => {
    this.props.handleAddAnimation(e);
  }

  handleChangeAnimation = (e) => {
    this.props.handleChangeAnimation(e);
  }


  render() {
    const { animationsConfig } = this.props;
    /* eslint-disable array-callback-return, consistent-return */
    return (
      <Form inline>
        <FormGroup>
          <Button
            size="sm"
            color="warning"
            type="button"
            onClick={this.handleAddAnimation}
            className="mr-1 cursor-pointer"
          >
            Launch Animation
          </Button>
          <Button
            size="sm"
            type="button"
            onClick={this.props.toggleHighlight}
            active={this.props.isHighlightOpen}
            color="info"
            className="mr-1 cursor-pointer"
          >
            <Fa code />
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={this.props.clearAnimation}
            color="danger"
            className="mr-1 cursor-pointer"
          >
            <Fa trash />
          </Button>
          <InputGroup size="sm">
            <InputGroupAddon tag={Label}>Select animation</InputGroupAddon>
            <Input type="select" name="animation" onChange={this.handleChangeAnimation}>
              {Object.keys(animationsConfig).map((key) => (
                <Option key={key} value={key}>{animationsConfig[key].name}</Option>
              ))}
            </Input>
          </InputGroup>
        </FormGroup>
      </Form>
    );
    /* eslint-enable array-callback-return, consistent-return */
  }
}

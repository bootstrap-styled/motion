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
      <Form inline className="p-1">
        <FormGroup className="mr-1">
          <Button
            type="button"
            onClick={this.handleAddAnimation}
            className="mr-1 cursor-pointer"
          >
            Launch Animation
          </Button>
          <Button
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
            onClick={this.props.clearAnimation}
            color="danger"
            className="cursor-pointer"
          >
            <Fa trash />
          </Button>
        </FormGroup>
        <FormGroup className="mr-1">
          <InputGroup>
            <InputGroupAddon tag={Label}>Select animation name</InputGroupAddon>
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


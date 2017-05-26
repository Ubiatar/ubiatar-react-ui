/**
 * Created by antoniogiordano on 12/05/17.
 */

import React, {PropTypes} from 'react'
import {TextField, FontIcon, CircularProgress} from 'material-ui'
import {FORM_INPUT_STATES} from '../misc.js'
import css from './text-field-validated.scss'

const TextFieldValidated = React.createClass({
  propTypes: {
    textFieldProps: {
      floatingLabelText: React.PropTypes.string,
      onChange: React.PropTypes.func,
      errorText: React.PropTypes.string,
      fullWidth: React.PropTypes.bool,
      defaultValue: React.PropTypes.string
    }
  },
  getDefaultProps () {
    return {
      textFieldProps: {
        floatingLabelText: '',
        onChange: null,
        errorText: '',
        fullWidth: false,
        defaultValue: ''
      }
    }
  },
  renderIcon (status) {
    switch (status) {
      case FORM_INPUT_STATES.success:
        return <FontIcon className={`${css.success} material-icons`}>done</FontIcon>
      case FORM_INPUT_STATES.neutral:
        return <FontIcon className={`${css.warning} material-icons`}>warning</FontIcon>
      case FORM_INPUT_STATES.error:
        return <FontIcon className={`${css.error} material-icons`}>clear</FontIcon>
      case FORM_INPUT_STATES.loading:
        return <CircularProgress size={20} thickness={2}/>
      default:
        return null
    }
  },
  render () {
    let {textFieldProps, status} = this.props
    let style = textFieldProps.fullWidth ? {width: '100%'} : {width: 'auto'}
    return (
      <div className={css.root} style={style}>
        <TextField {...textFieldProps} />
        {
          this.renderIcon(status)
        }
      </div>
    )
  }
})

export default TextFieldValidated

/**
 * Created by antoniogiordano on 12/05/17.
 */

import React from 'react'
import
import {FontIcon, CircularProgress} from 'material-ui'
import {FORM_INPUT_STATES} from '../misc.js'
import css from './validation-wrapper.scss'

export default class ValidationWrapper extends React.Component {
  constructor (props) {
    super(props)
  }

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
  }

  renderIcon (status) {
    switch (status) {
      case FORM_INPUT_STATES.success:
        return <FontIcon className='material-icons'>done</FontIcon>
      case FORM_INPUT_STATES.neutral:
        return <FontIcon className='material-icons'>warning</FontIcon>
      case FORM_INPUT_STATES.error:
        return <FontIcon className='material-icons'>clear</FontIcon>
      case FORM_INPUT_STATES.loading:
        return <CircularProgress size={20} thickness={2}/>
      default:
        return null
    }
  }

  render () {
    let {textFieldProps, status} = this.props
    let style = textFieldProps.fullWidth ? {width: '100%'} : {width: 'auto'}
    return (
      <div className={css.root} style={style}>
        {
          this.props.children
        }
        {
          this.renderIcon(status)
        }
      </div>
    )
  }
}

ValidationWrapper.propTypes = {

}
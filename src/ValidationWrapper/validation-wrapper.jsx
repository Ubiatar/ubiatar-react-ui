/**
 * Created by antoniogiordano on 12/05/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {FontIcon, CircularProgress} from 'material-ui'
import {FORM_INPUT_STATES} from '../misc.js'
import css from './validation-wrapper.scss'

export default class ValidationWrapper extends React.Component {
  constructor (props) {
    super(props)
  }

  getDefaultProps () {
    return {
      fullWidth: false,
      status: FORM_INPUT_STATES.neutral
    }
  }

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
  }

  render () {
    const {fullWidth, status} = this.props
    const style = {
      width: fullWidth ? '100%' : 'auto'
    }
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

ValidationWrapper.PropTypes = {
  fullWidth: PropTypes.bool,
  status: PropTypes.object
}
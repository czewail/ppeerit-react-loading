import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Svg from './svgs'

export default class Loading extends Component {
  render() {
    const svg = Svg[this.props.type]
    const style = {
      fill: this.props.color,
      width: this.props.size + 'px',
      height: this.props.size + 'px',
    }
    return (
      <div
        style={style}
        dangerouslySetInnerHTML={{__html: svg}}
        className={this.props.className}
      />
    )
  }
}

Loading.PropTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string
}

Loading.defaultProps = {
  color: 'orange',
  size: 32,
  type: 'spin'
}
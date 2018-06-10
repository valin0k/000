import React, {Component} from 'react'

export default class Comment extends Component {
  render() {
    const {comment} = this.props
    return (
      <div>
        <div>{comment.user}</div>
        <div>{comment.text}</div>
      </div>
    )
  }
}

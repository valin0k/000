import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpenDecorator from '../decorators/ToggleOpen'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render () {
    const {commnets, toggleOpen, isOpen} = this.props
    return (
      <div>
        <button onClick={toggleOpen}>
          <b>{isOpen ? 'close' : 'open'}</b>
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
    const {isOpen} = this.props
    if(!isOpen) return null

    return <section>
      {isOpen &&
        props.comments.map(comment =>
          <Comment
            key={comment.id}
            comment={comment} />
        )}
    </section>
  }
}

export default toggleOpenDecorator(CommentList)

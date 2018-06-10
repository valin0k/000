import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
  state = {
    isOpen: false
  }

  render () {
    const {article} = this.props
    const {isOpen} = this.state
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody = () => {
    const {state, props} = this
    if(!state.isOpen) return null

    return <section>
      {props.article.text}
        <div>
          <CommentList comments={props.article.comments} />
        </div>
    </section>
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

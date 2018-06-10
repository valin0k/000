import React, {Component} from 'react'

export default (ToggleOpenDecorator) => class WrappedComponent extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <WrappedComponent
        {...this.props}
        {...this.state}
        toggleOpen={this.toggleOpen}
      />
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

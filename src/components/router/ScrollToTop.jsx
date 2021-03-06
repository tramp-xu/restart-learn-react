import { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return (null);
  }
}

export default withRouter(ScrollToTop);
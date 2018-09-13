import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';

/**
 * This component provides a tracking function to all React
 * components underneath itself via the context API.
 *
 * @example ./TrackingProvider.md
 */
export default class TrackingProvider extends React.Component {
  static propTypes = {
    /** The tracking function */
    track: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super();
    this.trackingService = props.track;
  }

  track = (event, value) => {
    if (this.trackingService) {
      this.trackingService(event, value);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Provider value={this.track}>
        {children}
      </Provider>
    );
  }
}

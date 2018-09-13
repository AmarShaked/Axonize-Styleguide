import React from 'react';
import { Consumer } from './context';

function withTrack(WrappedComponent) {
  return class TrackingConsumer extends React.PureComponent {
    render() {
      return (
        <Consumer>
          {track => <WrappedComponent track={track} {...this.props} />}
        </Consumer>
      );
    }
  };
}

export default withTrack;

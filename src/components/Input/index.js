import React from 'react';
import _debounce from 'lodash/debounce';
import StyledInput from './style';
import { withTrack } from '../../providers/TrackingProvider';
import Search from './search';
import TextArea from './textarea';

/**
 * A basic widget for getting the user input is a text field.
 * Keyboard and mouse can be used for providing or changing data.
 */
class Input extends React.PureComponent {
  handleChange = (e) => {
    const { track, onChange, trackingLabel } = this.props;
    const { value } = e.target;

    if (track && trackingLabel && value) {
      if (this.delayedTracking) {
        this.delayedTracking.cancel();
      }

      this.delayedTracking = _debounce(() => track(trackingLabel, { value }), 5000);
      this.delayedTracking();
    }

    if (onChange) {
      onChange(e);
    }
  };

  render() {
    const {
      track, trackingLabel, innerRef, ...rest
    } = this.props;
    return <StyledInput {...rest} ref={innerRef} onChange={this.handleChange} />;
  }
}

const ExportedInput = withTrack(Input);
ExportedInput.Search = Search;
ExportedInput.TextArea = TextArea;

export default ExportedInput;

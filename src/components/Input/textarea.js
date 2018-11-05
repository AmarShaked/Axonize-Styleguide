import React from "react";
import _debounce from "lodash/debounce";
import { StyledTextArea } from "./style";
import { withTrack } from "../../providers/TrackingProvider";

/**
 * A React component that is a base input.
 *
 * @example ./Input.md
 */
class TextArea extends React.PureComponent {
  handleChange = e => {
    const { track, onChange, trackingLabel } = this.props;
    const { value } = e.target;

    if (track && trackingLabel && value) {
      if (this.delayedTracking) {
        this.delayedTracking.cancel();
      }

      this.delayedTracking = _debounce(
        () => track(trackingLabel, { value }),
        5000
      );
      this.delayedTracking();
    }

    if (onChange) {
      onChange(e);
    }
  };

  render() {
    const { track, trackingLabel, innerRef, ...rest } = this.props;
    return (
      <StyledTextArea {...rest} ref={innerRef} onChange={this.handleChange} />
    );
  }
}

export default withTrack(TextArea);

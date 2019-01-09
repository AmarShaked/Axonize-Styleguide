import React from 'react';
import AntdSelect from 'antd/lib/select';
import StyledSelect from './style/select';
import { withTrack } from '../../providers/TrackingProvider';

/**
 * Select component to select value from options.
 *
 * @example ./Select.md
 */
class Select extends React.PureComponent {
  handleChange = (value, target) => {
    const { track, onChange, trackingLabel } = this.props;

    if (track && trackingLabel && value) {
      track(trackingLabel, { value });
    }

    if (onChange) {
      onChange(value, target);
    }
  };

  render() {
    const {
      track, trackingLabel, innerRef, ...rest
    } = this.props;
    return <StyledSelect {...rest} ref={innerRef} onChange={this.handleChange} />;
  }
}

const exportedSelect = withTrack(Select);
exportedSelect.Option = AntdSelect.Option;
exportedSelect.OptGroup = AntdSelect.OptGroup;

export default exportedSelect;

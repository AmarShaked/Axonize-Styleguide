import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton, ButtonIcon, ButtonContent, ButtonSpinner,
} from './styled';
import { withTrack } from '../../providers/TrackingProvider';

/**
 * A React component that is a base button.
 */
class Button extends React.PureComponent {
  static propTypes = {
    /** The text for the button */
    children: PropTypes.node,
    /** Set if the button is loading. When loading is true, text is hidden,
     * and a spinner is shown in its place.
     * The button maintains the width that it would have if the text were visible. */
    loading: PropTypes.bool,
    /** The base styling to apply to the button. */
    type: PropTypes.oneOf(['default', 'primary', 'subtle', 'link', 'danger', 'warning']),
    /** Set the handler to handle click event */
    onClick: PropTypes.func,
    /** Set the icon of button */
    icon: PropTypes.string,
    /** Set if the button is disabled */
    disabled: PropTypes.bool,
    /** Set if the button is round shape, available only on icon buttons */
    rounded: PropTypes.bool,
    /** Change the style to indicate the button is selected. */
    selected: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
    type: 'default',
    icon: '',
    onClick: null,
    disabled: false,
    rounded: false,
    selected: false,
    children: null,
  };

  handleClick = (e) => {
    const { track, onClick, trackingLabel } = this.props;

    if (track && trackingLabel) {
      track(trackingLabel);
    }

    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {
      children, icon, loading, type, innerRef, ...rest
    } = this.props;

    return (
      <StyledButton
        withText={!!children}
        loading={loading}
        icon={icon}
        type={type}
        {...rest}
        ref={innerRef}
        onClick={this.handleClick}
      >
        {loading && <ButtonSpinner type={type} />}
        {icon && <ButtonIcon withText={!!children} loading={loading} className={icon} />}
        {children && (
          <ButtonContent loading={loading} withIcon={!!icon}>
            {children}
          </ButtonContent>
        )}
      </StyledButton>
    );
  }
}

export default withTrack(Button);

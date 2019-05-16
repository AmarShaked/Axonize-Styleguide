import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

/**
 * This component provides a theme to all React components underneath itself via the context API.
 */
class StyleProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    theme: PropTypes.shape({
      /** The theme main color */
      main: PropTypes.string.isRequired,
      background: PropTypes.string,

      /** Is Theme is in RTL mode */
      rtl: PropTypes.bool.isRequired,

      /** The type of the theme light / dark */
      type: PropTypes.oneOf(['dark', 'light']),
    }).isRequired,
  };

  render() {
    const { children, theme } = this.props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
export default StyleProvider;

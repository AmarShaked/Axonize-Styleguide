// styleguide/ThemeWrapper.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';

const theme = {
  main: '#42399b',
  background: '#36393e',
  type: 'light',
  rtl: false,
};

export default class ThemeWrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

// styleguide/ThemeWrapper.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';

const theme = {
  main: '#F2A916',
  background: '#36393e',
  type: 'dark',
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

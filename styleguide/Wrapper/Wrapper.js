import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyleProvider from '../../src/providers/StyleProvider';

const Wrapper = ({ children }) => {
  const [theme, setTheme] = useState({
    main: '#42399b',
    background: '#36393e',
    appBackground: '#fff',
    type: 'light',
    rtl: false,
  });

  const handleThemeChange = (e) => {
    const dark = e.target.checked;
    setTheme({
      ...theme,
      type: dark ? 'dark' : 'light',
      appBackground: dark ? '#2d3035' : '#fff',
      color: dark ? '#ffc600' : '#000',
    });
  };

  return (
    <StyleProvider theme={theme}>
      <div
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.appBackground,
        }}
      >
        <header
          style={{
            padding: 10,
            display: 'flex',
            marginBottom: 20,
            alignItems: 'center',
            borderBottom: '1px solid',
            borderBottomColor: '#ebf1f3',
          }}
        >
          <input
            style={{ marginRight: 10 }}
            checked={theme.type === 'dark'}
            onChange={handleThemeChange}
            type="checkbox"
          />
          <span style={{ color: theme.color }}> Dark Theme </span>
        </header>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </StyleProvider>
  );
};

export default Wrapper;

import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import Spinner from '../Spinner';

export const ButtonSpinner = styled(Spinner)`
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  stroke: ${({ type }) => (['danger', 'warning', 'primary'].includes(type) ? '#fff' : '#616161')};
`;

export const ButtonIcon = styled.i`
  transition: opacity 0.3s;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
  margin: ${({ theme, withIcon }) => withIcon && (theme.rtl ? '0 5px 0 0' : '0 0 0 5px')};
`;

const getTypeColors = (type, theme) => {
  let background;
  let hover;
  let active;
  let color;
  let hoverColor;

  switch (type) {
    case 'primary':
      background = theme.main;
      color = theme.type === 'dark' ? theme.background : '#fff';
      hover = lighten(0.05, theme.main);
      active = darken(0.05, theme.main);

      break;
    case 'subtle':
      background = 'none';
      active = darken(0.05, theme.type === 'dark' ? 'rgba(0, 0, 0, 0.6)' : theme.main);
      hover = theme.type === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(9, 30, 66, 0.1)';
      hoverColor = theme.type === 'dark' ? '#B7B7B7' : '';
      break;
    case 'link':
      background = 'none';

      break;
    case 'danger':
      background = 'rgb(222, 53, 11)';
      color = '#fff';
      hover = lighten(0.05, 'rgb(222, 53, 11)');
      active = darken(0.05, 'rgb(222, 53, 11)');

      break;
    case 'warning':
      background = theme.type === 'dark' ? '#FF7600' : 'rgb(255, 171, 0)';
      color = '#fff';
      hover = lighten(0.05, theme.type === 'dark' ? '#FF7600' : 'rgb(255, 171, 0)');
      active = darken(0.05, theme.type === 'dark' ? '#FF7600' : 'rgb(255, 171, 0)');

      break;
    default:
      background = theme.type === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(9, 30, 66, 0.04)';
      hover = theme.type === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(9, 30, 66, 0.1)';
      active = theme.type === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(9, 30, 66, 0.2)';
      hoverColor = theme.type === 'dark' ? '#B7B7B7' : '';
      break;
  }

  return css`
    background: ${background};
    color: ${color};

    &:hover {
      background: ${hover};
      color: ${hoverColor};
    }

    &:active {
      background: ${active};
    }
  `;
};

export const StyledButton = styled.button`
  align-self: center;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  border-radius: 3px;
  border-width: 0;
  font-size: inherit;
  font-style: normal;
  width: auto;
  height: 32px;
  line-height: 32px;
  margin: 0px;
  padding: ${({ withText }) => (withText ? '0px 12px' : '0 5px')} ;
  outline: none !important;
  cursor: pointer;
  color: #888888;
  transition: background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);

  ${({ type, theme }) => getTypeColors(type, theme)}
  ${({ float }) => float
    && css`
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    `}


  ${({ type, theme }) => type === 'link'
    && css`
      &:hover {
        text-decoration: underline;
        color: ${theme.main};
      }
    `}

      ${({ rounded }) => rounded
        && css`
          width: 32px;
          border-radius: 50%;
        `}

  ${({ selected, theme }) => selected
    && css`
      color: ${theme.main};
      border: 1px solid ${theme.type === 'dark' ? 'rgb(18, 19, 21)' : theme.main};
      cursor: pointer;
      background: ${theme.type === 'dark' ? 'rgb(18, 19, 21)' : '#fff'};

      &:hover {
        background: ${theme.type === 'dark' ? 'rgb(18, 19, 21)' : '#fff'};
        color: ${theme.main};
      }
    `};

  ${({ disabled }) => disabled
    && css`
      color: rgb(165, 173, 186) !important;
      background: rgba(9, 30, 66, 0.04);
      cursor: not-allowed;

      &:hover {
        background: rgba(9, 30, 66, 0.04);
        text-decoration: none;
      }

      &:active {
        background: rgba(9, 30, 66, 0.04);
      }

      ${({ type }) => ['link', 'subtle'].includes(type)
        && css`
          background: transparent;

          &:hover {
            background: transparent;
            text-decoration: none;
          }

          &:active {
            background: transparent;
          }
        `};
    `};
`;

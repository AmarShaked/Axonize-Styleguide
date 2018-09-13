import Input from 'antd/lib/input';
import styled from 'styled-components';

export const StyledSearch = styled(Input.Search)`
  &.ant-input-search {
    .ant-input {
      border-radius: 3px;
      font-size: inherit;
      font-style: normal;

      &:hover {
        outline: 0;
        box-shadow: none;
        border-right-width: 1px !important;
      }

      &:focus {
        outline: 0;
        box-shadow: none;
        border-right-width: 1px !important;
      }
    }
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  &.ant-input {
    border-radius: 3px;
    font-size: inherit;
    font-style: normal;

    &:hover {
      outline: 0;
      box-shadow: none;
      border-right-width: 1px !important;
    }

    &:focus {
      outline: 0;
      box-shadow: none;
      border-right-width: 1px !important;
    }
  }
`;

const StyledInput = styled(Input)`
  &.ant-input {
    border-radius: 3px;
    font-size: inherit;
    font-style: normal;

    &:hover {
      outline: 0;
      box-shadow: none;
      border-right-width: 1px !important;
    }

    &:focus {
      outline: 0;
      box-shadow: none;
      border-right-width: 1px !important;
    }
  }
`;

export default StyledInput;

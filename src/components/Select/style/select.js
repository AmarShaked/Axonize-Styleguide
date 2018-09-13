import Select from 'antd/lib/select';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  &.ant-select {
    .ant-select-selection {
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

export default StyledSelect;

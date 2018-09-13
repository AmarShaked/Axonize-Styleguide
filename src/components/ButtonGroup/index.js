import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonGroup, StyledGroupItem } from './styled';

/**
 * A React component that is a base button group.
 *
 * @example ./ButtonGroup.md
 */
class ButtonGroup extends React.PureComponent {
  static propTypes = {
    /** The buttons to appear within the group. */
    children: PropTypes.any,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;
    return (
      <StyledButtonGroup {...this.props}>
        {React.Children.map(children, (child, idx) => {
          if (!child) {
            return null;
          }
          return (
            <StyledGroupItem key={idx}>
              {child}
            </StyledGroupItem>
          );
        })}
      </StyledButtonGroup>
    );
  }
}

export default ButtonGroup;

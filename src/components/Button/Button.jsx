import PropTypes from 'prop-types';
import { Button } from './Button.style';
// import { Component } from 'react';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};
ButtonLoadMore.propTypes = { onClick: PropTypes.func.isRequired };
export default ButtonLoadMore;

// class ButtonLoadMore extends Component {
//   render() {
//     return (
//       <Button type="button" onClick={this.props.onClick}>
//         Load More
//       </Button>
//     );
//   }
// }
// // ButtonLoadMore.propTypes = { onClick: PropTypes.func.isRequired };
// export default ButtonLoadMore;

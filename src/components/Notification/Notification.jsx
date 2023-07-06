// import PropTypes from 'prop-types';

import { Text } from './Notification.style';

export default function Notification({ children, className }) {
  return (
    <>
      <Text className={className}>{children}</Text>
    </>
  );
}

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

//PiArrowBendUpRightBold
//PiArrowBendUpLeftBold

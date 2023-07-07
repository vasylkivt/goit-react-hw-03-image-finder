// import PropTypes from 'prop-types';

import { Text } from './Notification.style';

export default function Notification({ children }) {
  return (
    <>
      <Text>{children}</Text>
    </>
  );
}

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

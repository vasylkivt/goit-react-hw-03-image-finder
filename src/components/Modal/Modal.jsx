import PropTypes from 'prop-types';
import { Modal, Overlay } from './Modal.style';
const Backdrop = ({ largeImageURL, closeBackdrop }) => {
  return (
    <Overlay onClick={closeBackdrop}>
      <Modal>
        <img src={largeImageURL} alt="largeImage" />
      </Modal>
    </Overlay>
  );
};
Backdrop.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeBackdrop: PropTypes.func.isRequired,
};
export default Backdrop;

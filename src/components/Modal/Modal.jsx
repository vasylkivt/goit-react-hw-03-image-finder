import PropTypes from 'prop-types';
import { Modal, Overlay } from './Modal.style';
const Backdrop = ({ largeImageURL, closeBackdrop }) => {
  return (
    <Overlay onClick={closeBackdrop}>
      <Modal>
        <img src={largeImageURL} alt="" />
      </Modal>
    </Overlay>
  );
};
Backdrop.propTypes = {};
export default Backdrop;

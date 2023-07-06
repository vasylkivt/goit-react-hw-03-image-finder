import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';
import { List } from './ImageGallery.style';

const ImageGallery = ({ photos, showBackdrop }) => {
  return (
    <List>
      <ImageGalleryItem showBackdrop={showBackdrop} photos={photos} />
    </List>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  showBackdrop: PropTypes.func.isRequired,
};

export default ImageGallery;

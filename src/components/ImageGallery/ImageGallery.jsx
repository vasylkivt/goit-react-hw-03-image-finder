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

ImageGallery.propTypes = {};

export default ImageGallery;

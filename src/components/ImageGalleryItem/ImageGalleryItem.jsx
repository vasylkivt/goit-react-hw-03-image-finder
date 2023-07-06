import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.style';
const ImageGalleryItem = ({ photos, showBackdrop }) => {
  return photos.map(({ largeImageURL, webformatURL, id }) => {
    return (
      <Item key={id}>
        <Image
          onClick={() => showBackdrop(largeImageURL)}
          src={webformatURL}
          alt=""
        />
      </Item>
    );
  });
};
ImageGalleryItem.propTypes = {};
export default ImageGalleryItem;

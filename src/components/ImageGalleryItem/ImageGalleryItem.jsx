import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.style';
const ImageGalleryItem = ({ photos, showBackdrop }) => {
  return photos.map(({ largeImageURL, webformatURL, id, tags }) => {
    return (
      <Item key={id}>
        <Image
          onClick={() => showBackdrop(largeImageURL)}
          src={webformatURL}
          alt={tags}
        />
      </Item>
    );
  });
};
ImageGalleryItem.propTypes = {
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
export default ImageGalleryItem;

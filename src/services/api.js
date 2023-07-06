import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotosWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=36230302-a98b57dafca503e591043ee2d&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};

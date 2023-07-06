import { Button, Input, SearchForm, SearchIcon } from './SearchBar.style';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => (
  <Formik
    initialValues={{
      searchValue: '',
    }}
    onSubmit={values => {
      onSubmit(values);
    }}
  >
    <SearchForm>
      <Button type="submit">
        <SearchIcon />
      </Button>

      <Input
        name="searchValue"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </Formik>
);

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

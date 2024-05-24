import Births from './Births';
import Button from './Button';
import renderer from 'react-test-renderer';
import { store } from './store';
import { Provider } from 'react-redux';

test('renders a button', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Births />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
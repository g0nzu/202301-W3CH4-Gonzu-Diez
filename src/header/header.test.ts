/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Header component', () => {
  test('should render the title and section title', () => {
    document.body.innerHTML = '<header id="header"></header>';
    const mockTitle = 'Test';
    const header = new Header('header', mockTitle);
    const title = screen.getByText(mockTitle);
    expect(title).toBeInTheDocument();
    const sectionTitle = screen.getByText('Series list');
    expect(sectionTitle).toBeInTheDocument();
  });
});

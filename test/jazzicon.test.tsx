import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Default } from '../stories/jazzicon.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Default />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

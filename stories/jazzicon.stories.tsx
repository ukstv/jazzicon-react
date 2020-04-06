import * as React from 'react';
import { Jazzicon } from '../src';

export default {
  title: 'Jazzicon',
  component: Jazzicon,
};

export const Default = () => (
  <Jazzicon address={'0x7dd4E19395C47753370a7E20B3788546958b2Ea6'} />
);

Default.story = {
  name: 'Default',
  parameters: {
    address: '0x7dd4E19395C47753370a7E20B3788546958b2Ea6',
  },
};

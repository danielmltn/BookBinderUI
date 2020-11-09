import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CompletedBooks } from '../components/CompletedBooks';

export default {
  title: 'Components/CompletedBooks',
  component: CompletedBooks,
} as Meta;

const Template: Story = (args) => <CompletedBooks />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
};
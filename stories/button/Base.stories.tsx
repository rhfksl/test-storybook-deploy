// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BaseButton from '~/components/button/base/BaseButton';

interface IBaseButtonProps {
  children?: JSX.Element | Array<JSX.Element> | undefined;
  width?: string;
  height?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Base',
  component: BaseButton,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderWidth: { control: 'text' },
    borderRadius: { control: 'text' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    style: { control: false },
  },
} as Meta;

// export * from './NormalButton.stories';
// export * from './PrimaryButton.stories';
// export * from './SecondaryButton.stories';
// export * from './NormalImageButton.stories';
// export * from './PrimaryImageButton.stories';
// export * from './SecondaryImageButton.stories';
// export * from './CircleImageButton.stories';
// export * from './RoundButton.stories';
// export * from './RoundImageButton.stories';
// export * from './LoginButton.stories';

const Template: Story<IBaseButtonProps> = (args) => {
  return <BaseButton {...args} />
};

export const Base = Template.bind({});
Base.args = {};
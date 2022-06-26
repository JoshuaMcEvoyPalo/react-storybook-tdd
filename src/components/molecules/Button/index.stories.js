import Button from '.'

export default {
  title: 'Molecules / Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Sign in"
}
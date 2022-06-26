import ButtonLabel from '.'

export default {
  title: 'Atoms / Button Label',
  component: ButtonLabel,
}

const Template = (args) => <ButtonLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Sign in",
}
import Link from '.'

export default {
  title: 'Atoms / Link',
  component: Link,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Forgotten your username?',
  link: '/another-page',
}
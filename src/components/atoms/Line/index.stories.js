import Line from '.'

export default {
  title: 'Atoms / Line',
  component: Line
}

const Template = (args) => <Line {...args} />

export const Default = Template.bind({})
Default.args = {}
import Card from '.'
import H2 from '../../atoms/H2'

export default {
  title: 'Wrappers / Card',
  component: Card
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <H2>Title Page</H2>
}
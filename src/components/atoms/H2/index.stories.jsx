import H2 from '.'

// storiesOf('Atoms / H2', module).add('Default', () => {
//   <H2>{"H2 Title"}</H2>
// })

// SETUP
export default {
  title: 'Atoms / H2',
  component: H2,
}

// TEMPLATE
const Template = (args) => <H2 {...args} />

// STORIES VARIANTS
export const Default = Template.bind({})
Default.args = {
  children: "Title Heading",
}

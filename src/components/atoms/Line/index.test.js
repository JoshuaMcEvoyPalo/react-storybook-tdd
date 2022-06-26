import renderer from 'react-test-renderer'
import Line from '.'

describe('Line tests', () => {
  it('Should render Line correctly', () => {
    const tree = renderer.create(<Line />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
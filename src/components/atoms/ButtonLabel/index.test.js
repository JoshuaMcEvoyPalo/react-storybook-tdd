import renderer from 'react-test-renderer';
import ButtonLabel from '.'

describe('ButtonLabel tests', () => {
  it('Should render ButtonLabel correctly', () => {
    const tree = renderer.create(<ButtonLabel text="Sign in" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
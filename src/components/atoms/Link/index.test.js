import renderer from 'react-test-renderer'
import Link from '.'

describe('Link tests', () => {
  it('Should render Link correctly', () => {
    const tree = renderer.create(<Link text="Forgotten your username?" link="/another-page" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
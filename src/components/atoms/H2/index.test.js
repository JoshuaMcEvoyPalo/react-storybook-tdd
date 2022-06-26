import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import H2 from '.'

describe('H2 tests', () => {
  const title = "Heading text"
  it('Should render H2 correctly', () => {
    const tree = renderer.create(<H2>{title}</H2>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Should render children', () => {
    render(<H2>{title}</H2>)
    expect(screen.getByTestId('h2')).toContainHTML(title)
  })
})
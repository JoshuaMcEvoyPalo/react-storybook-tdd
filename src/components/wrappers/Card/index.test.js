import { render, screen } from '@testing-library/react'
import Card from '.'

describe('Card tests', () => {
  const component = "child component"
  it('Should render Card children', () => {
    render(<Card>{component}</Card>)
    expect(screen.getByTestId('card')).toContainHTML(component)
  })
})
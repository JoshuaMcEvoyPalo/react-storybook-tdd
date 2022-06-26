import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button tests', () => {
  const buttonLabel = 'Sign in'
  it('should render button correctly', () => {
    render(<Button onClick={() => {}} label={buttonLabel} />)
    expect(screen.getByTestId('button-label')).toBeInTheDocument()
  })
  it('Should call onClick when button is clicked', () => {

  })
})
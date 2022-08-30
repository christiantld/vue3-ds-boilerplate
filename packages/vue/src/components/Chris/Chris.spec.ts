import Chris from './Chris.vue'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'

describe('Chris', () => {
  it('should render', () => {
    render(Chris)

    const title = screen.getByText("Chris")
    expect(title).toBeInTheDocument()
  })
})

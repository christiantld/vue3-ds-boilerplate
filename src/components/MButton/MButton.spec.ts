import MButton from './MButton.vue'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'

describe('MButton', () => {
  it('should render', () => {
    render(MButton, {
      props: {
        label: 'Hello',
      },
    })
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})

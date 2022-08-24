import MButton from './MButton.vue'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'

describe('MButton', () => {
  it('should render', () => {
    render(MButton)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})

//these must be imported each time
import { fireEvent, render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom' 
import Options from '../src/components/Options.svelte'

describe('Options.svelte', () => {
  /**
   * @author Jay Kura
   * afterEach(() => cleanup()) is done automatically to clear the dom between tests
   */
  test('that shows count when rendered', () => {
    render(Options, {count: 2});
    const count = screen.getByText("Current count:")
    expect(count).toHaveTextContent('Current count: 2')
  })
  test('number increments when plus button is clicked', async () => {
    render(Options, {count: 2});
    const plusButton = screen.getByText("+")
    const count = screen.getByText("Current count:")
    await fireEvent.click(plusButton)
    expect(count).toHaveTextContent('Current count: 3')
  })
  test('number increments when minus button is clicked', async () => {
    render(Options, {count: 10});
    console.log(screen.getByText("*"))
    const minusButton = screen.getByText("-")
    const count = screen.getByText("Current count:")
    await fireEvent.click(minusButton)
    expect(count).toHaveTextContent('Current count: 9')
  })
})

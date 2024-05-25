import { setSelection } from './set'
import { isInputOrTextarea } from './utils'

interface RemoveOptions {
  start: number
  end: number
}

export function removeInputOrTextareaSelection(element: HTMLElement, options: RemoveOptions) {
  const el = element as HTMLTextAreaElement | HTMLInputElement

  const value = el.value

  const { start, end } = options
  
  el.value = value.slice(0, start) + value.slice(end)
}

export function removeContentEditableSelection(element: HTMLElement, options: RemoveOptions) {
  setSelection(element, {
    start: options.start,
    end: options.end,
  })

  const selection = document.getSelection()
  if (!selection?.rangeCount)
    return

  const range = selection?.getRangeAt(0)

  range?.deleteContents()
}

export function removeSelection(element: HTMLElement, options: RemoveOptions) {
  if (isInputOrTextarea(element))
    removeInputOrTextareaSelection(element, options)
  else
    removeContentEditableSelection(element, options)
}

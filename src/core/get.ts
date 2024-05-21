import { isInput, isTextarea } from './utils'

interface GetselectionResult {
  start: number
  end: number
  direction: 'forward' | 'backward' | 'none'
  text: string
}

export function getContentEditableSelection(element: HTMLElement) {
  getSelection(element)

  const selection = window.getSelection()
  if (!selection?.rangeCount || selection.toString().length === 0)
    return

  const range = selection.getRangeAt(0)

  const result = {
    start: range.startOffset,
    end: range.endOffset,
    direction: 'none',
    text: range.toString(),
  }

  return result as GetselectionResult
}

export function getInputSelection(element: HTMLElement) {
  const el = element as HTMLInputElement

  const result = {
    start: el.selectionStart,
    end: el.selectionEnd,
    direction: 'none',
    text: el.value.slice(el.selectionStart || 0, el.selectionEnd || 0),
  }
  return result as GetselectionResult
}

export function getTextareaSelection(element: HTMLElement) {
  const el = element as HTMLTextAreaElement

  const result = {
    start: el.selectionStart,
    end: el.selectionEnd,
    direction: 'none',
    text: el.value.slice(el.selectionStart || 0, el.selectionEnd || 0),
  }

  return result as GetselectionResult
}

export function getSelection(element: HTMLElement) {
  if (isInput(element))
    return getInputSelection(element)
  else if (isTextarea(element))
    return getTextareaSelection(element)
  else
    return getContentEditableSelection(element)
}

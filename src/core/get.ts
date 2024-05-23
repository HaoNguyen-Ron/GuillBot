import { isInput, isTextarea } from './utils'

interface GetselectionResult {
  start: number
  end: number
  direction: 'forward' | 'backward' | 'none'
  text: string
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

function getCaretCharacterOffsetWithin(element: HTMLElement) {
  let start = 0
  let end = 0

  const selection = window.getSelection()

  if (selection?.rangeCount) {
    const range = selection.getRangeAt(0)

    const preCaretRange = range.cloneRange()

    preCaretRange.selectNodeContents(element)

    preCaretRange.setStart(range.startContainer, range.startOffset)
    start = preCaretRange.toString().length

    preCaretRange.setEnd(range.endContainer, range.endOffset)
    end = preCaretRange.toString().length
  }

  return { start, end }
}

export function getContentEditableSelection(element: HTMLElement) {
  getSelection(element)

  const selection = window.getSelection()
  if (!selection?.rangeCount || selection.toString().length === 0)
    return

  const range = selection.getRangeAt(0)

  const { start, end } = getCaretCharacterOffsetWithin(range?.commonAncestorContainer as HTMLElement)

  const cloneSelection = range!.cloneContents()

  const tempDiv = document.createElement('div')
  tempDiv.appendChild(cloneSelection)

  const result = {
    start,
    end,
    direction: 'forward' as const,
    text: tempDiv.innerHTML || range?.toString() || tempDiv.textContent || '',
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

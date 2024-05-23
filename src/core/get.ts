import {isInputOrTextarea } from './utils'

export interface GetSelectionResult {
  start: number
  end: number
  direction: 'forward' | 'backward' | 'none' | null
  text: string
}

export interface GetNativeSelectionResult {
  startNode: Node | null
  startOffset: number
  endNode: Node | null
  endOffset: number
}

function getDefaultSelection(): GetSelectionResult {
  return {
    text: '',
    start: 0,
    end: 0,
    direction: 'none',
  }
}

export function getSelectionInputOrTextarea(element: HTMLElement): GetSelectionResult {
  const el = element as HTMLTextAreaElement | HTMLInputElement

  return {
    text: el.value.slice(el.selectionStart || 0, el.selectionEnd || 0),
    start: el.selectionStart || 0,
    end: el.selectionEnd || 0,
    direction: el.selectionDirection,
  }
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
    return getDefaultSelection()

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

  return result as GetSelectionResult
}

export function getSelection(element: HTMLElement) {
  const _element = (element || document.activeElement) as HTMLElement

  if (isInputOrTextarea(_element))
    return getSelectionInputOrTextarea(_element as HTMLInputElement | HTMLTextAreaElement)
  else
    return getContentEditableSelection(_element)
}

export function getNativeSelection(): GetNativeSelectionResult {
  const nativeSelection = window.getSelection()!

  const startNode = nativeSelection.anchorNode
  const startOffset = nativeSelection.anchorOffset
  const endNode = nativeSelection.focusNode
  const endOffset = nativeSelection.focusOffset

  return {
    startNode,
    startOffset,
    endNode,
    endOffset,
  }
}


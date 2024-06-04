import defu from 'defu'

import { isInputOrTextarea } from './utils'

interface SetSelectionOptions {
  start: number
  end: number
  direction?: 'forward' | 'backward' | 'none' | null
  text?: string
}

interface SetSelectionNodeOptions {
  nativeSelection: {
    startNode: Node | null
    startOffset: number
    endNode: Node | null
    endOffset: number
  }
}

export function setSelectionInputOrTextarea(element: HTMLElement, options: SetSelectionOptions) {
  const deepOptions = defu(options, {})

  const el = element as HTMLInputElement | HTMLTextAreaElement

  el.focus()

  el.setSelectionRange(deepOptions.start, deepOptions.end, deepOptions.direction || 'forward')

  return el.value.slice(deepOptions.start, deepOptions.end)
}

export function setNativeSelection() {

}

export function setSelectionNode(options?: SetSelectionNodeOptions) {
  const _options = defu(options, {})

  const selection = window.getSelection()
  const range = document.createRange()

  if (_options.nativeSelection.startNode && _options.nativeSelection.endNode) {
    const { startNode, startOffset, endNode, endOffset } = _options.nativeSelection

    const [sortedStartNode, sortedStartOffset, sortedEndNode, sortedEndOffset] = compareAndSortNodes(startNode, startOffset, endNode, endOffset)

    range.setStart(sortedStartNode, sortedStartOffset)
    range.setEnd(sortedEndNode, sortedEndOffset)

    selection?.removeAllRanges()
    selection?.addRange(range)

    return selection?.toString()
  }

  return ''
}

function compareAndSortNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): [Node, number, Node, number] {
  if (startNode === endNode) {
    if (startOffset > endOffset)
      return [endNode, endOffset, startNode, startOffset]
  }
  else {
    const compareResult = startNode.compareDocumentPosition(endNode)
    if (compareResult & Node.DOCUMENT_POSITION_FOLLOWING)
      return [startNode, startOffset, endNode, endOffset]
    else if (compareResult & Node.DOCUMENT_POSITION_PRECEDING)
      return [endNode, endOffset, startNode, startOffset]
  }

  return [startNode, startOffset, endNode, endOffset]
}

export function setSelectionContenteditable(element: HTMLElement, options?: SetSelectionOptions) {
  const _options = defu(options, {})

  element.focus()

  const selection = window.getSelection()

  if (selection) {
    let charCount = 0
    let startNode: Node | undefined
    let startOffset = 0
    let endNode: Node | undefined
    let endOffset = 0

    function traverseNodes(node: Node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const nextCharCount = charCount + Number(node.textContent?.length)
        if (!startNode && _options.start >= charCount && _options.start < nextCharCount) {
          startNode = node
          startOffset = _options.start - charCount
        }
        if (!endNode && _options.end >= charCount && _options.end <= nextCharCount) {
          endNode = node
          endOffset = _options.end - charCount
        }
        charCount = nextCharCount
      }
      else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length && !endNode; i++)
          traverseNodes(node.childNodes[i])
      }
    }

    traverseNodes(element)

    const range = document.createRange()
    if (startNode && endNode) {
      range.setStart(startNode, startOffset)
      range.setEnd(endNode, endOffset)
      selection.removeAllRanges()
      selection.addRange(range)
      return selection.toString()
    }
  }

  return ''
}

export function setSelection(element: HTMLElement, options: SetSelectionOptions) {
  const deepOptions = defu(options, {})

  let selectedText = ''

  element.focus()

  if (isInputOrTextarea(element)) {
    selectedText = setSelectionInputOrTextarea(
      element as HTMLInputElement | HTMLTextAreaElement,
      { start: deepOptions.start, end: deepOptions.end, direction: deepOptions.direction },
    )
  }
  else { 
    selectedText = setSelectionContenteditable(element, { start: deepOptions.start, end: deepOptions.end }) 
  }

  return selectedText
}

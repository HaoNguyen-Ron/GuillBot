import { isInputOrTextarea } from './utils'

interface SetSelectionOptions {
  start: number
  end: number
  direction?: 'forward' | 'backward' | 'none'
  text?: string
}

interface TraverseResult {
  startNode?: Node
  endNode?: Node
  startOffset?: number
  endOffset?: number
}

export function setSelectionInputOrTextarea(element: HTMLElement, option: SetSelectionOptions) {
  const el = element as HTMLInputElement | HTMLTextAreaElement

  el.setSelectionRange(option.start, option.end, option.direction || 'forward')
}

export function setContentEditableSelection(element: HTMLElement, option: SetSelectionOptions) {
  const selection = window.getSelection()

  if (!selection?.rangeCount)
    return

  const range = document.createRange()

  const charCount = { count: 0 }
  const { startNode, endNode, startOffset, endOffset } = traverseNode(element, option , charCount)

  if (startNode && endNode && startOffset !== undefined && endOffset !== undefined) {
    range.setStart(startNode, startOffset)
    range.setEnd(endNode, endOffset)

    selection.removeAllRanges()
    selection.addRange(range)
  }
}

function traverseNode(node: Node, option: SetSelectionOptions, charCount: { count: number }): TraverseResult {
  const result: TraverseResult = {}

  if (node.nodeType === Node.TEXT_NODE) {
    const nextCharCount = charCount.count + (node as Text).length

    if (!result.startNode && option.start >= charCount.count && option.start <= nextCharCount) {
      result.startNode = node
      result.startOffset = option.start - charCount.count
    }

    if (!result.endNode && option.end >= charCount.count && option.end <= nextCharCount) {
      result.endNode = node
      result.endOffset = option.end - charCount.count
    }

    charCount.count = nextCharCount
  }

  else {
    for (const childNode of node.childNodes) {
      const childResult = traverseNode(childNode, option, charCount)

      if (childResult.startNode && !result.startNode) {
        result.startNode = childResult.startNode
        result.startOffset = childResult.startOffset
      }

      if (childResult.endNode && !result.endNode) {
        result.endNode = childResult.endNode
        result.endOffset = childResult.endOffset
      }

      if (result.startNode && result.endNode)
        break
    }
  }

  return result
}

export function setNativeSelection() {

}
export function setSelection(element: HTMLElement, option: SetSelectionOptions) {
  if (isInputOrTextarea(element))
    return setSelectionInputOrTextarea(element, option)
  else
    return setContentEditableSelection(element, option)
}

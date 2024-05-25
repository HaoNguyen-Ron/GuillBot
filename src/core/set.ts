import { isInputOrTextarea } from './utils'

interface SetSelectionOptions {
  start: number
  end: number
  direction?: 'forward' | 'backward' | 'none'
  text?: string
}

export function setSelectionInputOrTextarea(element: HTMLElement, option: SetSelectionOptions) {
  const el = element as HTMLInputElement | HTMLTextAreaElement

  el.setSelectionRange(option.start, option.end, option.direction || 'forward')
}

export function setContentEditableSelection(element: HTMLElement, option: SetSelectionOptions) {
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

        if (!startNode && option.start >= charCount && option.start <= nextCharCount) {
          startNode = node
          startOffset = option.start - charCount
        }

        if (!endNode && option.end >= charCount && option.end <= nextCharCount) {
          endNode = node
          endOffset = option.end - charCount
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
  
    if (startNode && endNode && startOffset !== undefined && endOffset !== undefined) {
      range.setStart(startNode, startOffset)
      range.setEnd(endNode, endOffset)
  
      selection.removeAllRanges()
      selection.addRange(range)

      return selection.toString()
    }
  }

  return ''
}

export function setNativeSelection() {

}
export function setSelection(element: HTMLElement, option: SetSelectionOptions) {
  if (isInputOrTextarea(element))
    return setSelectionInputOrTextarea(element, option)
  else
    return setContentEditableSelection(element, option)
}

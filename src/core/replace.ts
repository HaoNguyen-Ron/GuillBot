import { setSelectionContenteditable } from './set'
import { isInputOrTextarea } from './utils'

interface ReplaceOptions {
  start: number
  end: number
  text: string
}

export function replaceInputOrTextareaSelection(element: HTMLElement, options: ReplaceOptions) {
  const el = element as HTMLTextAreaElement | HTMLInputElement

  const value = el.value

  const { start, end, text } = options

  el.value = value.slice(0, start) + text + value.slice(end)
}

export function replaceContentEditableSelection(element: HTMLElement, options: ReplaceOptions) {
  setSelectionContenteditable(element, {
    start: options.start,
    end: options.end,
  })

  const selection = document.getSelection()
  if (!selection?.rangeCount)
    return

  const range = selection?.getRangeAt(0)

  range?.deleteContents()

  range?.insertNode(document.createTextNode(options.text))
}

export function replaceSelection(element: HTMLElement, options: ReplaceOptions) {
  if (isInputOrTextarea(element))
    replaceInputOrTextareaSelection(element, options)
  else
    replaceContentEditableSelection(element, options)
}

import { isInput, isTextarea } from "./utils"

interface SetSelectionOptions {
    start: number
    end: number
    direction?: 'forward' | 'backward' | 'none'
    text?: string
}

export function setInputSelection(element: HTMLElement, option: SetSelectionOptions) {
    const el = element as HTMLInputElement

    el.setSelectionRange(option.start, option.end, option.direction || 'forward')
}

export function setTextareaSelection(element: HTMLElement, option: SetSelectionOptions) {
    const el = element as HTMLTextAreaElement

  el.setSelectionRange(option.start, option.end, option.direction || 'forward')
}

export function setContentEditableSelection(element: HTMLElement , option: SetSelectionOptions) {
    
}

export function setNativeSelection() {

}
export function setSelection(element: HTMLElement, option: SetSelectionOptions) {
  if (isInput(element))
    return setInputSelection(element, option)
  else if (isTextarea(element))
    return setTextareaSelection(element, option)
  else
    return setContentEditableSelection(element, option)
}

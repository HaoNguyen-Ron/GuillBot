function isInput(element: HTMLElement) {
    return element.tagName === 'INPUT'
}

function isTextarea(element: HTMLElement) {
    return element.tagName === 'TEXTAREA'
}

export function isInputOrTextarea(element: HTMLElement) {
    return isInput(element) || isTextarea(element)
}
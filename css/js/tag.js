const colors = {
    p: '#388e3c',
    div: '#1565c0',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('noLabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})
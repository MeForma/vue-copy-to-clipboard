export default {
  install: (app) => {
    app.config.globalProperties.$copyText = (text) => {
      if (navigator.clipboard) {
        return navigator.clipboard.writeText(text)
      }

      const textArea = document.createElement('textarea')
      textArea.value = text

      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.position = 'fixed'

      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        document.execCommand('copy')
        document.body.removeChild(textArea)
        return Promise.resolve()
      } catch (err) {
        document.body.removeChild(textArea)
        return Promise.reject(err)
      }
    }
  }
}

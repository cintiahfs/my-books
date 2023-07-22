function downloadPDF() {
  const url = "/pdfs/conhecendo-o-jamstack.pdf"
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(blob)
      link.download = "conhecendo-o-jamstack.pdf"
      link.click()
    })
}

const target = document.getElementById('copyYear')
const currentYear = new Date().getFullYear()
const year = (currentYear === 2020)
let yearDivTxt = ''

return year ? yearDivTxt = currentYear : yearDivTxt = `2020-${currentYear}`



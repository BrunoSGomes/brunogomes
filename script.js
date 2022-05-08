function setYearsOld() {
    const yearsElement = document.querySelector('[data-info="years"]')
    const birthday = new Date('2001-01-12 00:00:00').getFullYear()
    const actualDate = new Date().getFullYear()
    const yearsOld = actualDate - birthday
    yearsElement.innerHTML = `> ${yearsOld} Years Old`
}

setYearsOld()
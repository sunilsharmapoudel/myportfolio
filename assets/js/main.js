/* Skills tabs */
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')
        })

        target.classList.add('skills_active')

        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })

        tab.classList.add('skills_active')
    })
})
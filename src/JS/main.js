const workCardInfo = () => {

    // Get element from DOM
    const workImageButton = document.querySelectorAll('.work-card__img--button')
    const workCardContent = document.querySelectorAll('.work-card__content')
    const workCardImage = document.querySelectorAll('.work-card__img')

    const switchWorkCard = (event) => {

            let img = event.target.dataset.img
        
            workCardContent.forEach(content => content.classList.remove('work-card__content--current'))
        workCardImage.forEach(img => img.classList.remove('work-card__img--current'))

        let currentContent = document.querySelector(`.work-card__content[data-card="${img}"]`)
        let buttonParent = event.target.parentNode

        currentContent.classList.add('work-card__content--current')
        buttonParent.classList.add('work-card__img--current')

    }

    workImageButton.forEach(button => {
        button.addEventListener('click', switchWorkCard)
    })
    
}

workCardInfo()
const headerBlockMenu = () => {
    const burgerBtn = document.querySelector(".main__menu-burger")
    const headerMenu = document.querySelector(".header")
    const closeMenuBtn = document.querySelector(".header__menu-close")

    burgerBtn.addEventListener('click', () => {
        headerMenu.style.display = "flex"
        burgerBtn.style.display = "none"
    })

    closeMenuBtn.addEventListener("click", () => {
        headerMenu.style.display = "none"
        burgerBtn.style.display = "block"
    })
}

headerBlockMenu()
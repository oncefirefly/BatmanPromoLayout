const trailerPlayer = () => {
    const playBtn = document.querySelector(".main__button-play")
    const modalPlayer = document.querySelector(".modal")
    const playerFrame = document.querySelector(".modal__iframe")

    playBtn.addEventListener("click", () => {
        modalPlayer.style.display = "flex"
        playerFrame.src = "https://www.youtube.com/embed/g8Y_GL5h7Fs"
    })

    window.addEventListener("click", (event) => {
        if (event.target.closest(".modal")) {
            modalPlayer.style.display = "none"
            playerFrame.src = ""
        }
    })
}

trailerPlayer()
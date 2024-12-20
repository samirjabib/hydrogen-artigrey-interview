const setupViewportHeight = () => {
    const viewportHeight = () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    viewportHeight()

    window.addEventListener('resize', viewportHeight)

    return () => {
        window.removeEventListener('resize', viewportHeight)
    }
}

export default setupViewportHeight
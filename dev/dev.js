if (sessionStorage.getItem('theme') == 'dark') {
    injectDark()
}

function toggleDarkMode() {
    theme = sessionStorage.getItem('theme')
    if (theme !== 'dark') {
        sessionStorage.setItem('theme', 'dark')
        injectDark()
    }
    else {
        sessionStorage.setItem('theme', 'light')
        injectLight()
    }
}
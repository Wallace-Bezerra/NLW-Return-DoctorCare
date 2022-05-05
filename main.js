
function onScroll() {
    if (scrollY == 0) {
        navigation.classList.remove("Scroll")
        icone.classList.remove("icone")
        logo.classList.remove("logo")
    }
    else {
        navigation.classList.add('Scroll')
        icone.classList.add("icone")
        logo.classList.add("logo")
    }

}




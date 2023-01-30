let position = 0

function start() {
    let btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        btn.remove()
        animationLeft()
        animationRight()
        animationTrass()
        autoRun()
    })
}

start()

function animationLeft() {
    let kl = document.querySelector('.kl-01')
    setInterval(function () {
        kl.style.backgroundPosition = '0 ' + position + 'px'
    }, 10)

}

function animationRight() {
    let kl = document.querySelector('.kl-02')
    setInterval(function () {
        kl.style.backgroundPosition = '0 ' + position + 'px'
    })
}

function animationTrass() {
    let trass = document.querySelector('.trass')
    setInterval(function () {
        position = position + 3
        trass.style.backgroundPosition = '0 ' + position + 'px'
    }, 10)
}

function autoRun() {
    let car = document.querySelector('.car'),
        maxWidth = window.innerWidth - 500,
        left = 0
    console.log(maxWidth)

    window.addEventListener('keydown', function (e) {
        console.log(e.key)

        if (e.key === 'ArrowLeft') {
            if (left > 0) {
                left = left - 120
                car.style.marginLeft = left + 'px'
                console.log(left)
            }
        }

        if (e.key === 'ArrowRight') {
            if (left < 240) {
                left = left + 120
                car.style.marginLeft = left + 'px'
                console.log(left)
            }
        }
    })
}

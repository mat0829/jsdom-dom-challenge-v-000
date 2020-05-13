document.addEventListener('DOMContentLoaded', () => {
  console.log("%c DOM is loaded", "color :purple")

  const pageCounter = document.querySelector('#counter')
  const pauseBtn = document.querySelector('#pause')
  const incrementBtn = document.querySelector('#plus')
  const decrementBtn = document.querySelector('#minus')
  const heartBtn = document.querySelector('#heart')
  const commentForm = document.querySelector('#comment-form')
  const commentList = document.querySelector('#commentList')
  const commentInput = document.querySelector('#comment-input')
  let numbersList = document.querySelector('#likesList')
  
  
  let iter = 0
  let pause = false
  let currentCount = 0
  let selectedNumber = 0
  let likes = 0

  function counter() {
    if (pause) {
      return
    } else {
      currentCount = pageCounter.innerHTML = (iter++)
      setTimeout(counter, 1000)
    }
  }

  counter()

  pauseBtn.addEventListener('click', event => {
    console.log(event)

    if (pause == false) {
      pause = true
      incrementBtn.disabled = true
      decrementBtn.disabled = true
      heartBtn.disabled = true
      pauseBtn.innerHTML = 'resume'
    } else if (pause == true) {
      pause = false
      incrementBtn.disabled = false
      decrementBtn.disabled = false
      heartBtn.disabled = false
      pauseBtn.innerHTML = 'pause'
      counter()
    }
  })
  
  incrementBtn.addEventListener('click', event => {
    console.log(event)

    iter = currentCount
    iter += 1
    pageCounter.innerHTML = iter
  })

  decrementBtn.addEventListener('click', event => {
    console.log(event)

    iter = currentCount
    iter -= 1
    pageCounter.innerHTML = iter
  })

  heartBtn.addEventListener('click', event => {
    console.log(event)
    let number = currentCount

    if (selectedNumber == number) {
      likes += 1
      numbersList.innerHTML += `<li> Number ${number} has ${likes} likes </li>`
    } else {
        selectedNumber = number
        likes = 0
        likes += 1
        numbersList.innerHTML += `<li> Number ${number} has ${likes} likes </li>`
    }
  })

  commentForm.addEventListener('submit', event => {
    event.preventDefault()
    debugger
    
    let li = commentInput.value
    commentList.innerHTML += `<li> ${li} </li>`
  })
})
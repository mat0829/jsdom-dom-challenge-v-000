document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.getElementById("button-play")
  const counter = document.getElementById("counter")
  const likes = document.getElementById("likes")
  const commentForm = document.getElementById("comment-form")
  const commentsList = document.getElementById("list")
  let numbersLiked = {}
  let isPaused = false

  const increment = () =>{
    counter.innerText = parseInt(counter.innerText) + 1
  }

  let executeTimer = setInterval(increment, 1000)

  const decrement = () =>{
    counter.innerText = parseInt(counter.innerText) - 1
  }

  const handleLike = (numbersLiked) =>{
    let node = document.createElement("LI");
    let number = counter.innerText
    let existingLike = likes.children.namedItem(number)

    node.id = number

    if (numbersLiked[number] === undefined) {
      numbersLiked[number] = 1
    }else {
      numbersLiked[number] += 1
    }

    if (existingLike) {
      existingLike.innerText = `${number} has been liked ${numbersLiked[number]} times.`
    }else {
      let textnode = document.createTextNode(`${number} has been liked ${numbersLiked[number]} times.`);
      node.appendChild(textnode);
      likes.appendChild(node);
    }
  }

  const handlePause = () => {
    const decrementButton = document.getElementById("-")
    const incrementButton = document.getElementById("+")
    const likeButton = document.getElementById("<3")
    const pauseButton = document.getElementById("pause")

    if (!isPaused) {
      decrementButton.setAttribute("disabled", "disabled");
      incrementButton.setAttribute("disabled", "disabled");
      likeButton.setAttribute("disabled", "disabled");
      pauseButton.innerText = "resume"

      isPaused = true
      clearInterval(executeTimer)
    } else {
      decrementButton.removeAttribute("disabled");
      incrementButton.removeAttribute("disabled");
      likeButton.removeAttribute("disabled");
      pauseButton.innerText = "pause"

      isPaused = false
      executeTimer = setInterval(increment, 1000)
    }
  }

  const handleButtons = (e) => {
    switch (e.target.id) {
      case "-":
        decrement()
        break;
      case "+":
        increment()
        break;
      case '<3':
        handleLike(numbersLiked)
        break;
      case 'pause':
        handlePause()
        break;
    }
  }
  buttons.addEventListener("click", handleButtons)

  const addComment = (comment) => {
    let node = document.createElement("P");

    node.innerText = comment;
    list.appendChild(node);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const input = e.target.querySelector("#comment-input")
    addComment(input.value)

    input.value = ""
  }
  commentForm.addEventListener("submit", handleSubmit)
});
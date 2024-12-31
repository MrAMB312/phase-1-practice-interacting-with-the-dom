// 1. Create a counter that increases by 1 each second

let counter = document.getElementById("counter");

let count = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(() => {
        count++;
        counter.textContent = count;
    }, 1000);
}

startTimer();


// 2. Add Event Listeners to the Plus and Minus Buttons that increment the counter

// minus

// plus

let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus");

function updateCounter() {
    counter.textContent = count
}

minusButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

plusButton.addEventListener("click", () => {
    count++;
    updateCounter();
})


// 3. Add Event Listener to the Like (heart) button that adds one or more "likes" for the number that is currently displayed by the timer

// heart

// likes list

let heartButton = document.getElementById("heart");
let likesList = document.querySelector(".likes");

let likes = {};

function updateLikesDisplay() {
    likesList.innerHTML = '';
    for (let num in likes) {
        let li = document.createElement("li");
        li.textContent = `${num} has been liked ${likes[num]} time(s)`;
        likesList.appendChild(li);
    }
}

heartButton.addEventListener("click", () => {
    if (!likes[count]) {
        likes[count] = 0;
    }
    likes[count]++
    updateLikesDisplay();
});


// 4. Add Event Listener to the Pause button to stop the Counter from incrementing (and allow for the paused Counter to be resumed)

// pause

let pauseButton = document.getElementById("pause");

function pauseCounter() {
    clearInterval(intervalId);
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
    pauseButton.textContent = "resume";
    pauseButton.removeEventListener("click", pauseCounter);
    pauseButton.addEventListener("click", resumeCounter)
}

function resumeCounter() {
    startTimer();
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    pauseButton.textContent = "pause";
    pauseButton.removeEventListener("click", resumeCounter);
    pauseButton.addEventListener("click", pauseCounter);
}

pauseButton.addEventListener("click", pauseCounter);


// 5. Add Event Listener to the Comment Form and create a list underneath "Comments" with each submitted comment

// comment-form

// comment-input

// submit

// comments list

let commentInput = document.getElementById("comment-input");
let commentSubmit = document.getElementById("submit");
let commentsList = document.getElementById("list");

commentSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    let commentText = commentInput.value;
    let li = document.createElement("li");
    li.textContent = commentText;
    commentsList.appendChild(li);
    commentInput.value = "";
})
const letters = [

"Letter 1: Happy Birthday ❤️",

"Letter 2: Thank you for always making me smile.",

"Letter 3: One of my favorite memories with you is...",

"Letter 4: You mean more to me than words can explain.",

"Letter 5: If I could relive one day with you...",

"Letter 6",

"Letter 7",

"Letter 8",

"Letter 9",

"Letter 10",

"Letter 11",

"Letter 12",

"Letter 13",

"Letter 14",

"Letter 15",

"Letter 16",

"Letter 17",

"Letter 18",

"Letter 19",

"Letter 20",

"Letter 21",

"Letter 22",

"Letter 23",

"Letter 24",

"Letter 25",

"Letter 26",

"Letter 27",

"Letter 28",

"Letter 29",

"Letter 30: I love you ❤️"
];

let current = 0;

const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const currentNumber = document.getElementById("currentNumber");

message.textContent = letters[current];

function updateLetter(){

    envelope.classList.remove("open");

    setTimeout(() => {

        message.textContent = letters[current];

        currentNumber.textContent = current + 1;

        envelope.classList.remove("fly-in");

        void envelope.offsetWidth;

        envelope.classList.add("fly-in");

    },300);
}

document.getElementById("openBtn").addEventListener("click",()=>{
    envelope.classList.toggle("open");
});

document.getElementById("nextBtn").addEventListener("click",()=>{

    if(current < letters.length - 1){
        current++;
        updateLetter();
    }

});

document.getElementById("prevBtn").addEventListener("click",()=>{

    if(current > 0){
        current--;
        updateLetter();
    }

});

envelope.addEventListener("click",()=>{
    envelope.classList.toggle("open");
});

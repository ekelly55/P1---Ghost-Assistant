console.log("js loaded")
console.log("fingers crossed")


//DOM variables.
const message = document.getElementById("message-display")
const title = document.getElementById("game-title")
const healthDisplay = document.getElementById("health-display")
const powerDisplay = document.getElementById("power-display")
const ageDisplay = document.getElementById("age-display")
const startButton = document.getElementById("start-button")
const candyButton = document.getElementById("candy-button")
const scareButton = document.getElementById("scare-button")
const boo = document.getElementById("ghost-talk")
const yum = document.getElementById("yum")
const noThanks = document.getElementById("no-thanks")
const pumpkin = document.getElementById("pumpkin")

console.log(pumpkin.src)

message.innerText = "Welcome to Spooky Land! As a lowly novice ghost, your job is to attend to every need of Lord Halloween, benevolent ruler of Spooky Land. His magic spooky power sustains the Spirit of Halloween and keeps all of Spooky Land happy! Feed him candy to increase his health. Use the scare button to increase his power after threats to the Spirit of Halloween. Click start to play!"
healthDisplay.innerText = `Health: 100`
powerDisplay.innerText = `Power: 100`
ageDisplay.innerText = `Age: 3000000000 years old.`
startButton.innerText = "Start"
candyButton.innerText = "Candy"
scareButton.innerText = "Scare"
interval = ""
ticks = 0


const game = {
    
    assistantLevel: 1,
    health: 100,
    age: 3000000000,
    power: 100,
    candyLevel: 100,
    threat: "",
    threatList: ["Timmy's Mom", "Timmy's Principal", "Santa"],
    
    candy: function() {
        if(game.health > 0 && game.power > 0 && game.age < 3000000049)  {
            if(game.health < 100 && game.health > 90) {
                game.health = 100
                yum.style.opacity = 1
            } else if(game.health < 100) {
                game.health = game.health + 10
                noThanks.style.opacity = 0
                yum.style.opacity = 1
            } else {
                yum.style.opacity = 0
                noThanks.style.opacity = 1
                message.innerText = `Lord Halloween is full and content. He doesn't want any candy right now`
            }
            healthDisplay.innerText = `Health: ${game.health}`
        }
    },
    
    scare: function() {
        if(game.power > 0 && game.health > 0 && game.age < 3000000049) {
        if(game.power < 100 && game.power > 90) {
            game.power = 100
        } else if(game.power < 100){
            game.power = game.power + 10
        }
            boo.style.opacity = 1;
            powerDisplay.innerText = `Power: ${game.power}`
            message.innerText = `You have stopped ${game.threat}. Lord Halloween's power is ${ game.power}`
        }
    },
    
        /*
        */
    
    runThreat: function () {
        if(game.power > -0 && game.health > 0 && game.age < 3000000049){  
        game.threat = game.threatList[Math.floor(Math.random()*game.threatList.length)]
        if(game.threat === "Timmy's Mom") {
             message.innerText =`Timmy's Mom hates Halloween! She won't let Timmy decorate the house! Her attitude is threatening the spirit of Halloween for Timmy, and Lord Halloween is losing power! Scare Timmy's Mom to counter the threat and restore Lord Halloween's power!`
             
             game.power = game.power - 50    
        } else if(game.threat === "Timmy's Principal") {
             message.innerText =`Timmy's Principal hates when kids have fun at school! They won't let the students wear costumes or have a party! Their attitude is threatening the spirit of Halloween for all the students, and Lord Halloween is losing power! Scare Timmy's Principal to counter the threat and restore Lord Halloween's power!`
             game.power = game.power - 40
             //why doesn't this threat reduce the power!?
        } else if(game.threat === "Santa") {
             message.innerText = `The War on Halloween has begun! Stores are already selling Christmas decorations and playing All I Want For Christmas! Santa is threatening the spirit of Halloween for all everyone, and Lord Halloween is losing power! Scare Santa to counter the threat and restore Lord Halloween's power!`
             game.power =  game.power - 70
        } if(game.power < 0) {
            game.power = 0
        }
        powerDisplay.innerText = `Power: ${game.power}`
        console.log(game.threat)
        console.log(game.power)
        }
    },
        /*
        */
       
       
       winOrLose: function() {
           console.log(game.power)
           if(game.health === 0) {
               message.innerText = `Game Over! The spirit of Halloween is fading away. Soon it will just be Christmas and tests all year long`
               clearInterval(interval);
            } else if(game.power <= 0) {
                message.innerText = `Game Over! The spirit of Halloween is fading away. Soon it will just be Christmas and tests all year long`
                clearInterval(interval)
            } else if(game.age === 3000000049) {
                message.innerText = `You win! Lord Halloween has reached the ripe old age of ${game.age+1}! You have sustained the spirit of Halloween for ${game.age - 2999999999} years! Click the start button to play again.`
                game.assistantLevel = game.assistantLevel + 1;
                clearInterval(interval)
                }
        }, 
    
        /*
        */
    
    ageAndHealth: function () {
        game.age =  game.age + 1
        game.health =  game.health - 10
        if(game.health < 0) {
            game.health = 0
        }
        ageDisplay.innerText = `Age: ${game.age} years old.`
        healthDisplay.innerText = `Health: ${game.health}`
    },
    
    clearMessage: function () {
    },

    pumpkinChange: function () {
        if(pumpkin.src = "game-images/eye-pumpkin.png") {
        pumpkin.src = "game-images/flame-pumpkin.png"
        pumpkin.style.size = 25%
        } else if(pumpkin.src = "game-images/flame-pumpkin.png") {
        pumpkin.src = "game-images/hand-pumpkin.png"
        } else if(pumpkin.src = "game-images/hand-pumpkin.png") {
        pumpkin.src = "game-images/eye-pumpkin.png"
        }
    },
    
    gameTimer: function() {
        game.winOrLose()
        ticks++
        boo.style.opacity = 0;
        yum.style.opacity = 0;
        noThanks.style.opacity = 1
        //console.log(ticks)
        if(ticks%1 === 0) {
            game.ageAndHealth()
        } if(ticks%5 === 0) {
            game.runThreat()
            /*
            */
        } if(ticks%10 === 0) {
            game.pumpkinChange()
        }
    },
  
    start: function() {
        game.gameTimer()
    }, 
}



//gameLevelOne.ageAndHealth()

//console.log(gameLevelOne.health)

//start button only works after reload
startButton.addEventListener("click", function () {
    interval = setInterval(game.start, 1000)
})




candyButton.addEventListener("click", game.candy)

scareButton.addEventListener("click", game.scare)

//todo tonight: easiest to hardest: change pumpkin periodically. make talk bubbles pop on screen for scare and candy, add pumpkin animation, add multiple pumpkin animations and cycle

//todo tmw: figure out how to reset game conditions on start, figure out how to reset game with start button, make a level up state: zeroth, add threats, first, have to trick or treat, second, get a variety of candy with diff values. choose what to give. third, change boo to jump scare, fourth specific scares for spec threats

//need better timing for message display. the threats come fast, so you can't really read them, or the message that comes after the scare. but if i slow it down the game becomes much less fun. one way is to make the age and health go faster so you have to monitor it closely. also, you can space out the buttons to make it harder to get between them. will need to do that in css with flexbox. two choices: fast with no time to read the messages, which is a challenge, or slow with time to read the messages, but no challenge. i guess if it's a tamagotchi game, the purpose is to keep it going long term. you don't have to watch it every second, but you can't leave it too long. otherwise, it's a speed game, not so much about taking care of LH, but keeping those numbers up. if i run it slow, need to win sooner. but in either case, maybe introduce the threats at the beginning, then say something like "threat detected: threat name" and a simpler message like "threat defeated". also, maybe a larger message display at the bottom (remember, the stats will be near the bottom) and a smaller display on the main game screen. also, the yum, and i'm full and boo can appear as talk bubbles using css, maybe animations. 

//can use timeOut for delaying a game intro screen. or to do an animation bringing the ghost in or something

//make a function to change the pumpkin on an interval

//and maybe an animation one to make the pumpkin jump or something on an interval. 

//add additonal threats: timmy's dad: raisins, timmy's neighbor: lights out, rain on halloween

//keyframes for css?
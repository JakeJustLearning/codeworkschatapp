// function respond(input) {
//     return "Hello world"
// }

// function sendMessage(that) {
//     console.log(that.message.value)
//     return false
// }


// JQUERY
// $(document).ready(function() {
//     $("#send-button").click(function() {
//         console.log("click")
//         document.getElementById('chat-form').submit(function(e) {
//             e.preventDefault()
//             console.log 
//             return false

//         })

//     });

// });

let messageContent = ''

function sendMessage(input) {
    messageContent = input.value
    console.log(messageContent)

}





$(document).ready(function() {
    document.querySelector("#text-input").addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            console.log("clicked in the form and pressed enter")

            getUserMessage()

        }
    })



    $("#send-button").click(function(e) {
        console.log("send has been clicked")

        getUserMessage()

    })

    function getUserMessage() {
        let temp = document.querySelector('#text-input').value

        postMessage(temp, 'user')
        document.querySelector('#text-input').value = ''
        getYeezy()

    }

    function postMessage(input, author) {
        console.log('posting message')
        const sendTime = new Date()
        const date = sendTime.toLocaleDateString('en-US')
        const time = (sendTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        $('#dialog-zone').prepend(
            `<p class="message ${(author == "bot")?"bot-message":"user-message"}">${input} </br>(${date} ${time}) </p>`
        )
    }

    function getYeezy() {
        fetch('https://api.kanye.rest').then(response => response.json()).then(quote => postMessage(quote.quote, 'bot'))
            // fetch method adapted from https://morioh.com/p/c57b2941ac28
    }
})
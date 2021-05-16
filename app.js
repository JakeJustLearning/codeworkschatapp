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

            let temp = document.querySelector('#text-input').value

            postMessage(temp)
            temp.value = ''
            getYeezy()
        }
    })

    function postMessage(input) {
        console.log('posting message')
        const sendTime = new Date()
        const date = sendTime.toLocaleDateString('en-US')
        const time = (sendTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        $('#dialog-zone').append(`<p>${input}  </br> (${date} ${time}) </p>`)
    }

    function getYeezy() {
        fetch('https://api.kanye.rest').then(response => response.json()).then(quote => postMessage(quote.quote))
            // fetch method adapted from https://morioh.com/p/c57b2941ac28
    }
})
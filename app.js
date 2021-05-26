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
        document.querySelector('#text-input').value = ''
            // postMessage(temp, 'user')
        $("#dialog-zone").prepend(postMessage(temp, 'user'))
        $('.message:first-child').fadeIn(500, function() {
            $("#dialog-zone").prepend(postMessage('Thank you for sharing that with me.', 'bot')).ready(function() {
                $('.message:first-child').fadeIn(500)
            })
        })

    }

    function postMessage(input, author) {
        console.log('posting message')
        const sendTime = new Date()
        const date = sendTime.toLocaleDateString('en-US')
        const time = (sendTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        return `<p style="display:none" class="message ${(author == "bot")?"bot-message":"user-message"}">${input} </br>(${date} ${time}) </p>`
    }

    // async function getYeezy() {
    //     console.log('getting yeez')
    //     const breakfast = fetch('https://api.kanye.rest')
    //         .then(
    //             res => res.json()
    //         )
    //         .then(
    //             data => $("#dialog-zone").prepend(postMessage(data.quote, 'bot'))
    //             .ready(function() {
    //                 $('.message:first-child').fadeIn(500)

    //             })
    //         )


    // }
})
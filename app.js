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
        if ((e.code === "Enter") && (document.querySelector('#text-input').value.length > 0)) {
            console.log("clicked in the form and pressed enter")

            getUserMessage()
            buttonDisabled()

        }
    })



    document.querySelector('#text-input').oninput = (i) => {
        console.log('input')
        buttonDisabled()
    }

    document.querySelector('#text-input').addEventListener('change', function() {
        console.log('change')
        buttonDisabled()
    })


    document.querySelector("#send-button").addEventListener('click', function(e) {
        console.log("send has been clicked")

        getUserMessage()
        buttonDisabled()

    })

    function buttonDisabled() {
        const btnDisabled = document.querySelector('#text-input').value.length < 1
        $('#send-button').attr('disabled', btnDisabled)
    }


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
})
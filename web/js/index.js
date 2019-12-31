$(document).ready(function(){
    // getTest(function(){
    //     getConfig(function(){
    //         onClickDashBoard(function(){
    //             checkRederection();
    //         });
    //         getNotif()
    //     });
    // });
});

function ajaxError(xhr, ajaxOptions, thrownError) {
    alert(xhr.statusText)
}


// $('#form').submit(function(event) {
//     alert( "Handler for .submit() called." );
//     event.preventDefault();
// });



// document.getElementById('target').addEventListener('submit', (e) => {
//     console.log('hhh');
// //   let messages = []
// //   if (name.value === '' || name.value == null) {
// //     messages.push('Name is required')
// //   }

// //   if (password.value.length <= 6) {
// //     messages.push('Password must be longer than 6 characters')
// //   }

// //   if (password.value.length >= 20) {
// //     messages.push('Password must be less than 20 characters')
// //   }

// //   if (password.value === 'password') {
// //     messages.push('Password cannot be password')
// //   }

// //   if (messages.length > 0) {
// //     e.preventDefault()
// //     errorElement.innerText = messages.join(', ')
// //   }
// })
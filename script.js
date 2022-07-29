const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);
function clickHandler () {
    const length = window.prompt("Enter your password length: ");
console.log(length)
    let password= "";
    for (let i= 0; i < length; i++) {
        // Runs 5 times, with values of step 0 through 4.
       password+="a"
      }
      const pw= document.getElementById("passwordResult")
      pw.innerText= password
    }


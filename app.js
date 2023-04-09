let userName = prompt("Whats your Name ? ");
let gender = prompt("Enter your Gender (Male or Female) ? ")
let age = prompt("Please Enter your Age ?");
if (parseInt(age) < 1) {
  alert("Please Enter Your Age Correctly !!");
}
let msgSkip = confirm("Would like Skip the Welocmeing Message press Cancel");

if (msgSkip ===true) {
    if (gender.toLowerCase() === "male") {
      console.log("run");
      alert(`Hello Mr ${userName} `);
    } else if (gender.toLowerCase() === "female") {
      alert(`Hello Miss ${userName} `);
    } else {
      alert(`Hello ${userName} `);
    }

    
}


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

//  Lab 6 
let ansArr = [];

function valid (ans){
  if(ans===" " || ans===""){
    return "Invalid  !!";
  }else{
    return ans;
  }
}


function moreQeu (){
  let addQus = confirm (`Would you Like To Answer More Qeustion "Press Ok If you Want"?`);
  if(addQus===true){
    let live = prompt("Where are you Live ?")
    let hobbyQeu = prompt("What's your Favorite Hobby ? ");
    let favorite = prompt("What's your Favorite Football Club ? ")

    ansArr.push(valid(live));
    ansArr.push(valid(hobbyQeu));
    ansArr.push(valid(favorite));

    //print Arr
    console.log(ansArr);
  }else{
    alert("Thank You");
  }
}



// call Function more Qeustion 

moreQeu();

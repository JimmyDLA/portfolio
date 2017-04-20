
function randomColor(){
  let rgb1 = Math.floor(Math.random() * 255);
  let rgb2 = Math.floor(Math.random() * 255);
  let rgb3 = Math.floor(Math.random() * 255);
  let rgba =  "rgba(" + rgb1 + "," + rgb2 + "," + rgb3 + "," + "0.1)";
  return rgba;
}

function time(){
  let sec = Math.floor(Math.random()* 6 + 4);
  return sec;
}

let audio = $(".audioDemo");
console.log(audio);
let mute = false;

function toggleMuteAudio(){
    audio.prop("muted",!audio.prop("muted"));
}

function sound(){
  if (mute === false) {
    document.querySelector(".muteIcon").style.backgroundImage = "url(./public/unMuteIcon.png)";
    toggleMuteAudio();
    mute = true;
  } else{
    document.querySelector(".muteIcon").style.backgroundImage = "url(./public/muteIcon.png)";
    toggleMuteAudio();
    mute = false;
  }
}

function flashingLights(){
  let temp = Math.floor(Math.random()*3);
  if(temp === 0){
    return "rgba(255,165,0,0.1)";
  }if(temp === 1){
    return "rgba(200,200,200,0.1)";
  }if(temp === 2){
    return "rgba(0,125,255,0.1)"
  }
}

function widHeight(){
  num = Math.floor(Math.random()* 400);
  if(num < 150){
    num = num + 150;
  }
  return num;
}
function yAxis(){
  posY = Math.floor(Math.random()* 90);
  return posY;
}
function xAxis(){
  posX = Math.floor(Math.random()* 90);
  return posX
}

function opacityWhole(){
  this.style.opacity = "1";
}
function opacityMinus(){
  this.style.transitionDelay = "0s";
  this.style.opacity = "0";
}

//function to create bubbles affects
function makeBub(howMany){
  for(let i = 0; i < howMany; i++) {
    let ranNum = widHeight();
    let newBubble = document.createElement("DIV")
    newBubble.className="focus focusFade";
    newBubble.id = "bubble" + i;
    newBubble.style.backgroundColor = flashingLights();
    newBubble.style.height = ranNum + "px";
    newBubble.style.width = ranNum + "px";
    newBubble.style.top = yAxis() + "%";
    newBubble.style.left = xAxis() + "%";
    newBubble.style.transitionDelay = `${i*0.1}s`;
    // newBubble.style.animationDuration = time() + "s";
    newBubble.addEventListener("mouseout", opacityWhole);
    newBubble.addEventListener("mouseover", opacityMinus);
    document.querySelector("body").appendChild(newBubble);
    newBubble.focus();
    newBubble.className = "focus";
  }
}

function addAnimation(){
  for (var i = 0; i < 45; i++) {
    bubble = document.querySelector(`#bubble${i}`);
    bubble.style.animationDuration = time() + "s";
    // console.log(bubble);
  }
}

function makeJ(){
  let myName = document.querySelector("#letterJ");
  myName.style.opacity = "1";
}
function makeI(){
  let myName = document.querySelector("#letterI");
  myName.style.opacity = "1";
}
function makeM(){
  let myName = document.querySelector("#letterM");
  myName.style.opacity = "1";
}
function makeMm(){
  let myName = document.querySelector("#letterMm");
  myName.style.opacity = "1";
}
function makeY(){
  let myName = document.querySelector("#letterY");
  myName.style.opacity = "1";
}
function makeLname(){
  let myName = document.querySelector(".lName");
  myName.style.opacity = "1";
}
function makeWebDev(){
  let myName = document.querySelector(".webDev");
  myName.style.opacity = "1";
}
function makeLine(){
  let myName = document.querySelector(".line");
  myName.style.opacity = "1";
}

// THIS IS TO MAKE HOW MANY BUBBLES
makeBub(45)

// THIS IS TO FADE IN NAME AND TITLE
setTimeout(makeJ, 1000)
setTimeout(makeI, 1500)
setTimeout(makeM, 2000)
setTimeout(makeMm, 2500)
setTimeout(makeY, 3000)
setTimeout(makeLname, 4000)
setTimeout(makeWebDev, 5000)
setTimeout(makeLine, 4500)
setTimeout(addAnimation, 4500)

//close all tabs
function closeAll(){
  if (menuOpen === 1) {
    document.querySelector(".burgerContainer").classList.toggle("change");
    document.querySelector(".ul").style.display = "none";
    menuOpen = 0;
  };
  closeAboutNav();
  closeProjectNav();
  closeContactNav();
}

//MOBILE TAB FUNCTIONS
function openAboutMobile(){
  openAbout();
  menuButton();
}
function openProjectMobile(){
  openProject();
  menuButton();
}
function openContactMobile(){
  openContact();
  menuButton();
}



// THIS IS TO OPEN/CLOSE ABOUT
let aboutOpen = 0;
  function openAbout(x){
    if((contactOpen === 0 ) && (projectOpen === 0)){
      if (aboutOpen === 0) {
        openAboutNav();
        console.log("opened about");
        console.log(aboutOpen);
      }else{
        closeAboutNav()
        console.log("closed about");
        console.log(aboutOpen);
      }
    }
    if((contactOpen === 1) || (projectOpen === 1)){
      closeContactNav();
      closeProjectNav();
      if (aboutOpen === 0) {
        openAboutNav();
        console.log("opened about");
        console.log(aboutOpen);
      }else{
        closeAboutNav()
        console.log("closed about");
        console.log(aboutOpen);
      }
    }
  }
  function openAboutNav() {
    document.querySelector(".aboutNav").style.width = "98%";
    document.querySelector(".aboutNav").style.height = "95%";
    document.querySelector(".aboutNav").style.zIndex = "3";
    document.querySelector(".aboutNav").style.top = "2vh";
    document.querySelector(".aboutNav").style.left = "1vw";
    document.querySelector(".insideAbout").style.display = "flex";
    document.querySelector(".title").style.opacity = "0";
    document.querySelector("#socialHome").style.opacity = "0";
    // document.querySelector("#socialInside").style.opacity = "1";
    document.querySelector("#about").style.color = "rgb(255, 219, 77)";
    document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0)";
    aboutOpen = 1;
  }
  function closeAboutNav() {
    document.querySelector(".aboutNav").style.width = "0%";
    document.querySelector(".aboutNav").style.height = "0%";
    document.querySelector(".aboutNav").style.zIndex = "0";
    document.querySelector(".aboutNav").style.top = "50vh";
    document.querySelector(".aboutNav").style.left = "50vw";
    document.querySelector(".insideAbout").style.display = "none";
    document.querySelector(".title").style.opacity = "1";
    document.querySelector("#socialHome").style.opacity = "1";
    // document.querySelector("#socialInside").style.opacity = "0";
    document.querySelector("#about").style.color = "rgb(200, 200, 200)";
    document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    aboutOpen = 0;
  }




// THIS IS TO OPEN/CLOSE CONTACT
let contactOpen = 0;
  function openContact(x){
    if((aboutOpen === 0 ) && (projectOpen === 0)){
      if (contactOpen === 0) {
        openContactNav();
        console.log("opened contact");
        console.log(contactOpen);
      }else{
        closeContactNav()
        console.log("closed contact");
        console.log(contactOpen);
      }
    }
    if((aboutOpen === 1) || (projectOpen === 1)){
      closeAboutNav();
      closeProjectNav();
      if (contactOpen === 0) {
        openContactNav();
        console.log("opened contact");
        console.log(contactOpen);
      }else{
        closeContactNav()
        console.log("closed contact");
        console.log(contactOpen);
      }
    }
  }

  function openContactNav() {
    document.querySelector(".contNav").style.width = "98%";
    document.querySelector(".contNav").style.height = "95%";
    document.querySelector(".contNav").style.zIndex = "3";
    document.querySelector(".contNav").style.top = "2vh";
    document.querySelector(".contNav").style.left = "1vw";
    document.querySelector(".insideCont").style.display = "flex";
    document.querySelector(".title").style.opacity = "0";
    document.querySelector("#socialHome").style.opacity = "0";
    document.querySelector("#contact").style.color = "rgb(255, 219, 77)";
    document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0)";
    contactOpen = 1;
  }

  function closeContactNav() {
    document.querySelector(".contNav").style.width = "0%";
    document.querySelector(".contNav").style.height = "0%";
    document.querySelector(".contNav").style.zIndex = "0";
    document.querySelector(".contNav").style.top = "50vh";
    document.querySelector(".contNav").style.left = "50vw";
    document.querySelector(".insideCont").style.display = "none";
    document.querySelector(".title").style.opacity = "1";
    document.querySelector("#socialHome").style.opacity = "1";
    document.querySelector("#socialInside").style.opacity = "0";
    document.querySelector("#contact").style.color = "rgb(200, 200, 200)";
    document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    contactOpen = 0;
  }



  //THIS IS TO OPEN/CLOSE PROJECTS
  let projectOpen = 0;
    function openProject(x){
      if((aboutOpen === 0 ) && (contactOpen === 0)){
        if (projectOpen === 0) {
          openProjectNav();
          console.log("opened project");
          console.log(projectOpen);
        }else{
          closeProjectNav()
          console.log("closed project");
          console.log(projectOpen);
        }
      }
      if((aboutOpen === 1) || (contactOpen === 1)){
        closeContactNav();
        closeAboutNav();
        if (projectOpen === 0) {
          openProjectNav();
          console.log("opened project");
          console.log(projectOpen);
        }else{
          closeProjectNav()
          console.log("closed project");
          console.log(projectOpen);
        }
      }
    }

function openProjectNav() {
  document.querySelector(".projNav").style.width = "98%";
  document.querySelector(".projNav").style.height = "95%";
  document.querySelector(".projNav").style.zIndex = "3";
  document.querySelector(".projNav").style.top = "2vh";
  document.querySelector(".projNav").style.left = "1vw";
  document.querySelector(".title").style.opacity = "0";
  document.querySelector("#socialHome").style.opacity = "0";
  document.querySelector(".insideProj").style.display = "flex";
  document.querySelector("#projects").style.color = "rgb(255, 219, 77)";
  document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0)";
  projectOpen = 1;
}

function closeProjectNav() {
  document.querySelector(".projNav").style.width = "0%";
  document.querySelector(".projNav").style.height = "0%";
  document.querySelector(".projNav").style.zIndex = "0";
  document.querySelector(".projNav").style.top = "50vh";
  document.querySelector(".projNav").style.left = "50vw";
  document.querySelector(".title").style.opacity = "1";
  document.querySelector("#socialHome").style.opacity = "1";
  document.querySelector(".insideProj").style.display = "none";
  document.querySelector("#projects").style.color = "rgb(200, 200, 200)";
  document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  projectOpen = 0;
}

//Hamburger button function
let menuOpen = 0;
function menuButton() {
  if ((menuOpen === 0) && (aboutOpen === 1)) {
    document.querySelector(".burgerContainer").classList.toggle("change");
    document.querySelector(".ul").style.display = "flex";
    closeAboutNav()
    menuOpen = 1;
  }
  else if ((menuOpen === 0) && (projectOpen === 1)) {
    document.querySelector(".burgerContainer").classList.toggle("change");
    document.querySelector(".ul").style.display = "flex";
    closeProjectNav()
    menuOpen = 1;
  }
  else if ((menuOpen === 0) && (contactOpen === 1)) {
    document.querySelector(".burgerContainer").classList.toggle("change");
    document.querySelector(".ul").style.display = "flex";
    closeContactNav()
    menuOpen = 1;
  }
  else if (menuOpen === 0) {
    document.querySelector(".burgerContainer").classList.toggle("change");
    document.querySelector(".ul").style.display = "flex";
    menuOpen = 1;
  }else{
    document.querySelector(".burgerContainer").classList.toggle("change");
    document.querySelector(".ul").style.display = "none";
    menuOpen = 0;
  }
}




//FUNCTION TO SUBMIT CONTACT FORM
function submitForm(){
  document.querySelector("#inputSubmit").disable = true;
  document.querySelector("#status").innerHTML = "Please wait... ";
  let formdata =  new FormData();
  formdata.append( "inputName", document.querySelector("#inputName").value);
  formdata.append( "inputEmail", document.querySelector("#inputEmail").value);
  //formdata.append( "inputSubject", document.querySelector("#inputSubject").value);
  //formdata.append( "inputMessage", document.querySelector("inputMessage").value);
  console.log(formdata);
  let ajax = new XMLHttpRequest();
  ajax.open("POST", "form.php");
  ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200){
      if(ajax.responseText == "seccuss"){
        document.querySelector("#contactForm").innerHTML = '<h2>Thanks '+ document.querySelector("#inputName").value+', your message has been sent.</h2>';
      }else{
        document.querySelector("status").innerHTML = ajax.responseText;
        document.querySelector("#inputSubmit").disable = false;
      }
    }
  }
  ajax.send( formdata );
}



  function randomColor(){
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    let rgba =  "rgba(" + rgb1 + "," + rgb2 + "," + rgb3 + "," + "0.1)";
    return rgba;
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
      num = num + 200;
    }
    return num;
  }
  function yAxis(){
    posY = Math.floor(Math.random()* 600);
    return posY;
  }
  function xAxis(){
    posX = Math.floor(Math.random()* 1150);
    return posX
  }

  function opacityWhole(){
    this.style.opacity = "1";
  }
  function opacityMinus(){
    this.style.transitionDelay = "0s";
    this.style.opacity = "0";
  }

  function makeBub(howMany){
    //create emement container here
    //for create bubbles
    for(let i = 0; i < howMany; i++) {
      let ranNum = widHeight();
      let newBubble = document.createElement("DIV")
      newBubble.className="focus focusFade";
      newBubble.id = "bubble" + i;
      newBubble.style.backgroundColor = flashingLights();
      newBubble.style.height = ranNum + "px";
      newBubble.style.width = ranNum + "px";
      newBubble.style.top = yAxis() + "px";
      newBubble.style.left = xAxis() + "px";
      newBubble.style.transitionDelay = `${i*0.1}s`
      newBubble.addEventListener("mouseout", opacityWhole);
      newBubble.addEventListener("mouseover", opacityMinus);
      // append bubble container
      document.querySelector("#main").appendChild(newBubble);
      newBubble.focus();
      newBubble.className = "focus";
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
makeBub(40)
setTimeout(makeJ, 1000)
setTimeout(makeI, 1500)
setTimeout(makeM, 2000)
setTimeout(makeMm, 2500)
setTimeout(makeY, 3000)
setTimeout(makeLname, 4000)

let open = 0;
  function openMenu(x){
    x.classList.toggle("change");
    if (open === 0) {
      console.log("opened");
      openNav();
      open = 1;
    }else{
      closeNav()
      open = 0;
      console.log("closed");
    }
  }

function openNav() {
  document.querySelector(".mainNav").style.width = "97vw";
  document.querySelector(".mainNav").style.height = "95vh";
  document.querySelector(".mainNav").style.zIndex = "3";
  document.querySelector(".mainNav").style.top = "2vh";
  document.querySelector(".mainNav").style.left = "1vw";
  document.querySelector(".title").style.opacity = "0";
  document.querySelector(".insideMenu").style.display = "flex";
  document.querySelector(".text").style.opacity = "0";
}

function closeNav() {
  document.querySelector(".mainNav").style.width = "0vw";
  document.querySelector(".mainNav").style.height = "0vh";
  document.querySelector(".mainNav").style.zIndex = "0";
  document.querySelector(".insideMenu").style.display = "none";
  document.querySelector(".title").style.opacity = "1";
  document.querySelector(".mainNav").style.top = "50vh";
  document.querySelector(".mainNav").style.left = "50vw";
  document.querySelector(".text").style.opacity = "1";
}

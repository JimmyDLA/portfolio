

  function randomColor(){
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    let rgba =  "rgba(" + rgb1 + "," + rgb2 + "," + rgb3 + "," + "0.1)";
    return rgba;
  }

  function openMenu(x){
    x.classList.toggle("change");
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
    if(num < 100){
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

  function removeNote(){
    let parent = document.querySelector(".first");
    let child = document.querySelector(".note");
    parent.removeChild(child);
  }

  let n = 0;
  function makeBub(howMany){
    //create emement container here
    //for create bubbles
    for(let i = 0; i < howMany; i++) {
      let ranNum = widHeight();
      let newBubble = document.createElement("DIV")
      newBubble.className="focus focusFade";
      newBubble.id = "bubble" + n;
      newBubble.style.backgroundColor = flashingLights();
      newBubble.style.height = ranNum + "px";
      newBubble.style.width = ranNum + "px";
      newBubble.style.top = yAxis() + "px";
      newBubble.style.left = xAxis() + "px";
      newBubble.style.transitionDelay = `${i*0.2}s`
      newBubble.addEventListener("mouseout", opacityWhole);
      newBubble.addEventListener("mouseover", opacityMinus);
      // append bubble container
      document.querySelector(".first").appendChild(newBubble);
      newBubble.focus();
      newBubble.className = "focus";
    }
  }
//after loop over append container to body
  function showBubble(){
    let bubbleID = document.querySelector("#bubble")
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
makeBub(50)
setTimeout(makeJ, 5000)
setTimeout(makeI, 5500)
setTimeout(makeM, 6000)
setTimeout(makeMm, 6500)
setTimeout(makeY, 7000)
setTimeout(makeLname, 8000)

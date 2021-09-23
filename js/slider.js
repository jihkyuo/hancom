const bannerBox = document.querySelector("#bannerBox");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const BAN1 = "";
const BAN2 = "translate(-100vw)";
const BAN3 = "translate(-200vw)";

function onclickBtn1() {
  bannerBox.style.transform = BAN1;

  paintBtn();
}

function onclickBtn2() {
  bannerBox.style.transform = BAN2;
  paintBtn();
}

function onclickBtn3() {
  bannerBox.style.transform = BAN3;
  //   console.log(BAN3);
  paintBtn();
}

function paintBtn() {
  if (bannerBox.style.transform === BAN1) {
    btn1.style.background = "rgba(0, 0, 0, 0.5)";
    btn2.style.background = "";
    btn3.style.background = "";
  } else if (bannerBox.style.transform === BAN2) {
    btn2.style.background = "rgba(0, 0, 0, 0.5)";
    btn1.style.background = "";
    btn3.style.background = "";
  } else if (bannerBox.style.transform === BAN3) {
    btn3.style.background = "rgba(0, 0, 0, 0.5)";
    btn1.style.background = "";
    btn2.style.background = "";
  }
}
paintBtn();
let moveNum = "";
autoSlide(moveNum);
function autoSlide(moveNum) {
  setInterval((moveNum) => {
    moveNum -= 100;
    bannerBox.style.transform = `translate(${moveNum}vw)`;
    paintBtn();
    console.log(moveNum);
    if (moveNum === -300) {
      moveNum = "";
      bannerBox.style.transform = "";
      paintBtn();
      console.log("reset", moveNum);
    }
  }, 2000);
}

btn1.addEventListener("click", onclickBtn1);
btn2.addEventListener("click", onclickBtn2);
btn3.addEventListener("click", onclickBtn3);

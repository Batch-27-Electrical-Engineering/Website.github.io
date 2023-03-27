let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



// const countEl = document.getElementById('count');
// updateVisitCount();
// function updateVisitCount(){
//   //we use the fetch API here to get the countAPI
//   fetch('https://api.countapi.xyz/update/hana/bag/?amount=1')
//           .then(res => res.json())
//           .then(res => {
//     countEl.innerHTML = res.value;
//   });
// }




const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/batchelectricalengineering/codepen/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}





// const navtoggle = document.getElementById('icon');
// const nav = document.getElementById('our-nav');
// navtoggle.addEventListener('click', function(e) {
//   nav.classList.toggle('tarik');
// } )

// const active = document.getElementById('active')
// const tarik = document.getElementById('tarik-2')

// active.addEventListener('click', function (e) {
//   tarik.classList.toggle('navbarr-2')
// })

// let btn = document.querySelector(".toggle-menu");
// // let ul = document.querySelector(".our-nav");
// console.log(btn);
// let ul = document.getElementById("our-nav")
// btn.onclick = function (e) {
//   ul.style.display = "flex";
//   if (e.key === "Escape") {
//     ul.style.display = "none";
//   }
// };
// const close = document.querySelector(".closee");
// close.onclick = () => {
//   tarik.classList.add("our-close");
// }
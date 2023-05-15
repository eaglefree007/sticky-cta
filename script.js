const ctaBtn = document.querySelector(".cta-btn")


const observer = new IntersectionObserver(entry => {
  const stickyCta = document.querySelector(".sticky-cta")
// console.log(stickyCta)
  // console.log(entry[0])

  if (entry[0].isIntersecting == false) {
    // console.log("unhide")
    stickyCta.classList.remove("cta-unshown");
  } else if (entry[0].isIntersecting == true) {
    // console.log("hide")
    stickyCta.classList.add("cta-unshown");
  }
},
  {
    root: null,
    threshold: 0,
  }
)

observer.observe(ctaBtn)

// quantity
const plus = document.querySelectorAll("#plus"), minus = document.querySelectorAll("#minus"),
q = document.querySelectorAll("#q")

let a = 1
console.log(plus)
plus.forEach(element => {
element.addEventListener("click", () => {
  a++
  a = (a < 10) ? "0" + a : a;
  // q.innerText = a
  q.forEach(element => {
  element.innerText = a
  console.log(a)
  })
})
  
});
minus.forEach(element => {
  element.addEventListener("click", () => {
    if (a > 1) {
      a--
      a = (a < 10) ? "0" + a : a;
      q.forEach(element => {
        element.innerText = a
      })
      console.log(a)
    }
  })
})


// minus

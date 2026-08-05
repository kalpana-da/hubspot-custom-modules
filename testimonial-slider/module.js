const track = document.querySelector(".testimonial-track"),
  cards = document.querySelectorAll(".testimonial-card"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");
let index = 0;
function v() {
  return innerWidth <= 767 ? 1 : innerWidth <= 991 ? 2 : 4;
}
function u() {
  const w = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * w}px)`;
}
next.onclick = () => {
  const m = cards.length - v();
  index = index < m ? index + 1 : 0;
  u();
};
prev.onclick = () => {
  const m = cards.length - v();
  index = index > 0 ? index - 1 : m;
  u();
};
onresize = () => {
  const m = cards.length - v();
  if (index > m) index = m;
  u();
};
u();

// Typing Effect
const typing = document.querySelector('.typing');
const words = ["Web Developer", "Designer", "Problem Solver"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typing.textContent = currentWord;
    }
    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typing.textContent = currentWord;
    }
    if (j === words[i].length + 1) { isDeleting = true; setTimeout(type, 1000); return; }
    if (j === 0 && isDeleting) { isDeleting = false; i++; if (i === words.length) i = 0; }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}
type();

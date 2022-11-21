let html = document.querySelector('html');
let logo = document.querySelector('.logo');
let clip = document.querySelector('.clip');
window.addEventListener('scroll', function(e) {
  logo.setAttribute('transform',`translate(0 ${html.scrollTop / 10 + 5})`);
  clip.setAttribute('transform',`translate(0 -${html.scrollTop / 10 + 5})`);
});

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

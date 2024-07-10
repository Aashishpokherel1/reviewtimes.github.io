let lastScrollTop = 0;
const navigationBar = document.querySelector('.navigationMain');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Downscroll code
    navigationBar.classList.remove('redBackground');
    navigationBar.classList.add('hide');
  } else {
    // Upscroll code
    navigationBar.classList.remove('hide');
    if (scrollTop === 0) {
      navigationBar.classList.remove('redBackground');
    } else {
      navigationBar.classList.add('redBackground');
    }
  }
  
  lastScrollTop = scrollTop;
});

// Initial check on page load
if (window.pageYOffset === 0) {
  navigationBar.classList.remove('redBackground');
}

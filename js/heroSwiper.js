var swiper = new Swiper(".mySwiper", {
    effect: "cards", // Set the effect to "cards" for a card-like transition
    grabCursor: true, // Show grab cursor on slide hover
    spaceBetween: 150, // Set space between slides to 50px
    slidesPerView: "auto", // Automatically adjust slides per view based on container size
    centeredSlides: true,
     // Center active slide
    loop: true, // Enable loop mode
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: true, // Continue autoplay after user interaction
    },
    pagination: {
      el: ".swiper-pagination", // Element to display pagination bullets
      clickable: true, // Enable clickable pagination bullets
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next slide navigation button
      prevEl: ".swiper-button-prev", // Previous slide navigation button
    },
    
  });
  
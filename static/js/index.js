window.addEventListener('DOMContentLoaded', () => {
  const burgers = Array.from(document.querySelectorAll('.navbar-burger'));

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const target = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      target?.classList.toggle('is-active');
    });
  });

  if (window.bulmaCarousel) {
    window.bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
    });
  }

  if (window.bulmaSlider) {
    window.bulmaSlider.attach();
  }

  const resultVideos = Array.from(document.querySelectorAll('.result-video'));

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.35 });

    resultVideos.forEach((video) => videoObserver.observe(video));
  }
});

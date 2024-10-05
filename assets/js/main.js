
// add a custom lazy loading
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  const lazyLoad = (image) => {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              lazyLoad(entry.target);
              observer.unobserve(entry.target);
          }
      });
  });

  lazyImages.forEach(image => {
      observer.observe(image);
  });
});


//fixed navbar

window.onscroll = function() {
  var navbar = document.querySelector('.my_nav');
  if (window.pageYOffset > 41) {  // Scrolls after 50px
      navbar.classList.add('fixed-top');
  } else {
      navbar.classList.remove('fixed-top');
  }
};


$(document).ready(function () {
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });
    // Footer
    $(".toggleButton").click(function () {
      // Check if the window width is less than or equal to 991px
      if ($(window).width() <= 991) {
        // Toggle the visibility of the target element using classes
        $(this).closest("div").next("ul").toggleClass("show");
        // Toggle the icon based on the presence of the 'show' class
        if ($(this).closest(".footer-item").find("ul").hasClass("show")) {
          $(this).find(".fa-plus").hide();
          $(this).find(".fa-minus").show();
        } else {
          $(this).find(".fa-plus").show();
          $(this).find(".fa-minus").hide();
        }
      }
    });
    $(this).find(".fa-plus").show();
    $(this).find(".fa-minus").hide();
});




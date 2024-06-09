// upload id proof js for register steps
$(document).ready(function () {
  $("#browse-backid").on("change", function () {
    let file = this.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
        $("#uploaded-back").attr("src", e.target.result);
        $(".uploaded-img-container-back").addClass("image-uploaded");
      };
      reader.readAsDataURL(file);
    }
  });
});


// Enable tooltips 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// wow animation setting 
new WOW().init();

//progress bar bottom to top
(function ($) {
  "use strict";
  $(document).ready(function () {
    "use strict";
    let progressPath = document.querySelector('.progress-wrap path');
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    let updateProgress = function () {
      let scroll = $(window).scrollTop();
      let height = $(document).height() - $(window).height();
      let progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    let offset = 50;
    let duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    })
  });
})(jQuery);

// review slider 
	$('.review_sliders').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

$('.slider_success_std').slick({
  centerMode: true,
  centerPadding: '290px',
  arrows: false,
  dots: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerMode: true,
        centerPadding: '220px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 770,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});


// register steps 
document.addEventListener('DOMContentLoaded', function () {
  var navListItems = document.querySelectorAll('div.setup-panel div a');
  var allWells = document.querySelectorAll('.setup-content');
  var allNextBtn = document.querySelectorAll('.nextBtn');
  var allPrevBtn = document.querySelectorAll('.prevBtn');

  allWells.forEach(function (well) {
    well.style.display = 'none';
  });

  navListItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      var currentItem = this;

      if (!currentItem.classList.contains('disabled')) {
        navListItems.forEach(function (item) {
          item.classList.remove('btn-primary', 'btn-preview'); // Remove both classes
          item.classList.add('btn-default');
        });

        currentItem.classList.add('btn-primary');
        allWells.forEach(function (well) {
          well.style.display = 'none';
        });

        target.style.display = 'block';
        target.querySelector('input:first-child').focus();
        
        // Add btn-preview class to previous steps
        var prevSteps = currentItem.parentNode.previousElementSibling;
        while (prevSteps) {
          prevSteps.querySelector('a').classList.add('btn-preview');
          prevSteps = prevSteps.previousElementSibling;
        }
      }
    });
  });

  allNextBtn.forEach(function (button) {
    button.addEventListener('click', function () {
      var curStep = this.closest('.setup-content');
      var curStepBtn = curStep.getAttribute('id');
      var nextStepWizard = document.querySelector('div.setup-panel div a[href="#' + curStepBtn + '"]').parentNode.nextElementSibling.querySelector('a');
      var curInputs = curStep.querySelectorAll('input[type="text"],input[type="url"]');
      var isValid = true;

      document.querySelectorAll('.form-group').forEach(function (group) {
        group.classList.remove('has-error');
      });

      curInputs.forEach(function (input) {
        if (!input.validity.valid) {
          isValid = false;
          input.closest('.form-group').classList.add('has-error');
        }
      });

      if (isValid) {
        nextStepWizard.removeAttribute('disabled');
        nextStepWizard.click();
      }
    });
  });

  allPrevBtn.forEach(function (button) {
    button.addEventListener('click', function () {
      var curStep = this.closest('.setup-content');
      var curStepBtn = curStep.getAttribute('id');
      var prevStepWizard = document.querySelector('div.setup-panel div a[href="#' + curStepBtn + '"]').parentNode.previousElementSibling.querySelector('a');

      document.querySelectorAll('.form-group').forEach(function (group) {
        group.classList.remove('has-error');
      });

      prevStepWizard.removeAttribute('disabled');
      prevStepWizard.click();
    });
  });

  document.querySelector('div.setup-panel div a.btn-primary').click();
});


// modal trigger  
$(document).ready(function() {
  $('.Continu_btnGrp').click(function() {
    if ($('#alumniuser').hasClass('selected')) {
      $('#Create_ActMDL').modal('show');
    } else if ($('#studentuser').hasClass('selected')) {
      $('#stepsignMDL').modal('show');
    }
  });

  $('#alumniuser').click(function() {
    $(this).addClass('selected');
    $('#studentuser').removeClass('selected');
  });

  $('#studentuser').click(function() {
    $(this).addClass('selected');
    $('#alumniuser').removeClass('selected');
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach(function (accordion) {
      var collapse = accordion.querySelector('.accordion-collapse');

      collapse.addEventListener('shown.bs.collapse', function () {
          accordion.classList.add('active');
      });

      collapse.addEventListener('hidden.bs.collapse', function () {
          accordion.classList.remove('active');
      });
  });
});

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



//  togle redmore funcanlity
function toggleModal(modalId) {
    console.log("hello world ")
    var modal = document.getElementById(modalId);
    var modals = document.querySelectorAll('.modal_2');

    modals.forEach(function(m) {
        m.style.display = 'none';
    });

    // Open or close the clicked modal
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal_2');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

//  contact form validation  
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('contactForm');

        // cleare event prvennt default if user  submit empty form 
        form?.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });

        // form validtion 
        function validateForm() {
           let name = document.getElementById('name');
           let email = document.getElementById('email');
           let subject = document.getElementById('subject');
           let message = document.getElementById('message');

            if (name.value.trim() === '') {
                showError(name, 'Please enter your name.');
                return false;
            } else {
                hideError(name);
            }

            if (email.value.trim() === '') {
                showError(email, 'Please enter your email.');
                return false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address.');
                return false;
            } else {
                hideError(email);
            }

            if (subject.value.trim() === '') {
                showError(subject, 'Please enter the subject.');
                return false;
            } else {
                hideError(subject);
            }

            if (message.value.trim() === '') {
                showError(message, 'Please enter your message.');
                return false;
            } else {
                hideError(message);
            }

            return true;
        }

        function isValidEmail(email) {
           let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

     // functio for show error message 
      function showError(input, errorMessage) {
       let parent = input.parentElement;
       let errorElement = parent.querySelector('.error-message');

            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                parent.appendChild(errorElement);
            }

            errorElement.innerText = errorMessage;
        }

    // hiding error input when user add value in input box

    function hideError(input) {
        let parent = input.parentElement;
        let errorElement = parent.querySelector('.error-message');
    
        if (errorElement) {
            // errorElement.innerText = '';
            input.addEventListener('input', function () {
                errorElement.style.display = 'none'; 
            });
        }
    }
    });


    //  register user  modal screen 
    function openModal() {
        var modal = document.getElementById('modalRegisterForm');

        $(modal).modal('show'); 
        $('.modal-backdrop').removeClass("modal-backdrop");
      }
    
      document.getElementById('registerButton')?.addEventListener('click', openModal);

      function submitFormAndCloseModal() {
    
        $('#modalRegisterForm').modal('hide');
      }

      function CloseModal(){
        $('#modalRegisterForm').modal('hide')
      }

      $("input").focus(function(){
        $(this).siblings(".error-message").hide();
     });
     $('datetimepicker').datetimepicker('clear');
     //$('datetimepicker').datetimepicker('destroy');
    

      
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

// Select all buttons under .plan
var selectPlanButtons = document.querySelectorAll('.plan button');

// Select all action buttons under modal
var selectModalNoButton = document.querySelector('.modal__actions .modal__action--negative');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {

        /*
            The correct way to do it is to add/remove class using the classList.
        */
        modal.classList.add('open');
        backdrop.classList.add('open');

        /*
        The second way to do it is to manipulate the element class.
        However, the method below will override all the other classes.
        Not the right way to do it.
        */
        // modal.className = 'open';

        /*
         The first way to do it: adding inline style
         */

        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
    });
}

if (selectModalNoButton) {
    selectModalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');

    // mobileNav.style.display = 'none';
    closeModal();
})

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
});

// We can change the inline style of the DOM element backdrop.
// backdrop.style.display = 'block';


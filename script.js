// The Cohort — site scripts
// Two small jobs: toggle the mobile menu, and give the join
// form a friendly placeholder response until it's wired to
// a real backend or service (see README).

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the menu after choosing a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Join form — placeholder behavior only.
  // This does NOT send the email anywhere yet. Connect it to
  // a form service (e.g. Formspree, Mailchimp) or your own
  // backend before relying on it. See README.md.
  var form = document.getElementById('joinForm');
  var note = document.getElementById('joinNote');

  if (form && note) {
    var defaultNote = note.textContent;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('#email').value.trim();
      if (!email) return;

      note.textContent = "You're on the list — welcome to the cohort.";
      form.querySelector('input').value = '';

      // Reset the note after a few seconds so the form is reusable
      setTimeout(function () {
        note.textContent = defaultNote;
      }, 5000);
    });
  }

});

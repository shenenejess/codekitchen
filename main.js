// SOCIAL SHARES
  document.addEventListener("DOMContentLoaded", function(event) {

  // Uses sharer.js
  // https://ellisonleao.github.io/sharer.js/#twitter
     var url = window.location.href;
     var title = document.title;
     var subject = "Read this good article";
     var via = "bootstrapC";
     console.log( url );
      console.log( title );


  //facebook
  $('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
  //twitter
  $('#share-tw').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
  //linkedin
  $('#share-li').attr('data-url', url).attr('data-sharer', 'linkedin');
  // google plus
  $('#share-gp').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
  // email
  $('#share-em').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email');

  //Prevent basic click behavior
  $( ".sharer button" ).click(function() {
    event.preventDefault();
  });

  });

// NAVBAR DROPDOWN
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

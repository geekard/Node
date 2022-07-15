// Navigation Bar

const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarlinks = document.getElementsByClassName("navbar-links")[0];
const links = document.getElementById("links");

toggleBtn.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
});

// settings

// change background color input works with color name ie: black or hex value

$("#changer").keyup(function () {
  $("body").css("background-color", "" + $("#changer").val() + "");
});

// change font color input works with color name ie: white or hex value

$("#changer-font").keyup(function () {
  $("body").css("color", "" + $("#changer-font").val() + "");
});

// Search box

function mySearchFunction() {
  // Declare variables
  var input, filter, ul, li, item, i, txtValue;
  // User Input
  input = document.getElementById("myInput");
  // Filter, makes search not case sensitive
  filter = input.value.toUpperCase();
  // Grabs the parent element by id
  ul = document.getElementById("cardlist");
  // Individual item on list
  li = ul.getElementsByTagName("li");

  // Treats lists items like an array, where each item can be accessed through      it's index
  for (i = 0; i < li.length; i++) {
    item = li[i];
    // Iterate over each list item to see if the value of the input, ignoring         case, matches the inner text or inner html of the item.
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      // Displays list items that are a match, and nothing if no match
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// gallery slides

function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlugin(4);

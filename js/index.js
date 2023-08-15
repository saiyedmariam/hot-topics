//Let,
const container = document.querySelector('.dynamic-html');
const links = document.querySelectorAll('.nav-link');

// Function for loading requested partial
const loadContent = async (urlFeed) => {
   try {
      const response = await fetch(urlFeed);
      if (response.ok) {
         const data = await response.text();
         container.innerHTML = data;
      } else {
         console.error('Error loading content:', response.status);
      }
   } catch (err) {
      console.error('Error:', err);
   }
};

// Function for handling partial selection
const selectContent = (event) => {
   event.preventDefault();
   links.forEach(link => {
      link.classList.remove('active');
   });

// Adding active class
   const clickedLink = event.target;
   clickedLink.classList.add('active');

// Attribute for href link
   const urlFeed = clickedLink.getAttribute('href');

// Function to load url content
   loadContent(urlFeed);
};

//SelectContent as the event handler
links.forEach(link => {
   link.addEventListener('click', selectContent);
});

//Partials load content
loadContent('./partials/home.html');
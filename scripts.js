// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projects.forEach(project => {
      if (filter === 'all' || project.getAttribute('data-category') === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });   
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 200,
});


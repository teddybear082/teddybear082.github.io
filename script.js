function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showBlog() {
  document.getElementById('features').style.display = 'none';
  document.getElementById('commands').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
  document.getElementById('blog').style.display = 'block';
}function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showBlog() {
  document.getElementById('features').style.display = 'none';
  document.getElementById('commands').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
  document.getElementById('blog').style.display = 'block';
}

function expandArticle(articleId) {
  const articles = document.querySelectorAll('#blog article');
  articles.forEach(article => {
    if (article.id === articleId) {
      article.style.border = '2px solid #4CAF50';
      article.querySelector('.article-content').style.display = 'block';
    } else {
      article.style.border = 'none';
      article.querySelector('.article-content').style.display = 'none';
    }
  });
}function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showBlog() {
  document.getElementById('features').style.display = 'none';
  document.getElementById('commands').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
  document.getElementById('blog').style.display = 'block';
}

function expandArticle(articleId) {
  const articles = document.querySelectorAll('#blog article');
  articles.forEach(article => {
    if (article.id === articleId) {
      article.style.border = '2px solid #4CAF50';
      article.querySelector('.article-content').style.display = 'block';
    } else {
      article.style.border = 'none';
      article.querySelector('.article-content').style.display = 'none';
    }
  });
}

function showFeatures() {
  document.getElementById('features').style.display = 'block';
  document.getElementById('commands').style.display = 'block';
  document.getElementById('skills').style.display = 'block';
  document.getElementById('blog').style.display = 'none';
}

const navigationLinks = document.querySelectorAll('nav a');
navigationLinks.forEach(link => {
  link.addEventListener('click', function() {
    navigationLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});


document.addEventListener('DOMContentLoaded',function(){
  var nav = document.getElementById('siteNav');
  var btn = document.getElementById('navToggle');
  if(btn && nav){
    btn.addEventListener('click',function(){
      var expanded = nav.classList.contains('open');
      nav.classList.toggle('open', !expanded);
    });
  }
  // Theme handling: prefer localStorage, then system preference
  var themeToggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  function applyTheme(t){
    if(t === 'dark') document.documentElement.classList.add('theme-dark');
    else document.documentElement.classList.remove('theme-dark');
  }
  if(stored){
    applyTheme(stored);
  } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    applyTheme('dark');
  }
  if(themeToggle){
    themeToggle.addEventListener('click', function(){
      var isDark = document.documentElement.classList.contains('theme-dark');
      var next = isDark ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});

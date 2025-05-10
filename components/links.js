document.addEventListener('DOMContentLoaded', () => {
const links = [
    {name:"5.1", url:"pages/5.1.html"},
    {name:"5.2", url:"pages/5.2.html"},
    {name:"5.3", url:"pages/5.3.html"},
    {name:"5.4", url:"pages/5.4.html"},
    {name:"5.5", url:"pages/5.5.html"},
];
const container = document.getElementById('nav-links');

links.forEach(post => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = post.url;
  a.textContent = post.title;
  a.className = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  li.appendChild(a);
  container.appendChild(li);
});
});
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  
    document.querySelectorAll('.bottom-nav button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('nav-' + id).classList.add('active');
  }
  
  function addCard() {
    const text = prompt("Введите текст карточки:");
    if (text) {
      const div = document.createElement('div');
      div.className = 'card';
      div.textContent = text;
      document.querySelector('.card-list').appendChild(div);
    }
  }
  
let chats = []

function sendMessage(nickname="zhenyaHD") {
  var textArea = document.getElementById('inputMessage');
  if (textArea.value != "") {
  	var text = textArea.value;
  	textArea.value = "";

  	var chatWindow = document.getElementById('chatWindow');
    if (chatWindow.innerHTML != "") {
  	 chatWindow.innerHTML += "<br><br>" + nickname + ":" + "<br>" + text;
    } else { chatWindow.innerHTML += nickname + ":" + "<br>" + text; }

    var reply = getAIReply();
    chatWindow.innerHTML += reply;
  }
}

function getAIReply() {
  return "<br><br>AI:<br>Какой-то ответ от языковой модели"
}

function createNewChat() {
  fetch('/creationChat')
  .then(res => res.text())
  .then(html => {
    document.getElementById('form').innerHTML = html;
  });

/*  var btn = document.createElement('button');
  btn.innerText = 'Новый чат';
  btn.classList.add("chatButton");

  document.body.appendChild(btn)
  var chatList = document.getElementById('chatList');
  chatList.appendChild(btn);*/
}

/*const dialog = document.getElementById("myForm");

openBtn.addEventListener("click", () => {
  dialog.showModal(); 
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {};
  // Заполнить объект данными из полей формы...

  fetch("url", {
    method: "POST",
    body: JSON.stringify(data) 
  })  
  .then(res => res.json())
  ...
}); */

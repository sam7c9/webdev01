let clients = [];

const addClient = (ev) => {
  ev.preventDefault(); //to stop the form submitting//
  let client = {
    id: Date.now(),
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    question: document.getElementById('question').value
  }
  clients.push(client);
  document.querySelector('form').reset(); //to clear the form for the next entries//

  //for display purposes only
  console.warn('added',{clients});

  //saving to localStorage//
  localStorage.setItem('MyClientList', JSON.stringify(clients) );
}; //should use CRM to store client data//

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addClient);
})

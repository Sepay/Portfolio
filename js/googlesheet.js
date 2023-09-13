const scriptURL = 'https://script.google.com/macros/s/AKfycbxokCkXvLnc5tjcg2Aer85QKfnEgvMOR2V2WK2_q1wsmCWn4AbMbIPIjzU5V0iLDBsk2A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 500);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validando se os campos estão preenchidos
  if (!fullname || !email || !message) {
      event.preventDefault(); // Impede o envio do formulário
  } else {
      alert('Mensagem enviada com sucesso!');
  }
});

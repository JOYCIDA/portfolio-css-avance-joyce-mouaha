document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        alert("Gloire à Dieu pour ce projet : " + card.innerText);
      });
    });
  });
  
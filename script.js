// Sélectionne les éléments HTML
const taskList = document.getElementById("task-list");

// Crée un champ de saisie
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Ajouter une tâche";
document.body.insertBefore(input, taskList);

// Crée un bouton pour ajouter une tâche
const button = document.createElement("button");
button.textContent = "Ajouter";
document.body.insertBefore(button, taskList);

// Quand on clique sur le bouton, on ajoute une tâche
button.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    // Ajoute un bouton pour supprimer
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    li.appendChild(deleteBtn);

    // Supprimer la tâche quand on clique sur le bouton ❌
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
  }
});

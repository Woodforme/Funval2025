// Seleccionar elementos del DOM
const userContainer = document.querySelector("#users-container");
const errorMessage = document.querySelector("#error-message");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    userContainer.innerHTML = '';
    data.forEach((user) => {
      userContainer.innerHTML += `
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><strong>Name: </strong>${user.name}</h3>
          <p class="font-normal text-gray-700"><strong>Username: </strong>${user.username}</p>
          <p class="font-normal text-gray-700"><strong>E-mail: </strong>${user.email}</p>
          <p class="font-normal text-gray-700"><strong>Company-Name: </strong>${user.company.name}</p>
        </div>
      `;
    });
    
  } catch (error) {
    console.error("Error fetching users:", error);
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Problema con la base de datos. Inténtalo de nuevo más tarde.";
  }
}
document.addEventListener("DOMContentLoaded", fetchUsers);
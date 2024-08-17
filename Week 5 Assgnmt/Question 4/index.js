
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  
function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    data.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      dataContainer.appendChild(postElement);
    });
  }
  

fetchData();
    

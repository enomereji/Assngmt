
const statusElement = document.getElementById('status');
const checkStatusButton = document.getElementById('checkStatus');

function changeBackgroundColor(response) {
    if (response === "failed") {
      statusElement.style.backgroundColor = "red";
    } else if (response === "successful") {
      statusElement.style.backgroundColor = "green";
    } else {
      console.log("Invalid response");
    }
  }
  
function checkStatus() {
    const response = "failed"; // or "successful"
    changeBackgroundColor(response);
  }

checkStatusButton.addEventListener('click', checkStatus);

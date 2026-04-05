function toggleDetails() {
    var details = document.getElementById("loanDetails1");
    
    // Toggle the display property
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  function toggleDetails() {
    var details = document.getElementById("loanDetails2");
    
    // Toggle the display property
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  function toggleDetails() {
    var details = document.getElementById("loanDetails1");
    
    // Toggle the display property
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  function toggleDetails() {
    var details = document.getElementById("loanDetails1");
    
    // Toggle the display property
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  function toggleDetails() {
    var details = document.getElementById("loanDetails1");
    
    // Toggle the display property
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

// Get the modal

const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

openButton.addEventListener("click", () =>{
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})



modal.addEventListener("click", e =>{
    const dialogDimensions = modal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ){
        modal.close()
    }
})

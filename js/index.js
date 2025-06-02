"use strict";


function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.style.transform = 'translateX(0)'; 
    }, 10);
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = 'translateX(100%)'; 
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
}
function toggleFaqs() {
    const disclosures = document.querySelectorAll(".disclosure");
    disclosures.forEach((disclosure) => {
        const question = disclosure.querySelector(".disclosure-question");
        const answer = disclosure.querySelector(".disclosure-answer");
      
        question.addEventListener("click", () => {
          answer.classList.toggle("active");
      
          const icon = question.querySelector(".chevron-icon");
          if (answer.classList.contains("active")) {
            icon.style.transform = "rotate(180deg)";
          } else {
            icon.style.transform = "rotate(0deg)";
          }
        });
      });
}


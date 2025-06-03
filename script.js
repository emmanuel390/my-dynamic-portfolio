// Dark Mode
const toggle = document.getElementById('dark-mode-toggle');
function updateToggleText(){
    if(
        document.body.classList.contains('dark-mode')
    ){
        toggle.textContent='🔆';
    }else{
        toggle.textContent='🌙';
    }
}
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    updateToggleText();
});
updateToggleText();

// Fetch data from json file
fetch("data/portfolio_items.json")
  .then((response) => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((projects) => {
    const container = document.getElementById("my-projects");
    // Check if the container element exists
    if (!container) {
      console.error("Error: Element with ID 'my-projects' not found.");
      return;
    }

    const style = document.createElement('style');
    style.textContent = `
      .project {
        background-color: #f5f5f5;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 24px;
        transition: transform 0.3s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease;
      }

      

      .project h1 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #000000;
        transition: color 0.3s ease;
      }

      .project p {
        color: #000000;
        margin-top: 8px;
        transition: color 0.3s ease;
      }

      .project a {
        display: inline-block;
        margin-top: 16px;
        padding: 8px 16px;
        background-color: #3b82f6;
        color: #ffffff;
        border-radius: 6px;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out;
      }
        .project a:hover {
        transform: scale(1.05);
      }


      body.dark-mode .project {
        background-color: #121212;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      }

      body.dark-mode .project h1 {
        color: #ffffff;
      }

      body.dark-mode .project p {
        color: #ffffff;
      }

      body.dark-mode .project a {
        background-color: #4299e1;
      }
      body.dark-mode a:hover {
        transform: scale(1.05);
      }

      }
    `;
    document.head.appendChild(style);


    projects.forEach((project) => {
      const div = document.createElement("div");
      div.className = "project"; // Assign the vanilla CSS class

      // Removed Tailwind classes from inner HTML, now relying on the .project selector
      div.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">View Project</a>
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => console.error("Error fetching project data:", error)); // Improved error message


// // script.js

// // Task 1: Dynamic Year
// [span_3](start_span)const currentYearSpan = document.getElementById('current-year');[span_3](end_span)
// [span_4](start_span)currentYearSpan.textContent = new Date().getFullYear();[span_4](end_span)

// // Task 2: Skill Description Interaction
// const skillButtons = document.querySelectorAll('.skill-btn');
// [span_5](start_span)const skillDescription = document.getElementById('skill-description');[span_5](end_span)

// [span_6](start_span)const skillInfo = {[span_6](end_span)
//     [span_7](start_span)"HTML": "HTML (HyperText Markup Language) is the backbone of all web pages, defining their structure.",[span_7](end_span)
//     [span_8](start_span)"CSS": "CSS (Cascading Style Sheets) is used to style the visual presentation of web pages, making them look great!",[span_8](end_span)
//     [span_9](start_span)"JavaScript": "JavaScript is a programming language that enables interactive web pages, allowing complex features and dynamic content."[span_9](end_span)
// };

// skillButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const skill = button.dataset.skill; // Get the 'data-skill' attribute
//         skillDescription.textContent = skillInfo[skill];
//         skillDescription.style.color = '#0056b3'; // Change text color on interaction
//     });
// });

// // Task 3: Dark Mode Toggle
// [span_10](start_span)const themeToggleBtn = document.getElementById('themeToggle');[span_10](end_span)
// [span_11](start_span)const body = document.body;[span_11](end_span)

// [span_12](start_span)themeToggleBtn.addEventListener('click', () => {[span_12](end_span)
//     [span_13](start_span)body.classList.toggle('dark-mode');[span_13](end_span)
//     // Save user preference (optional, but good practice)
//     if (body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'dark');
//     } else {
//         localStorage.setItem('theme', 'light');
//     }
// });

// [span_14](start_span)// Apply saved theme on page load[span_14](end_span)
// [span_15](start_span)window.addEventListener('load', () => {[span_15](end_span)
//     [span_16](start_span)if (localStorage.getItem('theme') === 'dark') {[span_16](end_span)
//         [span_17](start_span)body.classList.add('dark-mode');[span_17](end_span)
//     }
// });

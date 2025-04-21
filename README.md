# Programming Hero Assignment-6

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)

This project is an interactive web application developed as the **sixth milestone assignment** for the **Programming Hero Web Development Course (Level 1)**. It heavily utilizes **JavaScript** to interact with an external **API**, fetch data asynchronously, and dynamically update the webpage content. Styling is handled by **Tailwind CSS** and **DaisyUI**.

**Live Demo:** [https://demo-js-api-site.netlify.app/](https://demo-js-api-site.netlify.app/)

## About The Project

"English Janala" is a simple vocabulary learning platform where users can browse different levels of English lessons. The application:

*   Presents a simulated login screen.
*   Fetches available lesson categories (levels) from the Programming Hero API.
*   Displays buttons for each lesson category dynamically.
*   Allows users to click a category to load vocabulary words specific to that level, fetched from the API.
*   Shows word cards with basic meaning and pronunciation.
*   Includes a modal (popup) to display detailed information about a selected word (example sentence, synonyms, etc.), also fetched from the API.
*   Provides visual feedback like loading indicators while data is being fetched.
*   Includes an FAQ section using DaisyUI collapse components.
*   Offers smooth scrolling navigation.

## Assignment Context

*   **Course:** Programming Hero Web Development Course (Level 1)
*   **Milestone/Assignment:** 6
*   **Objective:** To practice **fetching data from an external API** using JavaScript (`fetch`), handling **asynchronous operations** (Promises), parsing JSON data, and dynamically updating the DOM based on the API response.
*   **Requirement:** Build an interactive application that consumes at least two different API endpoints, displays fetched data, and provides a user-friendly interface for interaction.

## Technologies Used

*   **HTML5:** For the basic structure.
*   **CSS3:** Primarily via frameworks:
    *   **Tailwind CSS:** Utility-first framework.
    *   **DaisyUI:** Component library for Tailwind.
    *   **Font Awesome:** For icons.
    *   Custom CSS (for font imports and minor styles).
*   **JavaScript:** For:
    *   **API Interaction:** Using the `fetch` API to make GET requests.
    *   **Asynchronous Programming:** Handling Promises (`.then()`).
    *   **JSON Parsing:** Converting API responses.
    *   **DOM Manipulation:** Dynamically creating/updating lesson buttons, word cards, modal content, handling loading states.
    *   **Event Handling:** Button clicks for login, category selection, word details, logout.
    *   **Conditional Logic:** Handling empty data responses from the API.
    *   **Basic User Simulation:** Login/Logout visibility toggling.
*   **External API:** [Programming Hero OpenAPI](https://openapi.programming-hero.com/) (specifically `/api/levels/all`, `/api/level/{level_no}`, `/api/word/{word_id}`).

## Features

*   **API Integration:** Fetches lesson categories and word details.
*   **Dynamic Content Loading:** Page content changes based on API data and user interaction without full page reloads.
*   **Asynchronous Operations:** Handles network requests smoothly using `fetch` and Promises.
*   **DOM Manipulation:** Creates and modifies HTML elements dynamically using JavaScript.
*   **Interactive UI Components:** Uses DaisyUI modals and accordions (collapse).
*   **User Feedback:** Displays loading spinners during API calls and messages for empty categories.
*   **Simulated Login:** Simple mechanism to show/hide content sections.
*   **Active State Indication:** Highlights the currently selected lesson category button.
*   **Responsive Design:** Leverages Tailwind CSS and DaisyUI for adaptability.

## How To View

1.  **Live Demo:** Click the link provided above: [Live Demo](https://demo-js-api-site.netlify.app/)
    *   *Use Name: (any name), Password: `123456` to "log in". Explore different lesson categories and view word details.*
2.  **Locally:**
    *   Clone the repository:
        ```bash
        git clone https://github.com/MahinAnowar/demo-js-api-site.git
        ```
    *   Navigate to the project directory:
        ```bash
        cd demo-js-api-site
        ```
    *   Open the `index.html` file in your web browser.

## Author

*   **Mahin Anowar** - [MahinAnowar](https://github.com/MahinAnowar)

---

*This project demonstrates competence in using JavaScript to interact with external APIs and dynamically manipulate web content, meeting the core requirements of the assignment.*

React Project: Simple Navbar, Hero Section & Footer

For Live Demo: https://musabrehman03.github.io/React-HeroSection-Cards/

Project Overview:

This is a simple React project featuring a responsive Navbar, a Hero Section with dynamically rendered cards, and a Footer. The card data is stored in App.jsx and passed down as props to the HeroSection and Card components.

Features:

* Navbar with a logo, three links, and a button.
* Hero Section with three cards, receiving dynamic data via props.
* Footer with basic information.
* Component-based structure for better readability and maintainability.

Tech Stack:

* React.js (Frontend Framework)
* CSS / Tailwind CSS (For styling)

 Installation & Setup:

1. Clone the repositorygit clone https://github.com/MusabRehman03/react-navbar-hero-footer.git
2. Navigate to the project foldercd react-project
3. Install dependenciesnpm install
4. Start the development servernpm start

Component Breakdown:

App.jsx
* Stores the card data as an array and passes it to HeroSection.
Navbar.jsx
* Contains a logo, 3 navigation links, and a CTA button.
HeroSection.jsx
* Receives data from App.jsx and maps it to Card components.
Card.jsx
* Displays title, description, and image received via props.
Footer.jsx
* A simple footer section with copyright info.



# Coding Temple SE Assignment: Recreate Your Favorite Website Using Bootstrap and JavaScript [Helen Park]

To recreate an existing website using Bootstrap and JavaScript.

# Notion.com

Recreation of parts of the Notion homepage, and login page.

## index.html

### <nav>
- Responsive navigation bar that collapses links at <1200px viewport width and instead shows hamburger menu that links to offcanvas (bootstrap) menu for smaller screens.
  - Top nav bar is fixed to the top of screen and when page content is scrolled, box-shadow is applied to the nav bar (Javascript - main.js).

#### <nav> Sub-nav using Collapse (bootstrap)
- Full navigation bar has a dropdown (bootstrap - collapse) sub-nav menu that opens on mouse enter (on link and while on subnav) and closes on mouse exit with delay (Javascript - main.js).
  - While sub-nav is open the arrow icon next to link changes to arrow pointing up and otherwise points down (Javascript - main.js).
 
#### <nav> Offcanvas (bootstrap)
- The hamburger menu icon changes to x-icon while offcanvas menu is open (Javascript - main.js).
- Offcanvas nav closes automatically when viewport is resized to >= 1200 (Javascript - main.js).
- Collapsable links ("Notion" and "More"), when open, will gray out other links (Javascript - main.js).

### Homepage Hero Section
- Uses bootstrap classes for flexboxes to create a responsive hero section.

### Bento Grid Section using Cards (bootstrap)
- Product descriptions made using bootstrap's card classes and row/column structure to create a responsive grid.

### Customer Stories Section 
- Tried to fit in the use of the <table> element to structure customer testimonials.
  - I only used <table> here to meet assignment requirements. It would have been better to use grid or flexboxes for this content.

### <footer>
- Uses bootstrap classes to create a responsive footer.

## login.html
- Includes a single form for user input with an email input type, and a text input type for the verification code.
- Uses bootstrap's javascript for form validation (Javascript - form-validation.js).

## sass / css
- Downloaded Bootstrap's npm packaged to be able to use sass and live sass compiler in VS Code to customize bootstrap's default variables to match Notion's brand.
- Mixing custom css, bootstrap's css, and customizing bootstrap's variables became confusing and unorganized. I thought that using custom css instead of bootstrap classes would have made the code cleaner.

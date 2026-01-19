# Design Document

This is a design document for a portfolio website for a Softare Engineer. Here I will describe all aspects of how the website should look and opperate. This should be created using react with typescript, and using vite as the build tool. The page should be deployable as a github.io page.

Theme: 

Modern minimal black and white. Appropriate solid colors is applied to tags/buttons/bullet points add life to the mimimal look. Overall the theme should be consistent and professional. Tasteful hover shadows and minimal borders should also be applied through out with out going overboard.

Font: Arial, plus some universially supported font as a backup

Layout: The website is a simple single page. The page should work with varying screen sizes. I have described how some of the resizing should be handled below, but your good judgement should be used where I have not. Like the theme the layout should be consistent and professional.

Main page sections: About, Experience, Skills, Projects

1. Menu/nagivation bar at the top of the page
    - Clicking menu bar buttons should scroll to corresponding area on the page
    - Buttons should highlight on hover and have sillhoette icons next to the text
    - Buttons should be centered horizontally together
    - Menu bar should stick to the top of the screen as the page scrolls
    - Menu bar should turn into a hamberger menu when the screen is too small too support the full bar
    - Menu bar should have a thin bottom border dividing line which matches the width of the main section

2. About section
    - Name, and aspiring job title with 
    - Should contain a few sentences or a small paragraph summarising my skills and experience
    - A box for a professional photo
    - Buttons linking to my linkedin and github
    - Small area for naming key skills/programming languages/tools
    - Add an animation to the aspiring job title, like a cursor box expansion surrounding it to create a border

3. Experience
    - Contains a vertical timeline of my work experience and education
    - The timeline should have space for a few bullet points explaining what I achieved with in each experience
    - Add a descrete animation when scrolling through this section

4. Skills
    - Section comprised of languages and tools I know with logos
    - Should be arranged in a grid

5. Projects
    - Section comprised of a grid of cards for showing my personal projects which direct to my github repos when clicked on
    - Cards contain space for a sentence or two, image and tags

6. Footer
    - Typical footer inline with the rest of the page

If there is anything important you believe I have missed add it in inline with the theme and design. However do not add an email contact message box. keep generated documentation to the readme with essential information only. Code should be organised into components with corresponding unit tests and css files following coding best practises.
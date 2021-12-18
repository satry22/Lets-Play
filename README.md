# Saras Pets

![All Devices](docs/Screenshot-alldevices.png)

Rock, Paper, Scissors, Lizard, Rock is a game that has been played for many years. This is an evolved version. The player plays the computers random choice.

## User Experience

- __Design__

  - The design is simplistic and uses colors to easier differentiate the different choice buttons. It has a small navigation menu and it is easy to go back and forth between the Game page and the Rules page.
  - The fonts are easy to read and contribute to a better user experience.

- __Visual Idea__
  - Wireframes were created by hand with pen and paper.
  - The ideas for the project came from Code Institute suggestion of a Rock, paper, Scissors game.

- __User Stories__

- As a user I want to know what the page is about.

- As a user I want to navigate between pages.

- As a user I want be able to easily understand what the game is and what are the rule.

- As a user I want to be able to see the scores kept during a game.

## Features 

- __Navigation Bar__

  - At the top of the pages, the responsive navigation bar includes links to the Game page, the Gallery and a Rules page. It is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate between pages across all devices without having to revert back to the previous page via the ‘back’ button. 

![Navbar](docs/screenshot-header.png)

- __The Header__

  - The main image is an icon, a visual display of the games and its rules. 
  - This section introduces the user to what the game is.

![Main image](docs/Screenshot-mainimage.png)

- __The Rules__

  - This section present rules of the game. The user will learn what actions are the winning actions, and what are thee losing action..

![All Pets](docs/Screenshot-allpets.png)

- __The Game Section__

  - The Game section features five buttons. Each button represent a hand sign to be chosen by the user, and that choice triggers the computer to make a random choice of hand sign.  
  - The Game section includes a counter to able the user to see how many wins and losses they have.

![Birthdays](docs/Screenshot-birthdays.png)

- __The Footer__ 

  - The footer section includes links to social media sites for all the pets, viewing through the eyes of one of the dogs. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Social Networks](docs/Screenshot-socialnetworks.png)

- __Gallery__

  - The gallery will provide the user with images to see what the newsletter and social media can look like. 
  - This section is valuable to the user as they will be able to easily identify the types of images posted on social media. 

![Gallery](docs/Screenshot-gallery.png)
![Screenshot](docs/screenshot-gallery1.png)
![Screenshot](docs/screenshot-gallery2.png)

- __The Sign Up Page__

  - This page will allow the user to get signed up to a weekly newsletter about the pets. The user will be able to choose if they want information on the dogs, the cats or both categories. The user will be asked to submit their full name and email address. 

![Sign Up](docs/Screenshot-signup.png)
![screenshot](docs/screenshot-signup1.png)
![screenshot](docs/screenshot-signup2.png)

- __The Thank You page__

- A thanks is given to the user as a confirmation on their signing up for the newsletter.

![Thanks](docs/screenshot-thankyou.png)
![screenshot](docs/screenshot-thankyou1.png)
![screenshot](docs/screenshot-thankyou2.png)

### Features Left to Implement

- A page with contact information.
- A page with a Facebook update.
- A blog, where the user can read about day-to-day happenings with the pets.

## Technology

- Used for creating my project:
  - Google Chrome web browser
  - GitPod for developing the code
  - GitHub for deploying the project
  - HTML code
  - CSS for styling
  - FontAwesome web page for icons
  - Pexels web page for images
  - DevTools for developing the code

## Testing

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

  - Performance tested in Lighthouse:

  ![Performance](docs/Screenshot-performance.png)

  - Tested for Iphone X, Ipad, Motorola G4, Galaxy S5, Galaxy Fold, Pixel 2XL.
  ![Testing](docs/testing1.png)
  ![Testing](docs/testing2.png)
  ![Testing](docs/testing3.png)

  - Supported screens: Google Chrome, Safari.
  

### User Stories Testing

- As a user I want to know what the page is about.
  - The Title and the cover text of the page shows who I am and what my page is about.

  ![title](docs/screenshot-title.png) 
  ![CoverText](docs/screenshot-covertext.png)

- As a user I would like to know more about Saras Pets.
  - The page is easily navigated with a sticky navigation bar, to view content of the page.

- As a user I want to navigate between pages.
  - Navigation links are at the top right. The page the user is on is identified by the underlined border on each link as the click through the website. Navigation is made easy at any par6t of the page, with a navigation bar that follows.

- As a user I want be able to view images of Saras pets.
  - When the user navigates to the Galley page the images of my pets are clearly laid out and visible to the user.

- As a user I want to be able to sign up for a newletter to be caught up on what is new.
  - The Sing Up page is laid out with a from in the center of the page under the Nav Bar. The user can fill out name and email address. There are radio buttons where the user can choose what animals they prefer, or both. Once Submit button is clicked, the user will be directed to a Thank You- page for confirmation.

- As a user I want the social media links to work.
  - Social media links work and are opened in a new window.

### Unfixed Bugs

- No bugs unfixed. 

- I had a issue with my cards staying in a row when I wanted them to go to 2 and then 1 across.
  The problem was fixed with media queries changing their flex-basis and using wrap.

## Deployment

- To develope my project i opened repo in gitpod, first with the green button and then reopened the workspace from gitpod.io/workspaces.
Made changes to files and saved them
Did a `git add .`
Did a `git commit -m "message"`
Did a `git push` to push my work into GitHub.

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a display to indicate the successful deployment. 

The live link can be found here - https://satry22.github.io/My-Pets/index.html 


## Credits 

  - Google fonts Quicksand and Open Sans was used on the entire page.
  - AwesomeFonts provided icons to Social Media Links and Birthdays.
  - W3School has been used for instruction and ideas for the overall page.
  - Basic structure inspiration from Love Running project.
  - Tutorials and instruction to form from The Code Institute.

### Content 

- All content written by Sara Tryzell.

### Media

- Images taken from [Pexels](https://pexels.com):
  Main Photo by Japheth Mast
  Black cat Photo by cottonbro
  Red cat Photo by Valeria Boltneva
  Cane Corso Photo by Vlad Chețan
  Yorkshire terrier Photo by Daria Rem
  Birthdays Photo by David Jakab
  Photo by Andrea Piacquadio

- All other photos are private. 


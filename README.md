# Task description
Create Angular directive for lazy loading images.

# Steps and rules
1. Create an Angular application using Angular CLI
2. Add some dummy content
3. Fetch images using this endpoint:
https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10
4. Use fetched data to add the images  
    a. Create 3 column, images grid layout, using modern CSS techniques  
    b. Content should be centered with maximum width of 1200px  
    c. Please make it responsive, choose any breakpoints and techniques you like
5. Create a directive for lazy loading images  
    a. Images should load 200px before they enter viewport, preferably that offset
should be easily customizable  
    b. Before the image is loaded there should be a loader to indicate that the
image is loading  
    c. The loader should have a CSS animation of your choice  
    d. Bonus points for making images fade in smoothly  
    e. Bonus points for making it work with background images
6. Add lazy loading directive to the elements
7. Send us a .zip with the project or create a repo and send us a link
8. Bonus points for deploying your app with GitHub Pages, Heroku or Surge.sh
9. Please, do not use CSS libraries like Bootstrap

// grab the REVIEWS data from the file
import { reviews } from '../data/reviews.mjs';
console.log(reviews);

// create an empty card
const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {
  console.log(reviews[x].name);

  //create a section
  const mySection = document.createElement('section')
  const myName = document.createElement('h3')
  myName.textContent = reviews[x].name

  const myRating = document.createElement('div')
    
 for (let i = 0; i < reviews[x].stars; i++) {
  console.log("hi")
    const myStar = document.createElement('img')
    myStar.src = "./images/star.svg"
    myRating.appendChild(myStar)
  }

  const myReview = document.createElement('p')
  myReview.textContent = reviews[x].text


  // build the figure with child elements
  mySection.appendChild(myName);
  mySection.appendChild(myRating);
  mySection.appendChild(myReview);

  //add a new card to a page
  myTarget.appendChild(mySection);

} // end for loop

const divForImg = document.getElementById("img-box");
//enter your api key where it says YOUR_ACCESS_KEY
const requestOne = "https://api.unsplash.com/search/photos?page=2&query=&client_id=lbfNjzROARuzGAmsHMqKjwwqSV1tYhp9zyuZ0M7FPxk";

const requestTwo = "https://api.unsplash.com/search/photos?page=3&query=cats&client_id=lbfNjzROARuzGAmsHMqKjwwqSV1tYhp9zyuZ0M7FPxk"

function makeRequestToUnsplash(requestUrl){
  fetch(requestUrl)
    .then( res => res.json())
    .then((data) => {
      console.log("get response data",data);
    //we are actually using the returned data from the API here
    // data.results contains an array of objects so we can use an array method here to iterate
        data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });
    })
    .catch((err)=>{
      console.log(err);
    })
}
// the function createImage() below is a helper function used to generate an image tag for use in our web page
function createImage(imageObj){
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  // styling for the elements
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "400px";
  image.style.height = "500px";
  image.style.border = "double 4px black";
  imageDiv.append(image);
  divForImg.append(imageDiv);
}
//each call to makeRequestToUnsplash() returns data with 10 images in it
//so I make two calls to it to get 20 images to populate the page with images
makeRequestToUnsplash(requestOne);
makeRequestToUnsplash(requestTwo);
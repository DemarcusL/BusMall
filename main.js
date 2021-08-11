// console.log("Sanity Test...");

//================================= Start ==============================//

// Encapsulation - grouping objects in classes to be used

// We are learning ES6 way of doing new instances of objects. we are moving away from .prototype stuff. in the cookie stand we build an object class constructor, then we fed new object instances into that funtion to make objects. in this new method we are 

//Let's Define our object first
// Here is where we define our classes, instantiate classes, add event hndlers to track clicks

//Define base set of props for our domin object in a new ES6 class syntax
// inside curly brces mens it is ecapsulated in the clss
// GoatPictures will be watever clss we choose here
class ImageObject {

    // Propersties I want but not passed in
    // just put it outside the constructor above it
    clicks = 0;
    timesDisplayed = 0;
    // initial constructor method, all MUST HAVE THIS NAMED constructor
    // add params we are using for the object props
    constructor(name, imageSrc) {
        this.name = name;
        this.imageSrc = imageSrc;

    };

    // we can add aditionl methods here for what the object will do

};
// we can use the above class over nd over again for the new objects, thats why we built this first

// Add variables we need in multiple places
// set to an epmty wariable essentilly, and push into here

let leftImageOnThePage = null;
let midImageOnThePage = null;
let rightImageOnThePage = null;

let totalClicks = 0;
// we want this value to be the stopping point
let maxClicksAllowed = 12;

// we are setting these for getting these datas to our chart, we need to fill them
let objectNamesArray = [];

let objectClickedArray = [];

// We want to randomly pick from a list of  image objects and display them
// we will need an array for our list of imges, we can and display them
// we can add things to arrays with the .push method, but here wew ill just do inline 
let allImageObjects = [
    // create new image objects
    // this makes a new object instnce
    // on the left, over the image we wnt, and use 'Copy Path' to get the path location for the img
    // check source error
    new ImageObject('Noodle Fan', './Images/noodle_fan.jpg'),

    // Mr.Madan helped me fix my sourcing error, take ./Busmall off
    // new ImageObject('Pen Tops', './BusMall/Images/pen_tops.jpg '),

    new ImageObject('Pen Tops', './Images/pen_tops.jpg '),
    new ImageObject('Toothpaste Roller', './Images/toothpaste_rollup.jpg'),
    new ImageObject('Lego Shoes', './Images/lego_shoes.jpg '),
    new ImageObject('Noodle Slip', './Images/noodle_slip.jpg '),
    new ImageObject('Speaker Shoes', './Images/shoes_music.jpg '),
    // new ImageObject('Sleep Hood', 'BusMall/Images/sleep_hood.jfif '),
    new ImageObject('Air Pod Chop Sticks', './Images/airpod_sticks.jpg '),
    new ImageObject('Standing Bike', './Images/bike_stand.jpg '),

];

// test array of goats for sanity
// for (let index = 0; index < allImageObjects.length; index++) {
//     console.log(allImageObjects[index].name);

// }; 

// we need to generate randomly. he mestioned how it reeally does matter, we can get the random step earlier.

// set up our element reference in the dom. i need to get some elements by id first to target were i will display my images and even results
// we are setting our base variables here to reuse
// we may not need the imag tags, but its works so find a way to refactor, and rememebr, this has a lot of kevins code, go thru and refactor to your own in refefrence to goats
let allImagesSection = document.getElementById('allImagesSection');
let PictureAreaL = document.getElementById('PictureAreaL');
let PictureAreaM = document.getElementById('PictureAreaM');
let PictureAreaR = document.getElementById('PictureAreaR');
//  set images bases
let imageLeft = document.getElementById('imageLeft');
let imageLeftTag = document.getElementById('imageLeftTag')
let imageMid = document.getElementById('imageMid');
let imageMidTag = document.getElementById('imageMidTag')
let imageRight = document.getElementById('imageRight');
let imageRightTag = document.getElementById('imageRightTag')
//     or
// const PictureArea1
//times picked base
let timesPicked = document.getElementById('timesPicked');



// requirements says dont display the same image back to back
// implement a func to pick a random item object
// look up new ways to write invisble function, anon functions
let pickedNewItem = function () {

    leftImageIndex = Math.floor(Math.random() * allImageObjects.length);

    midImageIndex = Math.floor(Math.random() * allImageObjects.length);

    rightImageIndex = Math.floor(Math.random() * allImageObjects.length);

    //set up a call back function
    // this will keep the things unique in a while conditional, ask lizzy about this approach
    // a while checks for a condition as well as a loop, thats why it is unqiuq

    // So this is checking for if the left img meets the right image or mid img, the left will loop
    while ( leftImageIndex === rightImageIndex || leftImageIndex === midImageIndex ) {
        leftImageIndex = Math.floor(Math.random() * allImageObjects.length);
        console.log(`New Image displayed in ${leftImageOnThePage}`);
    };

    //so this is checking the right to mid and left, if they match, it loops
    while ( rightImageIndex === leftImageIndex || rightImageIndex === midImageIndex ) {
        rightImageIndex = Math.floor(Math.random() * allImageObjects.length);
    };

    //so this is checking the mid against both, if it matches either, it loops the image
    while ( midImageIndex === leftImageIndex || midImageIndex === rightImageIndex ) {
        midImageIndex = Math.floor(Math.random() * allImageObjects.length);
    };

    // how can I solve this same image displying twice
    // we are updating the left image
    // rememeber to change goat code with your own code
    imageLeft.innerText = allImageObjects[leftImageIndex].name;
    // here we are generating ?
    imageLeftTag.src = allImageObjects[leftImageIndex].imageSrc;

    // we are updating the mid image
    // rememeber to change goat code with your own code
    imageMid.innerText = allImageObjects[midImageIndex].name;
    // here we are generating ?
    imageMidTag.src = allImageObjects[midImageIndex].imageSrc;

    // we are updating the right image
    // rememeber to change goat code with your own code
    imageRight.innerText = allImageObjects[rightImageIndex].name;
    // here we are generating ?
    imageRightTag.src = allImageObjects[rightImageIndex].imageSrc;

    // update to the display
    leftImageOnThePage = allImageObjects[leftImageIndex];
    midImageOnThePage = allImageObjects[midImageIndex];
    rightImageOnThePage = allImageObjects[rightImageIndex];

};

//==============Dups===============//
// Lizzy used a  if and conditional statement leftImageIndex === leftImageIndex in a while loop in her initial random photo genertor so if the it ever matched it would cancel, brandon mention he used a while loop in the constional to while it is unique, it will generate.
// Ask lizzy about this approach, 


//===============Dups================//

// Click on image need to be handled in some way
let clickEventOnImage = function (evt) {
    // sanity for what we clicked
    // console.log(`You have clicked this element ${evt.target.id}`);

    // let set an if for when they click
    if (totalClicks < maxClicksAllowed) {
        console.log(` You have clicked ${totalClicks} times`);
        // create some variables
        // we may need to check her for errors
        // let ImageClickedOn = evt.target.id;
        let ImageClickedOn = evt.target;
        let id = ImageClickedOn.id;

        // Mark shown times, by iterating it thru the empty variable we set in top, we push these in 
        leftImageOnThePage.timesDisplayed++;
        midImageOnThePage.timesDisplayed++;
        rightImageOnThePage.timesDisplayed++;

        // console.log(` Left ${imageLeft} has been shown: ${leftImageOnThePage.timesDisplayed}, Mid ${imageMid} has been shown: ${midImageOnThePage.timesDisplayed}, Right ${imageRight} has been shown: ${rightImageOnThePage.timesDisplayed} `);

        // lets set up an if conditional to check which was claicked and update our results
        
        // Sanity Check
        // console.log(`Print the id value of ${id}`)

        if (id === 'imageLeftTag' || id === 'imageMidTag' || id === 'imageRightTag') {
            // Chechk which image was clicked and add it to clicked value
            if (id === 'imageLeftTag') {
                leftImageOnThePage.clicks++;

                // this didnt work
                // leftImageOnThePage.timesDisplayed++;

                // check to see if this is moving properly
                // i think we need to add our new arrays fulfillment used at beginning
                // objectClickedArray.push(leftImageOnThePage);

                //sanity
                console.log(` ${leftImageOnThePage.name} has ${leftImageOnThePage.clicks} Right Now ! `);
            }

            if (id === 'imageMidTag') {
                midImageOnThePage.clicks++;
                console.log(` ${midImageOnThePage.name} has ${midImageOnThePage.clicks} Right Now ! `);
            }

            if (id === 'imageRightTag') {
                rightImageOnThePage.clicks++;
                console.log(` ${rightImageOnThePage.name} has ${rightImageOnThePage.clicks} Right Now ! `);
            } 
            console.log(' ')
            // now I want new images generated after a selection is met
            pickedNewItem();
        }


    }

    // increase clicks total
    totalClicks++;

    // now set the when they reach max clicks, we are removing the click event 
    if (totalClicks === maxClicksAllowed) {
        allImagesSection.removeEventListener('click', clickEventOnImage);
        console.log('You have made 12 decisions, You Are Finished');
        alert('You have made 12 decisions, Thanks for your participation ! You can contiune to the site !');

        // kev recommends a function to iterate thru allimage objects, make 2 new arrays, and load up a name array and 

        // function postR
        // Now display the final results
        // we want it to iterate thru the all objects array
        for (let index = 0; index < allImageObjects.length; index++) {
            // find a way to refactor into one line
            let newScore = document.createElement('li');
            // this is the data going into the chart
            newScore.innerText = ` ${allImageObjects[index].name}: ${allImageObjects[index].clicks} `;
            // this will add the new child element to our html score section
            timesPicked.appendChild(newScore);

            // this only pushes the li into the new array, we want the times clicked
            // objectClickedArray.push(allImageObjects[index].clicks);
            // console.log(objectClickedArray);

            // i want after my clicks to display the name of all imgs 
            objectNamesArray.push(allImageObjects[index].name);
            console.log(objectNamesArray);

            // return(newScore);

            // Sanity Check
            // console.log(newScore);
        };
        
        // I believe this will push my new score into my empty array for scores on the chart
        objectNamesArray.push(allImageObjects.name);
        console.log(objectNamesArray);

    };


};

// Lets add event listeneres to the clicks of the items
// refer to kevin's code about the even listener, rememeber the bubble effect
allImagesSection.addEventListener('click', clickEventOnImage);

// thinking to attach the listner to specifically my L,M,R areas
// PictureAreaL.addEventListener('click', clickEventOnImage);
// PictureAreaM.addEventListener('click', clickEventOnImage);
// PictureAreaR.addEventListener('click', clickEventOnImage);



pickedNewItem(); // there are no images loaded to try yet, check with images, make sure to change the css of pic sizes
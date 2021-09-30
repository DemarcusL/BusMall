// console.log("Sanity Test...");

//================================= Start ==============================//

// Encapsulation - grouping objects in classes to be used

// We are learning ES6 way of doing new instances of objects. we are moving away from .prototype stuff. in the cookie stand we build an object class constructor, then we fed new object instances into that funtion to make objects. in this new method we are 

//Let's Define our object first
// Here is where we define our classes, instantiate classes, add event hndlers to track clicks

// 'use strict';

//Define base set of props for our domin object in a new ES6 class syntax
// inside curly brces mens it is ecapsulated in the clss
// GoatPictures will be watever clss we choose here
//===================================== Lab 11 , Getting Started =========================//
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
        // clickSaveResults.push(ImageObject.clicks);
        // console.log(clickSaveResults);
        // updateLocalStorage();
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
let allObjectNamesChart = [];
// let objectNamesArray = [];
let allObjectClicksChart = [];

let allObjectsTimesDisplayedChart = [];

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
// For saving
let button = document.getElementById('button');
let buttonArea = document.getElementById('buttonArea');
// For Retrieving
let button2 = document.getElementById('button2');
let buttonArea2 = document.getElementById('buttonArea2');

let previousResultsDisplay = document.getElementById("previousResultsDisplay");
// let Chart = document.getElementById('myChart');



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
    while (leftImageIndex === rightImageIndex || leftImageIndex === midImageIndex) {
        leftImageIndex = Math.floor(Math.random() * allImageObjects.length);
        console.log("Dupe detected in Left area, New Image displayed LEFT");
    };

    //so this is checking the right to mid and left, if they match, it loops
    while (rightImageIndex === leftImageIndex || rightImageIndex === midImageIndex) {
        rightImageIndex = Math.floor(Math.random() * allImageObjects.length);
        console.log("Dupe detected in Mid area, New Image displayed MID");
    };

    //so this is checking the mid against both, if it matches either, it loops the image
    while (midImageIndex === leftImageIndex || midImageIndex === rightImageIndex ) {
        midImageIndex = Math.floor(Math.random() * allImageObjects.length);
        console.log("Dupe detected in Right area, New Image displayed RIGHT");
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
    evt.preventDefault();
    // console.log(`You have clicked this element ${evt.target.id}`);

    // let set an if for when they click
    if (totalClicks < maxClicksAllowed) {
        // console.log(` You have clicked ${totalClicks} times`);
        // create some variables
        // we may need to check her for errors
        // let ImageClickedOn = evt.target.id;
        let ImageClickedOn = evt.target;
        let id = ImageClickedOn.id;

        // Mark shown times, by iterating it thru the empty variable we set in top, we push these in 
        leftImageOnThePage.timesDisplayed++;
        // console.log(` ${leftImageOnThePage.name} has been displayed ${leftImageOnThePage.timesDisplayed} times !`);

        midImageOnThePage.timesDisplayed++;
        // console.log(` ${midImageOnThePage.name} has been displayed ${leftImageOnThePage.timesDisplayed} times !`);

        rightImageOnThePage.timesDisplayed++;
        // console.log(` ${rightImageOnThePage.name} has been displayed ${leftImageOnThePage.timesDisplayed} times !`);

        // console.log(` Left ${imageLeft} has been shown: ${leftImageOnThePage.timesDisplayed}, Mid ${imageMid} has been shown: ${midImageOnThePage.timesDisplayed}, Right ${imageRight} has been shown: ${rightImageOnThePage.timesDisplayed} `);

        // lets set up an if conditional to check which was claicked and update our results

        // Sanity Check
        // console.log(`Print the id value of ${id}`)

        if (id === 'imageLeftTag' || id === 'imageMidTag' || id === 'imageRightTag') {
            // Chechk which image was clicked and add it to clicked value

            // I want the names pushed if either one of these are triggered
            // if (id === 'imageLeftTag' || id === 'imageMidTag' || id === 'imageRightTag' ) {
            //  objectNamesArray.push(leftImageOnThePage.name);
            // }

            if (id === 'imageLeftTag') {
                // this is 
                leftImageOnThePage.clicks++;

                // console.log(` ${leftImageOnThePage.name} has ${leftImageOnThePage.clicks} clicks Right Now and has displayed ${leftImageOnThePage.timesDisplayed} ! `);
            }

            if (id === 'imageMidTag') {
                midImageOnThePage.clicks++;

                // console.log(` ${midImageOnThePage.name} has ${midImageOnThePage.clicks} clicks Right Now and has displayed ${midImageOnThePage.timesDisplayed} ! `);
            }

            if (id === 'imageRightTag') {
                rightImageOnThePage.clicks++;

                // console.log(` ${rightImageOnThePage.name} has ${rightImageOnThePage.clicks} clicks Right Now and has displayed ${rightImageOnThePage.timesDisplayed} ! `);
            }

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

        // kev recommends a function to iterate thru allimage objects, make 2 new arrays, and load up a name array 
        gatherAndDrawChart();
        makeChart();

        // clickSaveResults.push(ImageObject.clicks);
        // console.log(clickSaveResults);

        // let scoreStored = 
        // function postR
        // Now display the final results
        // we want it to iterate thru the all objects array
        for (let index = 0; index < allImageObjects.length; index++) {

            //========== This is making the li elements in my dom ==========//
            // find a way to refactor into one line
            // this is making a new score 
            let newScore = document.createElement('li');

            // this is the data going into the chart
            newScore.innerText = ` ${allImageObjects[index].name} : was clicked ${allImageObjects[index].clicks} times and displayed ${allImageObjects[index].timesDisplayed} times !`;
            // this will add the new child element to our html score section
            timesPicked.appendChild(newScore);
            //========  This is making the li elements in my dom ====== //;


            // Sanity Check
            // console.log(newScore);
        };

    };


};

// We set our data resulrts into oue new arrays here for charting, these are at the top
// let allObjectNamesChart = [];
// let allObjectClicksChart = [];
// let allObjectsTimesDisplayedChart = [];

// this function will push our data into our new arrays
function gatherAndDrawChart() {

    for (let index = 0; index < allImageObjects.length; index++) {
        allObjectNamesChart.push(allImageObjects[index].name);
        allObjectClicksChart.push(allImageObjects[index].clicks);
        allObjectsTimesDisplayedChart.push(allImageObjects[index].timesDisplayed);

        // console.log(allObjectNamesChart);
        // console.log(allObjectClicksChart);
        // console.log(allObjectsTimesDisplayedChart);
    };
}

//=============================== Lab 12 Chart Making ============================//

// my data is just being making with li, fix that
function makeChart() {

    console.log(allObjectNamesChart);
    console.log(allObjectClicksChart);
    console.log(allObjectsTimesDisplayedChart);


    // allObjectClicksChart.push(12); // to set the upper limit

    // i am setting my labels to to mane array
    const labelChart = allObjectNamesChart;

    // 
    const ctx = document.getElementById('imageChart').getContext('2d');


    // Set up the data sets
    const imageChart = new Chart(ctx, {

        // type of chart being made
        type: 'bar',

        data: {
            labels: labelChart,
            datasets: [{
                label: 'Times Clicked',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: allObjectClicksChart
            },
            {
                label: 'Times Displayed',
                backgroundColor: 'rgb(200, 80, 32)',
                borderColor: 'rgb(25, 209, 222)',
                data: allObjectsTimesDisplayedChart
            }]


        },

        // defiine your data with what you are using
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
};
//=============================== End of Chart Making ============================//

//==============================================Lab 13============================================//

//================== lets save data ================//
// ========== this placement may need to be called and moved?
// lets set a global array

//========= lets add an event listner ===============//
button.addEventListener('click', updateLocalStorage);

function updateLocalStorage() {
    // console.log("Updating localStorage for NAMES....");
    // const namesSaveArray = JSON.stringify(allObjectNamesChart);
    // console.log(`${namesSaveArray}`);

    console.log("Updating localStorage for NAMES and CLICKS....");
    const clickSaveArray = JSON.stringify(allObjectClicksChart);
    const namesSaveArray = JSON.stringify(allObjectNamesChart);
    const timesClicked = 
    console.log(` The clicks are saved as: ${clickSaveArray}`);
    console.log(`The names are saved as: ${namesSaveArray}`);
    // key, value pairs
    localStorage.setItem('names', namesSaveArray);
    localStorage.setItem('clicks', clickSaveArray);
};

//========= lets add an event listner ===============//
button2.addEventListener('click', getLocalStorage);

//=========== Now retireve data =============//
function renderData() {
    previousResultsDisplay.innerText = '';

    for (let index = 0; index <= allObjectClicksChart.length; index++) 
    {

    let resultsLI = document.createElement('li');

    resultsLI.innerText = ` Previously , ${allObjectNamesChart} were clicked ${allObjectClicksChart} corresponding times! `;

    // resultsLI.appendChild(resultsLI);
    previousResultsDisplay.appendChild(resultsLI);

    }



};

function getLocalStorage() {
    //console.log("Get stored data from the local storage!!");

    // retrieve data from local storage
    const oldNames = localStorage.getItem("names");
    const oldClicks = localStorage.getItem("clicks");

    //console.log(`oldData -- ${oldData}`);

    // convert the data (array) from a string to something that we can use in JavaScript.
    const dataNames = JSON.parse(oldNames);
    const dataClicks = JSON.parse(oldClicks);

    // If this is the first time we visit the page, there will not be an array for us to use in localStorage
    if (dataNames !== null) {
        allObjectNamesChart = dataNames;
    }

    if (dataClicks !== null) {
        allObjectClicksChart = dataClicks;
    }

    // let's render the old data that we retrieved back from the localStorage
    renderData();

};

//=================End of locale storage==========================//

// refer to kevin's code about the even listener, rememeber the bubble effect
allImagesSection.addEventListener('click', clickEventOnImage);
pickedNewItem();

// we may need to set what an item list is as an object, set the props to item, quantity, and maybe some render method
//on second page we whould implement the getlocalestorage
//on first we are setting the data
// one requirement is to remove the item.
// the html can incorporate links to the home page with items to buy and and cart page 
// If you went to a specialized weekly meetup: Describe what you worked on. Write about (at least) two people you met, where they work, and what they do there. If you had any interesting conversations or anyone provided you with some significant help, note that as well.
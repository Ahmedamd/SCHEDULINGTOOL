const submit = document.querySelector(".btn-a");
const staffsubmit = document.querySelector(".btn-b");
const staffadd = document.querySelector(".btn-c");
const storeName = document.querySelector(".name-a");
const showstoreName = document.querySelector(".store-name");
const showstaffName = document.querySelector(".staff-name");
const hoursfrom = document.querySelector("#x");
const hoursTo = document.querySelector("#y");
const randGen1 = document.querySelector("#z"); //input
const randGen2 = document.querySelector("#a"); //input
const showhoursfrom = document.querySelector(".store-hours-a");
const showhoursfromS = document.querySelector(".staff-hours-a");
const showhourstoS = document.querySelector(".staff-hours-b");
const staffName = document.querySelector(".name-b"); //input
this.stafflist = document.getElementById("staff-list");
const fixed = document.querySelector(".fixed");
const values = document.querySelector(".values");
const valuesb = document.querySelector(".staff-list");
const partTwo = document.querySelector(".part-two");

const headerA = document.querySelector("header-a");
const caneOne = document.querySelector("cane-one");

// function that deals with adding store information
function funcOne() {
  let value = storeName.value;

  var x = document.getElementById("store-start");
  var resulta = x.options[x.selectedIndex].value;

  var y = document.getElementById("store-finish");
  var resultb = y.options[y.selectedIndex].value;

  let convA = mil(resulta);
  let convC = ampm(resulta);

  let convB = mil(resultb);
  let convD = ampm(resultb);

  if (value === "" || resulta === "" || resultb === "") {
    alert("Please enter valid value");
  } else {
    showhoursfrom.innerHTML = ` ${value}`;

    document.getElementById(
      "new-a"
    ).innerHTML = ` Open from ${convA}${convC} to ${convB}${convD} `;

    storeName.value = "";
    document.getElementById("store-start").selectedIndex = 0;
    document.getElementById("store-finish").selectedIndex = 0;

    var x = document.getElementById("fixed");
    x.style.display = "block";

    // second page
    // var second = document.querySelector(".second-page");

    // var valueF = second.classList.contains("part-two");

    // if (valueF) {
    //   second.classList.remove("part-two");
    //   console.log("im 1 ");
    // } else {
    //   second.classList.add("part-two");
    //   console.log("im 2 ");
    // }
  }
}
//function that adds staff to a list once submit button is clicked
function newElement() {
  // create li elements for name, position, hours, close
  var li = document.createElement("li");
  var lia = document.createElement("li");
  var lib = document.createElement("li");
  var lic = document.createElement("li");

  var input = document.getElementById("name-b").value;
  var t = document.createTextNode(input);

  var posInput = document.getElementById("emp-position"); //position
  var resultf = posInput.options[posInput.selectedIndex].value;
  var t1 = document.createTextNode(resultf);

  var j = document.getElementById("staff-start");
  var resultc = j.options[j.selectedIndex].value;

  var k = document.getElementById("staff-finish");
  var resultd = k.options[k.selectedIndex].value;
  //hours conversion
  let convE = mil(resultc);
  let convF = ampm(resultc);

  let convB = mil(resultd);
  let convD = ampm(resultd);
  //hours print
  var a = document.createTextNode(convE + convF + " to" + " " + convB + convD);
  // creating classes for name , hours, position and close that will be appended to "li" elements
  var name = document.createElement("span");
  name.setAttribute("class", "name-list");
  name.appendChild(t);

  var hours = document.createElement("span");
  hours.setAttribute("class", "hours-list");
  hours.appendChild(a);

  var position = document.createElement("span");
  position.setAttribute("class", "pos-list");
  position.appendChild(t1);

  var icon = document.createElement("span");
  icon.setAttribute("class", "close");
  icon.innerHTML = "x";

  if (input === "" || resultc === "" || resultd === "" || resultf === "") {
    alert("please enter a value");
  } else {
    li.appendChild(name); //name
    lia.appendChild(hours); //hours
    lib.appendChild(position); //position
    lic.appendChild(icon); //icon

    //appending to "li" elements to unorderd lists
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myUL-a").appendChild(lia);
    document.getElementById("myUL-b").appendChild(lib);
    document.getElementById("myUL-c").appendChild(lic);
    //add here
    //clear input values
    document.getElementById("name-b").value = "";
    document.getElementById("staff-start").selectedIndex = 0;
    document.getElementById("staff-finish").selectedIndex = 0;
    document.getElementById("emp-position").selectedIndex = 0;
    var y = document.getElementById("fixed-c");
    y.style.display = "block";

    var closebtns = document.getElementsByClassName("close");
    var namebtns = document.getElementsByClassName("name-list");
    var hourbtns = document.getElementsByClassName("hours-list");
    var posbtns = document.getElementsByClassName("pos-list");

    // function to hide the contents of li elements
    for (var i = 0, len = closebtns.length; i < len; i++) {
      console.log("i is: ", i);
      console.log("length is: ", closebtns.length);

      array = Array.prototype.slice.call(closebtns);
      closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
        let target = 0;
        target = array.indexOf(this);
        console.log("target is: ", target);
        namebtns[target].parentElement.style.display = "none";
        hourbtns[target].parentElement.style.display = "none";
        posbtns[target].parentElement.style.display = "none";
      });
    }
  }
} //end of function

function mil(time) {
  if (time > 12) {
    time = time - 12;
    return time;
  } else {
    return time;
  }
}

//returns if time is AM or PM
function ampm(time) {
  if (time >= 12) {
    return "pm";
  } else {
    return "am";
  }
}

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

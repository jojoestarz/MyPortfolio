
let themeSwitch = document.querySelector(".dark-mode-button");
let darkMode = localStorage.getItem("dark-theme");

if (darkMode === "enabled") {
    document.querySelector(".container").classList.add("dark-theme");
    themeSwitch.setAttribute("src", "./icons/sun.png");
}

themeSwitch.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const darkModeEnabled = container.classList.toggle("dark-theme");

    if (darkModeEnabled) {
        localStorage.setItem("dark-theme", "enabled");
        themeSwitch.setAttribute("src", "./icons/sun.png");
    } else {
        localStorage.setItem("dark-theme", "disabled");
        themeSwitch.setAttribute("src", "./icons/moon.png");
    }
});


//! darkmode solution
// let icon = document.querySelector(".ThemeBtn") 

// let darkMode = localStorage.getItem

// icon.onclick = () => {
//    const darkModeOn = document.body.classList.toggle("dark-theme")
    
//     const newPic = darkModeOn? "sun.png":"moon.png";

//     icon.setAttribute("src",newPic);
// }



//! personal darkmode solution
// function nightTime()  {
//     document.documentElement.style.setProperty('--bg-color', 'black');

//     document.documentElement.style.setProperty('--text-color', 'white');
  

//     }
//     function dayTime()  {
//         document.documentElement.style.setProperty('--bg-color', 'white');

//         document.documentElement.style.setProperty('--text-color', 'black');
    
    
//         }


let themeSwitch = document.querySelector(".ThemeBtn")

let darkMode = localStorage.getItem('dark-theme')

const enableDarkmode = () =>{
    document.body.classList.add('dark-theme')    //adds class called darktheme to the body element
    localStorage.setItem('dark-theme','active') //sets key value pair of strings to local storage(permanent)
    themeSwitch.setAttribute("src","sun.png") // replaces the image in the button with sun
}
const disableDarkmode = () =>{
    document.body.classList.remove('dark-theme') //removes darktheme classes reverting to default
    localStorage.setItem('dark-theme',null)   //nullifies local storage to keep default theme
    themeSwitch.setAttribute("src","moon.png") //replaces the image in the button with moon
}

if(darkMode === "active") enableDarkmode()

themeSwitch.addEventListener('click',()=>{
 darkMode = localStorage.getItem('dark-theme')
 darkMode !== 'active'? enableDarkmode(): disableDarkmode()


})


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
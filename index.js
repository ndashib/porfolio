const items = [
  {

    name: 'counter',
    description: 'this is project involves using javascript, html and css to creat a web calculator. That is able to run the web',
    img: './images/counter.png',
    toggleBtn: 'toggleBtn()',
    detail: 'copy and add to each item',
    class: 'hidepopup',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/ndashib/counter',

  },
  {

    name: 'wordpress',
    description: 'happy sunday',
    img: './images/code.jpeg',
    toggleBtn: 'toggleBtn()',
    detail: 'copy and add to each item',
    class: 'hidepopup',
    skills: ['html', 'css', 'javascript'],
  },
  {

    name: 'javascript',
    description: 'it is the weekend',
    img: './images/database.png',
    toggleBtn: 'toggleBtn()',
    detail: 'copy and add to each item',
    class: 'hidepopup',
    skills: ['html', 'css', 'javascript', 'bootsrap'],

  },

];
const defaultImage = './images/hands.jpg';
let result = '';
const listItem = document.getElementById('project');

const desplayProjects = (data) => {
  data.map((list) => {
    result += `
      <li id="projectItem">
      <a href="#"></a>
      <img src=${(list.img && list.img) || defaultImage} alt="">
      <div class="btn">
          <button><i class="fa-brands fa-instagram"></i></button>
          <button><i class="fa-brands fa-facebook"></i></button>
          <button><i class="fa-brands fa-linkedin"></i></button>
      </div>
      <h1 class=" color" >${list.name}</h1>
     <div class = "para ">
    <P class  = "description" id=${list.id.toString()}></P>
    
    </div>
    <div class="infobtn">
    <button class = "seeproject" id=${list.id.toString()} onClick= showProject(this.id)>see project</button>
    <button class = " togglepopup" id=${list.id.toString()} onClick =showPopup(this.id) >see details</button>
    </div>
     
  </a>
  </li>
                     `;
    return result;
  });
  listItem.innerHTML = result;
  return result;
};

document.addEventListener('DOMContentLoaded', () => {
  desplayProjects(items);
});

const showProject = (id) => {
  const project = items.find((item) => item.id.toString() === id);
  const paragraph = document.getElementById(id);
  const { textContent } = paragraph;
  paragraph.textContent = textContent === '' ? project.description : '';
  //  if(paragraph.textContent === ''){
  //     paragraph.textContent = project.description
  //  } else{
  //     paragraph.textContent = ''
  //  }

  return project;
};
// let itemsId = 1;
// for (let i = 0 ; i<items.length ; i++){
//   items[i].id = itemsId++
// }

items.forEach((element) => {
  const index = items.indexOf(element);
  element.id = index + 1;
});

// popupjavascript
let index = 0;
const popupItems = document.querySelector('.popupbackground');
const popupDisplay = () => {
  let popupResult = '';
  popupResult += `
    <div class="popup "  >
        <div class="close-icon">
            <i class="fa-solid fa-xmark mark"  onCLick =toggleBtn()></i>
        </div>
       
        <div class="popupimg">
            <img  src="${items[index].img}"alt="">
        </div>
        <div class="popupinfo">
            <div class="left">
                <h1>annual reports</h1>
                <div class="leftbtn">
                    <button>react</button>
                    <button>html</html></button>
                    <button>css</button>
                </div>

            </div>
            <div class="right">
                <button>see live<i class="fa-solid fa-eye"></i></button>
                <a href="${items[index].source}"><button>see source<i class="fa-brands fa-github"></i></button></a>
            </div>
        </div>
        <div class="popup-paragraph">
            <p>${items[index].detail}</p>
        </div>
    </div>
    `;
  popupItems.innerHTML = popupResult;
  return popupResult;
};

const showPopup = (id) => {
  index = id - 1;
  popupDisplay();
  popupItems.classList.add('showpopup');
};

// hide popup

const toggleBtn = () => {
  popupItems.classList.remove('showpopup');
};

//   close popup
//   const togglepopup = document.querySelector('.mark')
//   let unShow = false
//   const unShowPopup = (_thisWork) => {
//  if (unShow){
//     togglepopup.style.display = 'flex'
//  }else{
//     togglepopup.style.display = 'none'
//  }
//  unShow = !unShow
//   }

// const paragraph = document.querySelector('.para')

// // Initial state
// let isOn = false;
// // Function to toggle the button
// function toggleBtn(){
//   if (isOn){
//     paragraph.style.display = 'none'
//   } else {
//     paragraph.style.display = 'flex'
//   }
//   isOn = !isOn;
// }

// box2

// document.addEventListener("DOMContentLoaded", function() {
// This function runs when the DOM (HTML structure) is fully loaded.

//     let button = document.getElementById("btn");

//     button.addEventListener("click", function() {
//         ;
//     });
// });
// function addStyle() {
//     let targetElement = document.querySelector('.show');
//     targetElement.style.display = 'none';

//   }

//   function removeStyle() {
//     const targetElement = document.querySelector('.show');
//     targetElement.style.display = 'flex';

//   }
//   console.log(addStyle)
// let element = document.getElementById("btn");
// element.classList.add("highlight");
// element.classList.remove("normal");
// element.classList.toggle("btn");

// Attach the function to the button's click event
// button.addEventListener('click', btn)

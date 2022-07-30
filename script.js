// hamburger btn starts here
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.t-menu');
const close = document.querySelector('.c-button');
const lists = document.querySelector('.tul');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuList.classList.toggle('active');
});

close.addEventListener('click', () => {
  menuList.classList.remove('active');
});

lists.addEventListener('click', () => {
  menuList.classList.remove('active');
});
// for popUp starts here
const popUp = document.querySelector('.popUp');
const popProj = document.querySelector('.popProj');
const popName = document.querySelector('.popName');
const popPic = document.querySelector('.popPic1');
const popTex = document.querySelector('.popTex');
const popList = document.getElementById('popList1');
const popClose = document.querySelector('.close-button');
const popUpLive = document.getElementById('popUpLive');
const popUpSource = document.getElementById('popUpSource');
const popProject1 = document.getElementById('btn-1');
const popProject2 = document.getElementById('btn-2');
const popProject3 = document.getElementById('btn-3');
const popProject = document.getElementById('btn-4');
const popall = document.querySelector('.popall');
const blur = document.getElementById('blur');

const projArr = [
  {
    id: 1,
    pName: 'BENtech',
    pAuthure: 'Benjamin &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'An open source code, created and designed by Benjamin Ejike while studying with microverse, kindly report any kink of copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSource: 'https://github.com/osbentech',
  },
  {
    id: 2,
    pName: 'BENtech',
    pAuthure: 'Benjamin &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'An open source code, created and designed by Benjamin Ejike while studying with microverse, kindly report any kink of copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSource: 'https://github.com/osbentech',
  },
  {
    id: 3,
    pName: 'BENtech',
    pAuthure: 'Benjamin &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'An open source code, created and designed by Benjamin Ejike while studying with microverse, kindly report any kink of copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSource: 'https://github.com/osbentech',
  },
  {
    id: 4,
    pName: 'BENtech',
    pAuthure: 'Benjamin &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'An open source code, created and designed by Benjamin Ejike while studying with microverse, kindly report any kink of copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSource: 'https://github.com/osbentech',
  },
];
function popFill(arr, num) {
  const proj = arr[num];
  popProj.textContent = proj.pName;
  popName.innerHTML = proj.pAuthure;
  popPic.src = proj.pPic;
  popTex.textContent = proj.pText;
  popUpLive.attributes.href.nodeValue = proj.popUpLive;
  popUpSource.attributes.href.nodeValue = proj.pSource;
  popList.innerHTML = '';
  proj.pTechs.forEach((item) => {
    const pl = document.createElement('li');
    pl.innerHTML = item;
    pl.classList.add('pplist');
    popList.append(pl);
  });
}
popProject.addEventListener('click', () => {
  popall.classList.toggle('active');
  popUp.classList.toggle('active');
  blur.classList.toggle('active');
  popFill(projArr, 0);
});
popProject1.addEventListener('click', () => {
  popUp.classList.toggle('active');
  blur.classList.toggle('active');
  popFill(projArr, 1);
});
popProject2.addEventListener('click', () => {
  popUp.classList.toggle('active');
  blur.classList.toggle('active');
  popFill(projArr, 2);
});
popProject3.addEventListener('click', () => {
  popUp.classList.toggle('active');
  blur.classList.toggle('active');
  popFill(projArr, 3);
});

popClose.addEventListener('click', () => {
  popUp.classList.remove('active');
  blur.classList.remove('active');
});

// Form validation feature
const contForm = document.querySelector('form');
const emailForm = document.getElementById('email');
const vError = document.querySelector('.error-msg');
function checkEmail(input) {
  const low = input.toLowerCase();

  if (input !== low) {
    vError.innerText = 'Please submit your Email in lowercase, eg name@example.com.';
    vError.className = 'alert error';
    return false;
  }
  if (input === low) {
    vError.innerText = 'Submitted Succesfully';
    vError.className = 'alert success';
    setTimeout(() => {
      contForm.submit();
    },
    5000);
  }
  return true;
}
contForm.addEventListener('submit', (event) => {
  if (checkEmail(emailForm.value) === false) {
    event.preventDefault();
  } else {
    event.run();
  }
});
// please type your email address in this format "name@example.com"

/* Local storage for form */
const username = document.getElementById('name');
const email1 = document.getElementById('email');
const message = document.getElementById('text');
let user;
function saveData() {
  user = {
    name: '',
    email1: '',
    message: '',
  };
  user.name = username.value;
  user.email1 = email1.value;
  user.message = message.value;
  localStorage.setItem('usermessage', JSON.stringify(user));
}
username.onchange = saveData;
email1.onchange = saveData;
message.onchange = saveData;

// document.forms[0].reset(); to clear the form for the next entries
// Or I can use -> document.querySelector('form').reset();
// but the reset of the form dont let me validate the form.////////////

// Preserve input data with reload or refresh
window.addEventListener('load', () => {
  user = JSON.parse(localStorage.getItem('usermessage'));
  if (user) {
    username.value = user.name;
    email1.value = user.email1;
    message.value = user.message;
  }
});
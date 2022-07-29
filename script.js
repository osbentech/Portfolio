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

// <--popup starts here-->
const popUp = document.querySelector('.popcontainer');
const popProj = document.querySelector('.popProj');
const popName = document.querySelector('.popName');
const popPic = document.querySelector('.pphoto');
const popTex = document.querySelector('.popText');
const popList = document.getElementById('popList1');
const popClose = document.querySelector('.close-btn');
const popUpLive = document.getElementById('popUpLive');
const popUpSource = document.getElementById('popUpSource');
const popProject1 = document.getElementById('btn-1');
const popProject2 = document.getElementById('btn-2');
const popProject3 = document.getElementById('btn-3');
const popProject4 = document.getElementById('btn-4');


const projArr = [
  {
    id:1,
    pName: 'BENtech',
    PAuthur: 'BENtech &nbsp; &bull; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'this project was designed and developed by Benjamin Ejike while studying with microverse, kindly report any copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSourse: 'https://github.com/osbentech'
  },
  {
    id:2,
    pName: 'BENtech',
    PAuthur: 'BENtech &nbsp; &bull; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'this project was designed and developed by Benjamin Ejike while studying with microverse, kindly report any copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSourse: 'https://github.com/osbentech'
  },
  {
    id:3,
    pName: 'BENtech',
    PAuthur: 'BENtech &nbsp; &bull; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'this project was designed and developed by Benjamin Ejike while studying with microverse, kindly report any copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSourse: 'https://github.com/osbentech'
  },
  {
    id:4,
    pName: 'BENtech',
    PAuthur: 'BENtech &nbsp; &bull; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    pPic: 'photo/ben/ben4.png',
    pText: 'this project was designed and developed by Benjamin Ejike while studying with microverse, kindly report any copyright.',
    pTechs: ['Html', 'Css', 'JavaScript'],
    pLive: 'https://osbentech.github.io/Portfolio/',
    pSourse: 'https://github.com/osbentech'
  },
];
function popFill(arr, num) {
  const proj = arr[num];
  popProj.textContent = proj.pName;
  popName.innerHTML = proj.pAuthur;
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
popProject1.addEventListener('click', () => {
  popUp.classList.toggle('active');
  popFill(projArr, 0);
});
popProject2.addEventListener('click', () => {
  popUp.classList.toggle('active');
  popFill(projArr, 1);
});
popProject3.addEventListener('click', () => {
  popUp.classList.toggle('active');
  popFill(projArr, 2);
});
popProject4.addEventListener('click', () => {
  popUp.classList.toggle('active');
  popFill(projArr, 3);
});

popClose.addEventListener('click', () => {
  popUp.classList.remove('active');
});
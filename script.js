const menu = document.querySelector('.menu');
const menuList = document.querySelector('.t-menu');
const close = document.querySelector('.c-button');
const lists = document.querySelector('.tul');
const allCards = document.querySelector('.all-cards-container');
const section = document.createElement('section');
allCards.appendChild(section);
section.innerHTML = `
    <section id="tul-1" class="middle-section-container">
      <div class="image-area">
        <img src="photo/logos/Snapshoot-Portfolio.png" alt="Benjamin">
      </div>

      <div class="destop-tonic-img">
        <img src="photo/navs/Snapshoot-Portfolio.jpg" alt="">
      </div>

      <div class="hero">
        <div class="tonic">
          <h1>Tonic</h1>
            <div class="canopy-wrapper">
              <p>CANOPY</p>
                <ul>
                <li>Back End Dev</li>
                  <li>2015</li>
                </ul>
            </div>
        </div>

          <div class="text-area">
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
          </div>

        <div class="middle-section-nav-bars">
          <ul class="technology">
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
        </div>

        <button class="project-link" type="submit">See Project</button>
      </div>
    </section>


      <section class="middle-section-container2">
      <div class="image-area">
      <img src="photo/logos/Snapshoot-Portfolio2.png" alt="Benjamin">
      </div>

      <div class="hero">
      <div class="tonic2">
          <h1>Multi-Post Stories</h1>
          <div class="canopy-wrapper">
            <p>CANOPY</p>
            <ul>
              <li>Back End Dev</li>
              <li>2015</li>
            </ul>
          </div>
      </div>

        <div class="text-area">
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.
          </p>
        </div>

        <div class="middle-section-nav-bars">
          <ul class="technology">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
        </div>

        <button class="project-link1" type="submit">See Project</button>
      </div>
      </section>

      <section class="middle-section-container">
      <div class="image-area">
      <img src="photo/logos/Snapshoot-Portfolio3.png" alt="Benjamin">
      </div>

      <div class="hero">
        <div class="tonic">
          <h1>Tonic</h1>
            <div class="canopy-wrapper">
              <p>CANOPY</p>
                <ul>
                <li>Back End Dev</li>
                  <li>2015</li>
                </ul>
            </div>
        </div>

          <div class="text-area">
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
          </div>

        <div class="middle-section-nav-bars">
          <ul class="technology">
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
        </div>

        <button class="project-link2" type="submit">See Project</button>
      </div>
    </section>

    <section id="tul-1" class="middle-section-container2">
      <div class="image-area">
      <img src="photo/logos/Snapshoot-Portfolio4.png" alt="Benjamin">
      </div>

      <div class="hero">
      <div class="tonic2">
          <h1>Multi-Post Stories</h1>
          <div class="canopy-wrapper">
            <p>CANOPY</p>
            <ul>
              <li>Back End Dev</li>
              <li>2015</li>
            </ul>
          </div>
      </div>

        <div class="text-area">
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.
          </p>
        </div>

        <div class="middle-section-nav-bars">
          <ul class="technology">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
        </div>

        <button class="project-link3 type="submit">See Project</button>
      </div>
    </section>
`;

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

const open = document.querySelector('.project-link');
open.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main'
  const popup = document.createElement('div');
  popup.className = 'popup'
  popup.innerHTML = `
      <section id="tul-1" class="middle-section-container">
        <div class="middle-section-nav-bars">
          <ul class="technology">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
          </div>
        <div class="popimg">
          <img src="photo/logos/Snapshoot-Portfolio.png" alt="Benjamin">
        </div>

        <div class="destop-tonic-img">
          <img src="photo/navs/Snapshoot-Portfolio.jpg" alt="">
        </div>

        <div class="hero">
          <div class="tonic">
            <h1>Tonic</h1>
              <div class="canopy-wrapper">
                <p>bentech</p>
                  <ul>
                  <li>Back End Dev</li>
                    <li>2022</li>
                  </ul>
              </div>
          </div>

            <div class="text-area">
              <p>designed and developed by Benjamin Ejike, this project is only for learning purpose
              </p>
            </div>

            <div class="live">
              <div class="see1">
                <button class="bee-btn"><a href="#see-1">See live</a></button>
                <img src="photo/logos/github.jpg" alt="">
              </div>
          
              <div class="see1">
                <button class="bee-btn"><a href="#see-2">See source</a></button>
                <img src="photo/logos/github.jpg" alt="">
              </div>
            </div>

          <button class="close" type="submit">&times</button>
        </div>
      </section>
    
  `;

  main.appendChild(popup);
  allCards.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    allCards.removeChild(main);
  });

});

const open1 = document.querySelector('.project-link1');
open1.addEventListener('click', () => {
  const main1 = document.createElement('div');
  main1.className = 'main1'
  const popup1 = document.createElement('div');
  popup1.className = 'popup1'
  popup1.innerHTML = `
  <section class="middle-section-container2">
  
      <div class="middle-section-nav-bars">
        <ul class="technology">
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
      </div>
      <div class="popimg">
      <img src="photo/logos/Snapshoot-Portfolio2.png" alt="Benjamin">
      </div>

      <div class="hero">
      <div class="tonic2">
          <h1>Multi-Post Stories</h1>
          <div class="canopy-wrapper">
            <p>Bentech</p>
            <ul>
              <li>Back End Dev</li>
              <li>2015</li>
            </ul>
          </div>
      </div>

        <div class="text-area">
          <p>This project was designed by Benjamin Ejike, while studying with microverse.
          </p>
        </div>

        <div class="live">
          <div class="see1">
            <button class="bee-btn"><a href="#see-1">See live</a></button>
            <img src="photo/logos/github.jpg" alt="">
          </div>
    
          <div class="see1">
            <button class="bee-btn"><a href="#see-2">See source</a></button>
            <img src="photo/logos/github.jpg" alt="">
          </div>
        </div>

        <button class="close1" type="submit">&times</button>
      </div>
      </section>
  `;

  main1.appendChild(popup1);
  allCards.appendChild(main1);

  const close1 = document.querySelector('.close1');
  close1.addEventListener('click', () => {
    allCards.removeChild(main1);
  });

});


const open2 = document.querySelector('.project-link2');
open2.addEventListener('click', () => {
  const main2 = document.createElement('div');
  main2.className = 'main2'
  const popup2 = document.createElement('div');
  popup2.className = 'popup2'
  popup2.innerHTML = `
  
  <section class="middle-section-container">
        <div class="middle-section-nav-bars">
          <ul class="technology">
           <li>html</li>
           <li>css</li>
           <li>javascript</li>
          </ul>
        </div>
      <div class="popimg">
       <img src="photo/logos/Snapshoot-Portfolio3.png" alt="Benjamin">
      </div>

      <div class="hero">
        <div class="tonic">
          <h1>Tonic</h1>
            <div class="canopy-wrapper">
              <p>CANOPY</p>
                <ul>
                <li>Back End Dev</li>
                  <li>2015</li>
                </ul>
            </div>
        </div>

          <div class="text-area">
            <p>This project was designed by Benjamin Ejike, while studying with microverse.
            </p>
          </div>

          <div class="live">
            <div class="see1">
              <button class="bee-btn"><a href="#see-1">See live</a></button>
              <img src="photo/logos/github.jpg" alt="">
            </div>
        
            <div class="see1">
             <button class="bee-btn"><a href="#see-2">See source</a></button>
             <img src="photo/logos/github.jpg" alt="">
            </div>
          </div>

        <button class="close2" type="submit">&times</button>
      </div>
    </section>
  `;

  main2.appendChild(popup2);
  allCards.appendChild(main2);

  const close2 = document.querySelector('.close2');
  close2.addEventListener('click', () => {
    allCards.removeChild(main2);
  });

});

const open3 = document.querySelector('.project-link3');
open3.addEventListener('click', () => {
  const main3 = document.createElement('div');
  main3.className = 'main3'
  const popup3 = document.createElement('div');
  popup3.className = 'popup3'
  popup3.innerHTML = `
  
  <section id="tul-1" class="middle-section-container2">
    <div class="middle-section-nav-bars">
      <ul class="technology">
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
    </div>
  <div class="popimg">
  <img src="photo/logos/Snapshoot-Portfolio4.png" alt="Benjamin">
  </div>

  <div class="hero">
  <div class="tonic2">
      <h1>Multi-Post Stories</h1>
      <div class="canopy-wrapper">
        <p>CANOPY</p>
        <ul>
          <li>Back End Dev</li>
          <li>2015</li>
        </ul>
      </div>
  </div>

    <div class="text-area">
      <p>one of many works of Benjamin Ejike, mainly for learning purpose only, report any illegal copyright.
      </p>
    </div>

    <div class="live">
      <div class="see1">
        <button class="bee-btn"><a href="#see-1">See live</a></button>
        <img src="photo/logos/github.jpg" alt="">
      </div>
    
      <div class="see1">
        <button class="bee-btn"><a href="#see-2">See source</a></button>
        <img src="photo/logos/github.jpg" alt="">
      </div>
    </div>

    <button class="close3 type="submit">&times</button>
  </div>
</section>
  `;
  main3.appendChild(popup3);
  allCards.appendChild(main3);

  const close3 = document.querySelector('.close3');
  close3.addEventListener('click', () => {
    allCards.removeChild(main3);
  });

});
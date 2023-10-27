document.addEventListener('DOMContentLoaded', () => {
   // Custom JS

   // =======================================
   // ============ preloader=================
   // =======================================
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
   }, 500);

   // =======================================
   // ================== age ================
   // ======================================= 
   const age_els = document.querySelectorAll('.js-age'),

         date = new Date(),

         today_year = date.getFullYear(),
         today_mounth = date.getMonth(),
         today_day = date.getDate(),

         birsday_year = 1986,
         birsday_mounth = 4 - 1,
         birsday_day = 18;

   let age = today_year - birsday_year;
   if (today_mounth < birsday_mounth) {
      age -= 1;
   }
   if (today_mounth == birsday_mounth) {
      if (today_day < birsday_day) {
         age -= 1;
      }
   }

   if (age_els.length > 0) {
      for(item of age_els) {
         item.innerText = age;
      }
   }


   // =======================================
   // ============ progress skill ===========
   // =======================================  
   let skills = document.querySelectorAll('.js-skill')
   for (skill of skills) {
      skill.classList.add('wow')
      skill.classList.add('fadeIn')
      skill.setAttribute('data-wow-duration', '1s');
      skill.setAttribute('data-wow-offset', '25');
   }

   let wowSkill = new WOW({
      boxClass: 'js-skill',
      callback: function (skill) {
         let skillProgresEl = skill.querySelector('.skill__progress_value')
         let valueSkill = skillProgresEl.getAttribute('data-value')
         skillProgresEl.style.width = valueSkill
      }
   }).init()


   // ===========================================
   // ============ localization ru en ===========
   // ===========================================
   const btn_ru = document.querySelector('.js-ru');
   const btn_en = document.querySelector('.js-en');

   const variantBrowserLangForRu = ['ru', 'ru-ru', 'uk-uk', 'uk-ua', 'uk', 'be-be', 'be']
   const ru_val = 'ru'
   const en_val = 'en'
   let interfaceLang

   const contentSearch = {
      ru: {
         about_me_1: 'Привет, я фронтенд разработчик с опытом работы с 2017 года.<br>Моя специализация включает разработку с использованием React.js и HTML верстки.<br>Я стараюсь создавать эффективные и интуитивно понятные пользовательские интерфейсы для веб-приложений.',
         about_me_2: 'Мой опыт работы позволяет мне разрабатывать масштабируемые решения, которые отлично интегрируются с бэкендом. Активно использую React.js, чтобы создавать переиспользуемые компоненты, улучшать производительность и обеспечивать удобную навигацию по веб-сайту.',
         about_me_3: 'Благодаря моим знаниям HTML верстки, я могу создавать структурированные и семантически правильные веб-страницы. Уделяю внимание деталям, чтобы создать визуально привлекательные и отзывчивые интерфейсы, которые хорошо работают на разных устройствах.',
         about_me_4: 'Стремлюсь к постоянному совершенствованию и следую последним трендам и лучшим практикам в своей области. Готов к сотрудничеству и интересным проектам, которые потребуют смелых и инновационных подходов.',
         about_me_5: 'С нетерпением жду возможности работать над вашими проектами и помочь воплотить ваши идеи в жизнь.',

         experience_1: 'Верстка лендингов, корпоративных сайтов.',
         experience_2: 'Верстка лендингов, корпоративных сайтов, немного насадка на WordPress.',
         experience_3: 'Верстка сайтов-блогов, корпоративных сайтов.',
         experience_5: 'Front-end, настройка LAMP, управление доменами, написание скриптов на python (автоматизация процессов обработки датасетов с изображениями, парсер), обучение нейронной сети, дизайн мобильных приложений и веб-сайтов, релиз мобильных приложений в AppStore и PlayMarket...',
         experience_6: 'Верстка лендингов, поддержка сайта на WordPress (Frontend часть).',
         experience_7: 'Фронтенд разработка (React JS, Redux, JavaScript) и HTML-верстка.',

         my_works_1: 'Многостраничный сайт для обзора криптовалютных бирж.',
         my_works_2: 'Многостраничный сайт-блог.',
         my_works_3: 'Корпоративный сайт строительной компании.',
         my_works_4: 'Лендинг для пивоварни.',
         my_works_5: 'Главная страница сайта с расширенным фильтром для записи к мастеру.',
         my_works_6: 'Шапка сайта в виде анимированного слайдера.',
         my_works_7: 'Одностраничный сайт в виде 3D-скролла.',
         my_works_8: 'Галерея с 3D эффектом.',
         my_works_9: 'Галерея на меняющемся blur-фоне.',
         my_works_10: 'Сайт по сбору инвестиций для волонтерской организации.',
         my_works_11: 'Галерея с эффектом maysonry.',
         my_works_12: 'Многостраничный сайт для студии дизайна интерьеров.',
         my_works_13: 'Сайт для презентации волонтерского проекта.',
         my_works_14: 'Платформа для аренды автомобилей в Литве.',
         my_works_15: 'Платформа для компаний в сфере логистики.',
         my_works_16: 'Корпоративный сайт компании, занимающейся разработкой ботов.',
      },

      en: {
         about_me_1: 'Hi, I am a front-end developer with experience since 2017.<br>My specialization includes development using React.js and HTML layout.<br>I strive to create efficient and intuitive user interfaces for web applications.',
         about_me_2: 'My work experience allows me to develop scalable solutions that integrate well with the backend. I use React.js extensively to create reusable components, improve performance, and provide easy website navigation.',
         about_me_3: 'Thanks to my knowledge of HTML layout, I can create structured and semantically correct web pages. I pay attention to detail to create visually appealing and responsive interfaces that work well across devices.',
         about_me_4: 'I strive for continuous improvement and follow the latest trends and best practices in my field. I am ready for cooperation and interesting projects that will require bold and innovative approaches.',
         about_me_5: 'I look forward to working on your projects and helping bring your ideas to life.',

         experience_1: 'Layout of landing pages, corporate sites.',
         experience_2: 'Layout of landing pages, corporate sites, a little bit of WordPress add-on.',
         experience_3: 'Layout of blog sites, corporate sites.',
         experience_5: 'Front-end, setting up LAMP, managing domains, writing scripts in python (automating processes for processing datasets with images, parser), training a neural network, designing mobile applications and websites, releasing mobile applications in AppStore and PlayMarket ...',
         experience_6: 'Layout of landing pages, site support on WordPress (Frontend part).',
         experience_7: 'Frontend development (React JS, Redux, JavaScript) and HTML layout.',

         my_works_1: 'Multi-page site for an overview of cryptocurrency exchanges.',
         my_works_2: 'Multi-page blog site.',
         my_works_3: 'The corporate website of the construction company.',
         my_works_4: 'Landing page for a brewery.',
         my_works_5: 'The main page of the site with an advanced filter for writing to the master.',
         my_works_6: 'Header of the site in the form of an animated slider.',
         my_works_7: 'One-page site in the form of a 3D scroll.',
         my_works_8: 'Gallery with 3D effect.',
         my_works_9: 'Gallery on a changing blur background.',
         my_works_10: 'Website for fundraising for a volunteer organization.',
         my_works_11: 'Gallery with maysonry effect.',
         my_works_12: 'Multipage website for an interior design studio.',
         my_works_13: 'Site application for presenting a volunteer project.',
         my_works_14: 'A Platform for car rental in Lithuania.',
         my_works_15: 'A platform for companies in the logistics sector.',
         my_works_16: 'Corporate website of a company developing bots.',
      }
   }

   function ChangeValInterfaceLang() {
      // if the language has not been selected manually
      if (typeof localStorage.lang === 'undefined') {
         let browserLang = navigator.language || navigator.userLanguage;
         browserLang = browserLang.toLowerCase()
         for (variant of variantBrowserLangForRu) {
            // for Russian speakers
            if (browserLang === variant) {
               btn_en.classList.remove('active')
               btn_ru.classList.add('active')
               interfaceLang = ru_val
               break
            }
            // for English speaking
            else {
               btn_ru.classList.remove('active')
               btn_en.classList.add('active')
               interfaceLang = en_val
            }
         }
      }
      // if the language was selected manually
      else {
         if (localStorage.lang == ru_val) {
            interfaceLang = ru_val
            btn_en.classList.remove('active')
            btn_ru.classList.add('active')
         } else {
            interfaceLang = en_val
            btn_ru.classList.remove('active')
            btn_en.classList.add('active')
         }
      }
   }
   function changeLangContent() {
      let langChangeItems = document.querySelectorAll('.js-lang-change-el')
      for (item of langChangeItems) {
         if (interfaceLang == ru_val) {
            item.innerText = item.getAttribute('data-lang_ru')
         }
         if (interfaceLang == en_val) {
            item.innerText = item.getAttribute('data-lang_en')
         }
      }
   }
   function RenderContentSearch() {
      const contentSearchItems = document.querySelectorAll('.js-lang-change-search')
      for (item of contentSearchItems) {
         let valDataLangItem = item.getAttribute('data-content-search')
         item.innerHTML = contentSearch[interfaceLang][valDataLangItem]
      }
   }

   function logicChangeLang() {
      ChangeValInterfaceLang()
      changeLangContent()
      RenderContentSearch()
   }
   logicChangeLang()

   btn_ru.addEventListener('click', function () {
      if (this.classList.contains('active') == false) {
         localStorage.setItem('lang', ru_val)
         logicChangeLang()
      }
   })

   btn_en.addEventListener('click', function () {
      if (this.classList.contains('active') == false) {
         localStorage.setItem('lang', en_val)
         logicChangeLang()
      }
   })




   // Custom jQ

   //-----for scroll to top------
   // hide #back-top first
   $(".scrolltop").hide();

   // fade in #back-top
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $('.scrolltop').fadeIn();
      } else {
         $('.scrolltop').fadeOut();
      }
   });

   // scroll body to 0px on click
   $('.scrolltop').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
   });
   //-----END for scroll to top------



})

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
         about_me_1: 'С 2017 года занимаюсь front-end разработкой.<br>Ответственно подхожу к работе и считаю, что детали очень важны.',
         about_me_2: 'Делаю качественную семантическую, кроссбраузерную, адаптивную HTML-верстку сайтов.',
         about_me_3: 'Принимал участие в стартапе по созданию таких проектов как:',
         about_me_3_1: 'распознавание лиц на фото и их анализ;',
         about_me_3_2: 'распознавание кожных заболеваний по фото.',
         about_me_4: 'В этих проектах моими функциями были:',
         about_me_4_1: 'Front-end разработка (верстка, настройка связи с сервером по API с использованием AJAX и JSON);',
         about_me_4_2: 'UI/UX интерфейсов мобильных приложений и функциональные веб-интерфейсы в Sketch и Figma;',
         about_me_4_3: 'обработка наборов данных с изображениями с помощью python;',
         about_me_4_4: 'сортировка и группировка наборов данных для разных разделов нейросети с помощью python;',
         about_me_4_5: 'обучение нейронной сети;',
         about_me_4_6: 'помощь отделу сбора данных (разработка парсера для сбора данных на python, настройка GitLab на VPS для хранения и совместной работы с данными);',
         about_me_4_7: 'настроить LAMP на VPS;',
         about_me_4_8: 'тестирование мобильных приложений;',
         about_me_4_9: 'поиск сотрудников как на полную ставку, так и на фриланс;',
         about_me_4_10: 'релиз мобильных приложений в AppStore и PlayMarket.',

         study_1: 'Курсы по html и css',
         study_2: 'Учебник по JavaScript',
         study_3: 'Курсы по html-верстке, веб-дизайну, gulp, scss',
         study_4: 'Курсы по jQuery, JavaScript',
         study_5: 'Курсы по git, linux, docker, ...',

         experience_1: 'Верстка лендингов, корпоративных сайтов.',
         experience_2: 'Верстка лендингов, корпоративных сайтов, немного насадка на WordPress.',
         experience_3: 'Верстка сайтов-блогов, корпоративных сайтов.',
         experience_5: 'Front-end, настройка LAMP, управление доменами, написание скриптов на python (автоматизация процессов обработки датасетов с изображениями, парсер), обучение нейронной сети, дизайн мобильных приложений и веб-сайтов, релиз мобильных приложений в AppStore и PlayMarket...',
         experience_6: 'Верстка лендингов, поддержка сайта на WordPress (Frontend часть).',

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
      },

      en: {
         about_me_1: 'I have been doing front-end development since 2017.<br>I approach my work responsibly and I think that the details are very important.',
         about_me_2: 'I know how to make high-quality semantic, cross-browser, adaptive HTML-layout of sites.',
         about_me_3: 'I took part in a startup to develop such projects as:',
         about_me_3_1: 'face recognition in the photo and their analysis;',
         about_me_3_2: 'recognition of skin diseases in the photo.',
         about_me_4: 'In these projects, my functions were:',
         about_me_4_1: 'Front-end development (layout, setting up communication with the server via API using ajax and JSON);',
         about_me_4_2: 'UI/UX interfaces of mobile applications and functional web interfaces in Sketch and Figma;',
         about_me_4_3: 'processing datasets with images using python;',
         about_me_4_4: 'sorting and grouping data-sets for different sections of the neural network using python;',
         about_me_4_5: 'neural network training;',
         about_me_4_6: 'assistance to the data collection department (development of a parser for data collection in python, setting up GitLab on VPS for storage and teamwork with data);',
         about_me_4_7: 'setup LAMP on VPS;',
         about_me_4_8: 'testing of mobile applications;',
         about_me_4_9: 'search for employees both full-time and freelance;',
         about_me_4_10: 'release of mobile applications in AppStore and PlayMarket.',


         study_1: 'Html and css courses',
         study_2: 'JavaScript tutorial',
         study_3: 'Courses in html layout, web design, gulp, scss',
         study_4: 'JQuery, JavaScript courses',
         study_5: 'Courses on git, linux, docker, ...',

         experience_1: 'Layout of landing pages, corporate sites.',
         experience_2: 'Layout of landing pages, corporate sites, a little bit of WordPress add-on.',
         experience_3: 'Layout of blog sites, corporate sites.',
         experience_5: 'Front-end, setting up LAMP, managing domains, writing scripts in python (automating processes for processing datasets with images, parser), training a neural network, designing mobile applications and websites, releasing mobile applications in AppStore and PlayMarket ...',
         experience_6: 'Layout of landing pages, site support on WordPress (Frontend part).',

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

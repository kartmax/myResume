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
         about_me_2: 'Мой опыт работы позволяет мне разрабатывать масштабируемые решения, которые отлично интегрируются с бэкендом. Я активно использую React.js, чтобы создавать переиспользуемые компоненты, улучшать производительность и обеспечивать удобную навигацию по веб-сайту.',
         about_me_3: 'Благодаря моим знаниям HTML верстки, я могу создавать структурированные и семантически правильные веб-страницы. Я уделяю внимание деталям, чтобы создать визуально привлекательные и отзывчивые интерфейсы, которые хорошо работают на разных устройствах.',
         // about_me_3_1: 'компиляция SCSS;',
         // about_me_3_2: 'написание HTML разметки с разделением на компоненты;',
         // about_me_3_3: 'прописание автопрефиксов в CSS;',
         // about_me_3_4: 'минификация CSS и JS;',
         // about_me_3_5: 'создание SVG и PNG спрайтов;',
         // about_me_3_6: 'оптимизация верстки с помощью внедрения формата изображений WEBP.',
         about_me_4: 'Я стремлюсь к постоянному совершенствованию и следую последним трендам и лучшим практикам в своей области. Я готов к сотрудничеству и интересным проектам, которые потребуют смелых и инновационных подходов.',
         about_me_5: 'С нетерпением жду возможности работать над вашими проектами и помочь воплотить ваши идеи в жизнь.',
         // about_me_6: 'На хорошем уровне знаком с графическими инструментами Sketch и Figma.</br>Есть опыт в построении ux/ui интерфейсов мобильных приложений и web-интерфейсов.</br>Знаком с интсрументами Marvel и InVision для интерактивной презентации дизайн-макетов.',
         // about_me_7: 'При командной работе над проектом использую систему управления версиями Git.</br>Есть опыт в настройке Gitlab на выделенном VPS, или настройке git репозитория (git --bare init) на сервере с протоколом ssh для командной работы над проектом.',
         // about_me_8: 'Изучаю библиотеку ReactJS.</br>В процессе изучения делаю проект - <a href="https://github.com/kartmax/react-social-network" class="work__link" target="_blank">SocialNetwork</a>.',
         // about_me_9: 'Дополнительно изучал и применял в рабочих задачах:',
         // about_me_9_1: 'Linux Ubuntu - работа с командной строкой, работа на удаленных серверах по протоколу ssh, аренда VPS на сервисах DigitalOcean и AWS ES2, настойка LAMP, настройка доступа по ssh-протоколу;',
         // about_me_9_2: 'Python3 - работа с базой данных изображений при обучении нейронной сети, работа с базой данных MySQL при формировании датасетов для обучения разных направлений нейронной сети;',
         // about_me_9_3: 'SQL и MySQL - выборки из базы данных для формирования датасетов для обучения разных направлений нейронной сети;',
         // about_me_9_4: 'Django и Django Rest Framework - написание rest-api для веб-приложения на кулинарную тематику;',
         // about_me_9_5: 'Domain и DNS - покупка доменных имен на сервисе GoDaddy, управление DNS приобретенных доменов;',
         // about_me_9_6: 'Slack и Bitbucket - настройка интеграции месседжера Slack с удаленным репозиторием Bitbucket для удобства отслеживания процесса разработки при командной работе над проектом;',
         // about_me_9_7: 'Quip и Trello - документация функционала и распределение задач;',
         // about_me_9_8: 'XCode и AndroidStudio - релиз мобильных приложений в AppStore и PlayMarket.',
         // about_me_10: 'Принимал участие в стартапе по созданию проектов:',
         // about_me_10_1: 'Faces - распознавание лиц на фото и их анализ;',
         // about_me_10_2: 'Medbot - распознавание кожных заболеваний по фото.',

         // study_1: 'Курсы по html и css',
         // study_2: 'Учебник по JavaScript',
         // study_3: 'Курсы по html-верстке, веб-дизайну, gulp, scss',
         // study_4: 'Курсы по jQuery, JavaScript',
         // study_5: 'Курсы по git, linux, docker, ...',

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
         my_works_13: 'SPA приложение на нативном JS для десктопных экранов.',
      },

      en: {
         about_me_1: 'Hi, I am a front-end developer with experience since 2017.<br>My specialization includes development using React.js and HTML layout.<br>I strive to create efficient and intuitive user interfaces for web applications.',
         about_me_2: 'My work experience allows me to develop scalable solutions that integrate well with the backend. I use React.js extensively to create reusable components, improve performance, and provide easy website navigation.',
         about_me_3: 'Thanks to my knowledge of HTML layout, I can create structured and semantically correct web pages. I pay attention to detail to create visually appealing and responsive interfaces that work well across devices.',
         // about_me_3_1: 'SCSS compilation;',
         // about_me_3_2: 'writing HTML markup with division into components;',
         // about_me_3_3: 'writing autoprefixes in CSS;',
         // about_me_3_4: 'CSS and JS minification;',
         // about_me_3_5: 'creating SVG and PNG sprites;',
         // about_me_3_6: 'layout optimization by implementing the WEBP image format.',
         about_me_4: 'I strive for continuous improvement and follow the latest trends and best practices in my field. I am ready for cooperation and interesting projects that will require bold and innovative approaches.',
         about_me_5: 'I look forward to working on your projects and helping bring your ideas to life.',
         // about_me_6: 'Good knowledge of Sketch and Figma graphic tools.</br>Experience in building ux/ui interfaces for mobile applications and web interfaces.</br>Familiar with Marvel and InVision tools for interactive presentation of design layouts.',
         // about_me_7: 'When working on a team project, I use the Git version control system.</br>I have experience in setting up Gitlab on a dedicated VPS, or setting up a git repository (git --bare init) on a server with the ssh protocol for team work on a project.',
         // about_me_8: 'I am learning the ReactJS library.</br>In the process of learning, I am making a project - <a href="https://github.com/kartmax/react-social-network" class="work__link" target="_blank">SocialNetwork</a>.',
         // about_me_9: 'Additionally studied and applied in work tasks:',
         // about_me_9_1: 'Linux Ubuntu - working with the command line, working on remote servers via the ssh protocol, renting a VPS on DigitalOcean and AWS ES2 services, configuring LAMP, configuring access via the ssh protocol;',
         // about_me_9_2: 'Python3 - working with an image database when training a neural network, working with a MySQL database when generating datasets for training different directions of a neural network;',
         // about_me_9_3: 'SQL and MySQL - selections from the database for the formation of datasets for training different directions of the neural network;',
         // about_me_9_4: 'Django and Django Rest Framework - writing a rest-api for a web application on a culinary theme;',
         // about_me_9_5: 'Domain and DNS - buying domain names on the GoDaddy service, managing the DNS of purchased domains;',
         // about_me_9_6: 'Slack and Bitbucket - setting up the integration of the Slack messenger with a remote Bitbucket repository for the convenience of tracking the development process when working on a team project;',
         // about_me_9_7: 'Quip and Trello - functionality documentation and task distribution;',
         // about_me_9_8: 'XCode and AndroidStudio - release of mobile applications in AppStore and PlayMarket.',
         // about_me_10: 'Participated in a startup to create projects:',
         // about_me_10_1: 'Faces - face recognition in the photo and their analysis;',
         // about_me_10_2: 'Medbot - recognition of skin diseases by photo.',


         // study_1: 'Html and css courses',
         // study_2: 'JavaScript tutorial',
         // study_3: 'Courses in html layout, web design, gulp, scss',
         // study_4: 'JQuery, JavaScript courses',
         // study_5: 'Courses on git, linux, docker, ...',

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
         my_works_13: 'SPA application on native JS for desktop screens.',
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

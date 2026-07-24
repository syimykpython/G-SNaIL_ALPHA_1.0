// ==========================================
// 1. ЕДИНАЯ ОБЛОЖКА И ИКОНКИ ДЛЯ ВСЕХ КНИГ
// ==========================================
const DEFAULT_COVER = "/static/books/images/default_book.png";

const subjectIcons = {
  "Алгебра": "📊", "Математика": "📐", "Геометрия": "📏",
  "Русский язык": "📝", "Литература": "📖", "Английский": "🇬🇧",
  "Физика": "⚡", "Химия": "🧪", "Биология": "🌿",
  "История": "🏛️", "Кыргызский": "🏔️", "Адабият": "📚"
};

// ==========================================
// 2. БАЗА ДАННЫХ КНИГ
// ==========================================
const books = [
  // --- 5 КЛАСС ---
  { title: "Математика 5 кл. (1-2 часть)", author: "Виленкин", grade: 5, subject: "Математика", link: "https://gretabakunts.wordpress.com/wp-content/uploads/2017/09/vklasse_matematuka_5-klass_vilenkin_johov_chesnokov_shvarcbyrd_2013.pdf" },
  { title: "Русский язык 5 кл.", author: "Бреусенко", grade: 5, subject: "Русский язык", link: "https://mektep.o.kg/books/4/?grade=5&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA" },
  { title: "Русский язык 5 кл. (1-2 часть)", author: "Ладыженская", grade: 5, subject: "Русский язык", link: "https://www.at.alleng.org/d/rusl/rusl366.htm" },
  { title: "Литература 5 кл.", author: "Озмитель", grade: 5, subject: "Литература", link: "https://new.bizdin.kg/media/books/Russian-literature_Grade-5.pdf" },
  { title: "Кыргызский язык 5 кл.", author: "Жусупбекова", grade: 5, subject: "Кыргызский", link: "https://kitep.edu.kg/book/90/read" },
  { title: "История 5 кл.", author: "Билим", grade: 5, subject: "История", link: "https://stem.edu.gov.kg/books/kyrgyz-tili" },
  { title: "Английский язык 5 кл.", author: "Абдышева", grade: 5, subject: "Английский", link: "https://mektep.o.kg/books/4/?grade=5&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA" },
  { title: "Адабият 5 кл.", author: "Мусаев / Муратов", grade: 5, subject: "Адабият", link: "https://kitep.edu.kg/grade/5" },

  // --- 6 КЛАСС ---
  { title: "Математика 6 кл.", author: "Кыдыралиев", grade: 6, subject: "Математика", link: "https://www.biblioteka.kg/book/1568" },
  { title: "Математика 6 кл.", author: "Виленкин", grade: 6, subject: "Математика", link: "https://vshkole.com/6-klass/uchebniki/matematika/nyu-vilenkin-vi-zhohov-as-chesnokov-si-shvartsburd-2013" },
  { title: "Русский язык 6 кл.", author: "Бреусенко", grade: 6, subject: "Русский язык", link: "https://mektep.o.kg/books/164/" },
  { title: "Русский язык 6 кл.", author: "Бондаренко", grade: 6, subject: "Русский язык", link: "https://gdz.ru/class-6/russkii_yazik/bondarenko/" },
  { title: "Биология 6 кл.", author: "Субанова", grade: 6, subject: "Биология", link: "https://www.biblioteka.kg/book/1557" },
  { title: "Английский язык 6 кл.", author: "Абдышева", grade: 6, subject: "Английский", link: "https://biblioteka.kg/book/1501" },
  { title: "Кыргызский язык 6 кл.", author: "Жусупбекова", grade: 6, subject: "Кыргызский", link: "https://mektep.o.kg/books/159/" },
  { title: "Литература 6 кл.", author: "Озмитель", grade: 6, subject: "Литература", link: "https://vshkole.kg/6-klass/literatura-6-klass-ozmitel-e-g-suhocheva-a-v/" },
  { title: "История Кыргызстана 6 кл.", author: "Осмонов", grade: 6, subject: "История", link: "https://mektep.o.kg/books/168/" },
  { title: "История 6 кл.", author: "Агибалова", grade: 6, subject: "История", link: "https://vshkole.com/6-klass/uchebniki/vseobschaya-istoriya/ev-agibalova-gm-donskoy-2012" },
  { title: "Адабият 6 кл.", author: "Мусаев", grade: 6, subject: "Адабият", link: "https://www.biblioteka.kg/book/1407" },
  { title: "Адабият 6 кл.", author: "Муратов", grade: 6, subject: "Адабият", link: "https://www.biblioteka.kg/book/1461" },

  // --- 7 КЛАСС ---
  { title: "Алгебра 7 кл.", author: "Макарычев", grade: 7, subject: "Алгебра", link: "https://11klasov.net/142-algebra-7-klass-makarychev-yun-minder-ng-i-dr.html" },
  { title: "Геометрия 7-9 кл.", author: "Атанасян", grade: 7, subject: "Геометрия", link: "https://11klasov.net/171-geometriya-7-9-klassy-atanasyan-ls-butuzov-vf-i-dr.html" },
  { title: "Физика 7 кл.", author: "Мамбетакунов", grade: 7, subject: "Физика", link: "https://kitep.edu.kg/book/217" },
  { title: "Физика 7 кл.", author: "Василевич", grade: 7, subject: "Физика", link: "https://kitep.edu.kg/book/225" },
  { title: "Русский язык 7 кл.", author: "Ладыженская", grade: 7, subject: "Русский язык", link: "https://11klasov.net/145-russkiy-yazyk-7-klass-ladyzhenskaya-ta-baranov-mt-trostencova-la-i-dr.html" },
  { title: "Русский язык 7 кл.", author: "Бреусенко", grade: 7, subject: "Русский язык", link: "https://kitep.edu.kg/book/189" },
  { title: "Английский язык 7 кл.", author: "Абдышева", grade: 7, subject: "Английский", link: "https://kitep.edu.kg/book/142" },
  { title: "Литература 7 кл.", author: "Озмитель", grade: 7, subject: "Литература", link: "https://kitep.edu.kg/book/159" },
  { title: "Литература 7 кл. (1 часть)", author: "Коровина", grade: 7, subject: "Литература", link: "https://11klasov.net/1199-literatura-7-klass-uchebnik-v-2-chastyah-korovina-vya.html" },
  { title: "Литература 7 кл. (2 часть)", author: "Коровина", grade: 7, subject: "Литература", link: "https://11klasov.net/1200-literatura-7-klass-uchebnik-v-2-chastyah-chast-2-korovina-vya.html" },
  { title: "История 7 кл.", author: "Агибалова", grade: 7, subject: "История", link: "https://11klasov.net/263-istoriya-srednih-vekov-6-klass-agibalova-ev-donskoy-gm.html" },
  { title: "История Кыргызстана 7 кл.", author: "Осмонов", grade: 7, subject: "История", link: "https://kitep.edu.kg/book/219" },
  { title: "Адабият 7 кл.", author: "Мусаев", grade: 7, subject: "Адабият", link: "https://kitep.edu.kg/book/185" },
  { title: "Кыргызский язык 7 кл.", author: "Жусумбекова", grade: 7, subject: "Кыргызский", link: "https://kitep.edu.kg/book/178" },

  // --- 8 КЛАСС ---
  { title: "Алгебра 8 кл.", author: "Макарычев", grade: 8, subject: "Алгебра", link: "https://11klasov.net/135-algebra-8-klass-makarychev-yu-n-et-al.html" },
  { title: "Геометрия 7-11 кл.", author: "Погорелов", grade: 8, subject: "Геометрия", link: "https://uchebniki.online/geometriya/geometriya-7-11-klass-pogorelov" },
  { title: "Физика 8 кл.", author: "Перышкин", grade: 8, subject: "Физика", link: "https://11klasov.net/150-fizika-8-klass-peryshkin-a-v.html" },
  { title: "Физика 8 кл.", author: "Мамбетакунов", grade: 8, subject: "Физика", link: "https://kitep.edu.gov.kg/ru/book/140" },
  { title: "Химия 8 кл.", author: "Рыспаева", grade: 8, subject: "Химия", link: "https://kitep.edu.gov.kg/ru/book/132" },
  { title: "Русский язык 8 кл.", author: "Бархударов", grade: 8, subject: "Русский язык", link: "https://11klasov.net/2179-russkiy-yazyk-8-klass-barhudarov-sg-kryuchkov-se-i-dr.html" },
  { title: "Русский язык 8 кл.", author: "Ладыженская", grade: 8, subject: "Русский язык", link: "https://uchebniki.online/russkiy-yazyk/russkiy-yazyk-8-klass-ladyzhenskaya" },
  { title: "Русский язык 8 кл.", author: "Задорожная", grade: 8, subject: "Русский язык", link: "https://kitep.edu.gov.kg/ru/book/130" },
  { title: "История Кыргызстана 8 кл.", author: "Омурбеков", grade: 8, subject: "История", link: "https://kitep.edu.gov.kg/ru/book/150" },
  { title: "История 8 кл.", author: "Доталиев", grade: 8, subject: "История", link: "https://kitep.edu.gov.kg/ru/book/149" },
  { title: "Английский язык 8 кл.", author: "Абдышева", grade: 8, subject: "Английский", link: "https://kitep.edu.gov.kg/ru/book/128" },
  { title: "Адабият 8 кл.", author: "Муратов", grade: 8, subject: "Адабият", link: "https://kitep.edu.gov.kg/ru/book/136" },
  { title: "Кыргызский язык 8 кл.", author: "Жусумбекова", grade: 8, subject: "Кыргызский", link: "https://kitep.edu.gov.kg/ru/book/138" },
  { title: "Литература 8 кл.", author: "Беленький", grade: 8, subject: "Литература", link: "https://vuzer.info/load/shkola/literatura/literatura_8_klass_uchebnik_v_2_kh_chastjakh_belenkij_g_i/91-1-0-15582" },

  // --- 9 КЛАСС ---
  { title: "Алгебра 9 кл.", author: "Макарычев", grade: 9, subject: "Алгебра", link: "http://fliphtml5.com/guatb/bzdf/" },
  { title: "Химия 9 кл.", author: "Кудабергенов", grade: 9, subject: "Химия", link: "http://www.biblioteka.kg/book/1589" },
  { title: "Физика 9 кл.", author: "Перышкин", grade: 9, subject: "Физика", link: "http://www.alleng.org/d/phys/phys267.htm" },
  { title: "Физика 9 кл.", author: "Кикоин", grade: 9, subject: "Физика", link: "http://www.biblioteka.kg/category/104" },
  { title: "Русский язык 9 кл.", author: "Бархударов", grade: 9, subject: "Русский язык", link: "http://www.slideshare.net/slideshow/9-58238873/58238873" },
  { title: "Английский язык 9 кл.", author: "Абдышева", grade: 9, subject: "Английский", link: "http://www.biblioteka.kg/" },
  { title: "Кыргызский язык 9 кл.", author: "Абдувалиев", grade: 9, subject: "Кыргызский", link: "http://www.biblioteka.kg/category/104" },
  { title: "История Кыргызстана 9 кл.", author: "Иманкулов", grade: 9, subject: "История", link: "http://www.biblioteka.kg/category/104" },

  // --- 10 КЛАСС ---
  { title: "Алгебра и начала анализа 10-11 кл.", author: "Колмогоров", grade: 10, subject: "Алгебра", link: "https://11klasov.net/135-algebra-i-nachala-matematicheskogo-analiza-10-11-klassy-kolmogorov-an-i-dr.html" },
  { title: "Геометрия 10-11 кл.", author: "Атанасян", grade: 10, subject: "Геометрия", link: "https://11klasov.net/136-geometriya-10-11-klassy-atanasyan-ls-i-dr.html" },
  { title: "Физика 10 кл.", author: "Мякишев", grade: 10, subject: "Физика", link: "https://11klasov.net/284-fizika-10-klass-myakishev-gya-buhovcev-bb-sotckiy-nn.html" },
  { title: "Химия 10 кл.", author: "Габриэлян", grade: 10, subject: "Химия", link: "https://11klasov.net/2221-himiya-10-klass-bazovyy-uroven-gabrielyan-os.html" },
  { title: "История 10 кл.", author: "Сорока-Цюпа", grade: 10, subject: "История", link: "https://11klasov.net/3257-vseobschaya-istoriya-noveyshaya-istoriya-10-klass-soroko-cyupa-os-soroko-cyupa-ao.html" },
  { title: "История Кыргызстана 10 кл.", author: "Осмонов", grade: 10, subject: "История", link: "https://api.libraryiksu.kg/elibrary/books/Osmonov_Istoria%20kyrgyzstana%2020107128.pdf" },
  { title: "Русский язык 10 кл.", author: "Стандарт", grade: 10, subject: "Русский язык", link: "https://11klasov.net/russian-language/10-klass-russkiy/" },
  { title: "Английский язык 10 кл.", author: "Фатеева", grade: 10, subject: "Английский", link: "https://elib.edu.gov.kg/" },
  { title: "Адабият 10 кл.", author: "Стандарт", grade: 10, subject: "Адабият", link: "https://www.biblioteka.kg/category/105" },

  // --- 11 КЛАСС ---
  { title: "Алгебра и начала анализа 10-11 кл.", author: "Колмогоров", grade: 11, subject: "Алгебра", link: "https://11klasov.net/135-algebra-i-nachala-matematicheskogo-analiza-10-11-klassy-kolmogorov-an-i-dr.html" },
  { title: "Геометрия 10-11 кл.", author: "Погорелов", grade: 11, subject: "Геометрия", link: "https://11klasov.net/2397-geometriya-10-11-klassy-pogorelov-av.html" },
  { title: "Физика 11 кл.", author: "Мякишев", grade: 11, subject: "Физика", link: "https://11klasov.net/285-fizika-11-klass-myakishev-gya-buhovcev-bb-charugin-vm.html" },
  { title: "Физика 11 кл.", author: "Шаршекеев", grade: 11, subject: "Физика", link: "https://elib.edu.gov.kg/" },
  { title: "Химия 11 кл.", author: "Габриэлян", grade: 11, subject: "Химия", link: "https://11klasov.net/2222-himiya-11-klass-bazovyy-uroven-gabrielyan-os.html" },
  { title: "Химия 11 кл.", author: "Кудайбергенов", grade: 11, subject: "Химия", link: "https://lib.kg/" },
  { title: "История 11 кл.", author: "Улунян", grade: 11, subject: "История", link: "https://11klasov.net/3739-vseobschaya-istoriya-noveyshaya-istoriya-11-klass-bazovyy-i-uglublennyy-urovni-ulunyan-aa-sergeev-eyu-pod-red-chubaryana-ao.html" },
  { title: "История Кыргызстана 11 кл.", author: "Осмонов", grade: 11, subject: "История", link: "https://api.libraryiksu.kg/elibrary/books/Osmonov_Istoria%20kyrgyzstana%2020107128.pdf" },
  { title: "Русский язык 10-11 кл.", author: "Греков", grade: 11, subject: "Русский язык", link: "https://11klasov.net/143-russkiy-yazyk-10-11-klassy-grekov-vf-kryuchkov-se-cheshko-la.html" },
  { title: "Русский язык 11 кл.", author: "Задорожная", grade: 11, subject: "Русский язык", link: "https://lib.kg/" },
  { title: "Английский язык 11 кл.", author: "Цуканова", grade: 11, subject: "Английский", link: "https://elib.edu.gov.kg/" },
  { title: "Кыргызский язык 11 кл.", author: "Абылаева", grade: 11, subject: "Кыргызский", link: "https://www.biblioteka.kg/" },
  { title: "Адабият 11 кл.", author: "Ботобаев", grade: 11, subject: "Адабият", link: "https://www.biblioteka.kg/category/105" }
];

// ==========================================
// 3. ЛОГИКА ОТОБРАЖЕНИЯ
// ==========================================
let currentGrade = 5;
let currentSubject = null;

function filterGrade(grade, el) {
  currentGrade = grade;
  currentSubject = null;
  document.querySelectorAll('.sidebar-section ul li a').forEach(a => a.classList.remove('active'));
  if (el) el.classList.add('active');
  renderCards();
}

function filterSubject(subject, el) {
  currentSubject = subject;
  document.querySelectorAll('.sidebar-section ul li a').forEach(a => a.classList.remove('active'));
  if (el) el.classList.add('active');
  renderCards();
}

function renderCards() {
  const grid = document.getElementById('cardsGrid');
  const title = document.getElementById('contentTitle');
  
  let filtered = books.filter(b => b.grade === currentGrade);
  if (currentSubject) {
    filtered = filtered.filter(b => b.subject === currentSubject);
  }

  title.textContent = currentSubject
    ? currentGrade + ' класс — ' + currentSubject
    : currentGrade + ' класс — все предметы';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="big-icon">📭</div><p>Книги не найдены</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(book => {
    const authorText = book.author ? '<div class="card-author">' + book.author + '</div>' : '';
    const fallbackIcon = subjectIcons[book.subject] || "📘";

    const media = `<img class="card-cover" src="${DEFAULT_COVER}" alt="${book.title}" loading="lazy" onerror="this.outerHTML='<div class=\\'card-icon\\'>${fallbackIcon}</div>';">`;

    return `
      <a class="book-card" href="${book.link}" target="_blank" rel="noopener">
        ${media}
        <div class="card-label">${book.title}</div>
        ${authorText}
      </a>
    `;
  }).join('');
}

renderCards();
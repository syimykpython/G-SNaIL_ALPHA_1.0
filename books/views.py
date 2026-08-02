from django.shortcuts import render

# Полный список учебников
BOOKS = [
    # --- 5 класс ---
    {
        'title': 'Русский язык 5 класс',
        'grade': '5',
        'subject': 'Русский язык',
        'author': 'Л.М. Бурусенко',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=5&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    }, 
    {
        'title': 'Русский язык 5 класс, 1-2 часть',
        'grade': '5',
        'subject': 'Русский язык',
        'author': 'Ладыженская, Баранов',
        'pdf_url': 'https://ru-skazki.ru/ladyzhenskaya-baranov-5-class.html',
    },
    {
        'title': 'Математика 5 класс, 2012-2016',
        'grade': '5',
        'subject': 'Математика',
        'author': 'Н.Я. Виленкин',
        'pdf_url': 'https://gretabakunts.wordpress.com/wp-content/uploads/2017/09/vklasse_matematuka_5-klass_vilenkin_johov_chesnokov_shvarcbyrd_2013.pdf',
    },
    {
        'title': 'Литература 5 класс',
        'grade': '5',
        'subject': 'Литература',
        'author': 'Е.Е. Оземенитеь',
        'pdf_url': 'https://new.bizdin.kg/media/books/Russian-literature_Grade-5.pdf',
    },
    {
        'title': 'История Кыргызстана 5 класс',
        'grade': '5',
        'subject': 'История',
        'author': 'Билим',
        'pdf_url': 'https://stem.edu.gov.kg/books/kyrgyz-tili',
    },
    {
        'title': 'Английский язык 5 класс',
        'grade': '5',
        'subject': 'Английский',
        'author': 'Т. Абдышева',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=5&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Кыргызский язык 5 класс',
        'grade': '5',
        'subject': 'Кыргызский',
        'author': 'Н.С. Жусупбекова',
        'pdf_url': 'https://kitep.edu.kg/book/131/read',
    },
    {
        'title': 'Адабият 5 класс',
        'grade': '5',
        'subject': 'Адабият',
        'author': 'Мусаев, Муратов',
        'pdf_url': 'https://kitep.edu.kg/grade/5',
    },

    # --- 6 класс ---
    {
        'title': 'Математика 6 класс',
        'grade': '6',
        'subject': 'Математика',
        'author': 'Кыдыралиев',
        'pdf_url': 'https://www.biblioteka.kg/book/1568',
    },
    {
        'title': 'Математика 6 класс',
        'grade': '6',
        'subject': 'Математика',
        'author': 'Н.Я. Виленкин',
        'pdf_url': 'https://gdz.ru/',
    },
    {
        'title': 'Русский язык 6 класс',
        'grade': '6',
        'subject': 'Русский язык',
        'author': 'Бреусенко Л. М',
        'pdf_url': 'https://mektep.o.kg/books/5/?grade=6&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Английский язык 6 класс',
        'grade': '6',
        'subject': 'Английский',
        'author': 'Т. Абдышева',
        'pdf_url': 'https://mektep.o.kg/books/5/?grade=6&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Кыргызский язык 6 класс',
        'grade': '6',
        'subject': 'Кыргызский',
        'author': 'Н.С. Жусупбекова',
        'pdf_url': 'https://mektep.o.kg/books/5/?grade=6&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'История Кыргызстана 6 класс',
        'grade': '6',
        'subject': 'История',
        'author': 'Осмонов',
        'pdf_url': 'https://mektep.o.kg/books/5/?grade=6&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Адабият 6 класс',
        'grade': '6',
        'subject': 'Адабият',
        'author': 'Муратов А. Ж',
        'pdf_url': 'https://mektep.o.kg/books/5/?grade=6&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Биология 6 класс',
        'grade': '6',
        'subject': 'Биология',
        'author': 'И.Н. Пономарева',
        'pdf_url': 'https://www.biblioteka.kg/book/1479',
    },

    # --- 7 класс ---
    {
        'title': 'Алгебра 7 класс',
        'grade': '7',
        'subject': 'Алгебра',
        'author': 'Кыдыралиев',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=7&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Геометрия 7 класс',
        'grade': '7',
        'subject': 'Геометрия',
        'author': 'Погорелов А.В.',
        'pdf_url': 'https://so.11klasov.net/geometry/7klasg/',
    },
    {
        'title': 'Английский язык 7 класс',
        'grade': '7',
        'subject': 'Английский',
        'author': 'Т. Абдышева',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=7&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Кыргызский язык 7 класс',
        'grade': '7',
        'subject': 'Кыргызский',
        'author': 'Н.С. Жусупбекова',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=7&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Литература 7 класс',
        'grade': '7',
        'subject': 'Литература',
        'author': 'Е.Е. Оземенитеь',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=7&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'История 7 класс',
        'grade': '7',
        'subject': 'История',
        'author': 'Осмонов.Ж',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=7&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Адабият 7 класс',
        'grade': '7',
        'subject': 'Адабият',
        'author': 'Мусаев. А.',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=7&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },

    # --- 8 класс ---
    {
        'title': 'Физика 8 класс',
        'grade': '8',
        'subject': 'Физика',
        'author': 'А.В. Перышкин',
        'pdf_url': 'https://ru.scribd.com/document/481928062/Физика-8-класс-Першкин-А-В',
    },
    {
        'title': 'Химия 8 класс',
        'grade': '8',
        'subject': 'Химия',
        'author': 'О.С. Габриелян',
        'pdf_url': 'https://ru.scribd.com/document/531201948/Химия-8-класс-Рудзитис',
    },
    {
        'title': 'Английский язык 8 класс',
        'grade': '8',
        'subject': 'Английский',
        'author': 'Т. Абдышева',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=8&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Кыргызский язык 8 класс',
        'grade': '8',
        'subject': 'Кыргызский',
        'author': 'Н.С. Жусупбекова',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=8&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Литература 8 класс',
        'grade': '8',
        'subject': 'Литература',
        'author': 'Е.Е. Оземенитеь',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=8&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'История 8 класс',
        'grade': '8',
        'subject': 'История',
        'author': 'Осмонов.Ж',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=8&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Адабият 8 класс',
        'grade': '8',
        'subject': 'Адабият',
        'author': 'Мусаев. А.',
        'pdf_url': 'https://mektep.o.kg/books/4/?grade=8&lang=%D1%80%D1%83%D1%81%D1%81%D0%BA',
    },
    {
        'title': 'Алгебра 8 класс',
        'grade': '8',
        'subject': 'Алгебра',
        'author': 'Макаpычев',
        'pdf_url': 'https://www.scribd.com/document/521692936/%D0%90%D0%BB%D0%B3%D0%B5%D0%B1%D1%80%D0%B0-8-%D0%9A%D0%BB%D0%B0%D1%81%D1%81-%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D1%8B%D1%87%D0%B5%D0%B2',
    },

    # --- 9 класс ---
    {
        'title': 'Химия 9 класс',
        'grade': '9',
        'subject': 'Химия',
        'author': 'О.С. Габриелян',
        'pdf_url': 'https://www.biblioteka.kg/book/1589',
    },
    {
        'title': 'Физика 9 класс',
        'grade': '9',
        'subject': 'Физика',
        'author': 'Мамбетакунов Э.',
        'pdf_url': 'https://www.biblioteka.kg/book/1589',
    },
    {
        'title': 'Алгебра 9 класс',
        'grade': '9',
        'subject': 'Алгебра',
        'author': 'Н.Я. Виленкин',
        'pdf_url': 'https://www.biblioteka.kg',
    },
    {
        'title': 'Биология 9 класс',
        'grade': '9',
        'subject': 'Биология',
        'author': 'автор',
        'pdf_url': 'https://okuma.kg/',
    },
    {
        'title': 'Геометрия 9 класс',
        'grade': '9',
        'subject': 'Геометрия',
        'author': 'Л.С. Атанасян',
        'pdf_url': 'https://okuma.kg/',
    },
    {
        'title': 'История 9 класс',
        'grade': '9',
        'subject': 'История',
        'author': 'А.А. Данилов',
        'pdf_url': 'https://new.bizdin.kg/kniga/uchebnik-istoriya-kyrgyzstana-9-klass-rsh',
    },

    # --- 10 класс ---
    {
        'title': 'Русский язык 11 класс',
        'grade': '11',
        'subject': 'Русский язык',
        'author': 'Н.Я. Виленкин',
        'pdf_url': 'https://www.biblioteka.kg',
    },
    {
        'title': 'Кыргызский язык 10-11 класс',
        'grade': '10',
        'subject': 'Кыргызский',
        'author': 'Т. Абдышева',
        'pdf_url': 'https://www.biblioteka.kg',
    },
    {
        'title': 'Алгебра 10-11 класс',
        'grade': '10',
        'subject': 'Алгебра',
        'author': 'А.Н. Колмогоров',
        'pdf_url': 'https://so.11klasov.net/67-algebra-i-nachala-matematicheskogo-analiza-uchebnik-dlya-10-11-kl-kolmogorov-an.html',
    },
    {
        'title': 'Физика 10 класс',
        'grade': '10',
        'subject': 'Физика',
        'author': 'автор',
        'pdf_url': 'https://new.bizdin.kg/media/books/Fizika-10-klass.pdf',
    },
    {
        'title': 'Химия 10 класс',
        'grade': '10',
        'subject': 'Химия',
        'author': 'автор',
        'pdf_url': 'https://www.okuma.kg/',
    },
    {
        'title': 'Биология 10 класс',
        'grade': '10',
        'subject': 'Биология',
        'author': 'автор',
        'pdf_url': 'https://so.11klasov.net/11-klass/',
    },
    {
        'title': 'Геометрия 10 класс',
        'grade': '10',
        'subject': 'Геометрия',
        'author': 'Билим',
        'pdf_url': 'https://bilim.akipress.org/lib/book:49/geometriya-10-11-klass-i-b-bekboev-a-a-b0rubaev-a-a-ajylchiev/',
    },
]

def index(request):
    grade = request.GET.get('grade')
    subject = request.GET.get('subject')

    filtered_books = BOOKS

    # Фильтрация по классу
    if grade:
        filtered_books = [b for b in filtered_books if b['grade'] == grade]

    # Улучшенная фильтрация по предмету
    if subject:
        filtered_books = [b for b in filtered_books if subject.lower() in b['subject'].lower()]

    context = {
        'books': filtered_books,
        'selected_grade': grade,
        'selected_subject': subject,
    }
    return render(request, 'books/index.html', context)
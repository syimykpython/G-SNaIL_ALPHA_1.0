from django.shortcuts import render

# Твой список книг
BOOKS = [
    {
        'title': 'Алгебра 7 класс',
        'grade': '7',
        'subject': 'Алгебра',
        'author': 'А.Г. Мордкович',
        'pdf_url': '/static/books/pdf/algebra_7.pdf',
    },
    {
        'title': 'Физика 8 класс',
        'grade': '8',
        'subject': 'Физика',
        'author': 'А.В. Перышкин',
        'pdf_url': '/static/books/pdf/physics_8.pdf',
    },
    {
        'title': 'Русский язык 5 класс',
        'grade': '5',
        'subject': 'Русский язык',
        'author': 'Т.А. Ладыженская',
        'pdf_url': '/static/books/pdf/russian_5.pdf',
    },
    {
        'title': 'Геометрия 9 класс',
        'grade': '9',
        'subject': 'Геометрия',
        'author': 'Л.С. Атанасян',
        'pdf_url': '/static/books/pdf/geometry_9.pdf',
    },
]

def index(request):
    grade = request.GET.get('grade')
    subject = request.GET.get('subject')

    filtered_books = BOOKS

    # Фильтрация по классу
    if grade:
        filtered_books = [b for b in filtered_books if b['grade'] == grade]

    # Фильтрация по предмету
    if subject:
        filtered_books = [b for b in filtered_books if b['subject'].lower() == subject.lower()]

    context = {
        'books': filtered_books,
        'selected_grade': grade,
        'selected_subject': subject,
    }
    return render(request, 'books/index.html', context)
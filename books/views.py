from django.shortcuts import render

def index(request):
    grade = request.GET.get('grade')
    subject = request.GET.get('subject')

    context = {
        'selected_grade': grade,
        'selected_subject': subject,
    }
    return render(request, 'books/index.html', context)
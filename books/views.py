from django.shortcuts import render

def index(request):
    return render(request, 'books/index.html')

# Create your views here.


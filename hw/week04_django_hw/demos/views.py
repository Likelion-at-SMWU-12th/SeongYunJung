from django.shortcuts import render
from django.http import HttpResponse

def yunjungHobby(request):
    return render(request, 'ynjung.html')

from django.shortcuts import render
from django.contrib.auth import authenticate,login,logout,get_user_model
from django.http import HttpResponse,HttpResponseRedirect
from .models import Userinfo
from django.contrib.auth.models import User
from django.contrib import messages
from .forms import *


def index(request):
    return render(request, 'BE/index.html')

def landing(request):
    return render(request,'BE/demo.html')

def signup_view(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)

        if form.is_valid():
            user = form.save()
            user.refresh_from_db()
            user.userinfo.mobile_number = form.cleaned_data.get('mobile_number')
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user=authenticate(username=user.username,password=raw_password)
            login(request, user)
            messages.success(request,'User SignUp Successful')
            return render(request, 'BE/logged_in.html')
    else:
        form = SignupForm()
    return render(request, 'BE/signup.html',{'form':form})


def logged_in(request):
    return render(request,'BE/logged_in.html')

def input(request):
    return render(request,'BE/input.html')

def parta(request):
    img=request.GET['img']

def partbip(request):
    return render(request,'BE/input_b.html')
# Create your views here.new

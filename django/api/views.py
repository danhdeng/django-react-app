from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from blog.models import Post
#Create your views here.

class PostListView(ListView):
    model=Post
    template_name="reports/report_list.html"
    context_object_name="report_list"

class PostDetailView(DetailView):
    model=Post
    template_name="reports/report_detail.html"
    context_object_name="report"
    

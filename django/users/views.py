from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
class CustomUserCreate(APIView):

    permission_classes=[AllowAny]

    def post(self, request):
        customer_serializer=CustomUserSerializer(data=request.data)
        if (customer_serializer.is_valid()):
            newuser=customer_serializer.save()
            if (newuser):
                return Response(status=status.HTTP_201_CREATED)
            
        return Response(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
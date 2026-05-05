from ..models import User

from django.contrib.auth import authenticate

from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response

class LoginView(APIView):
    # Logic
    def post(self, request):
        data = request.data

        username = data.get("username")
        password = data.get("password")
        if not all([username, password]):
            return Response({'error': "Missing parameter(s)"}, status=400)

        # Attempt to authenticate the user
        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)

            return Response({"refresh": str(refresh), "access": str(refresh.access_token)}, status=200)
        else:
            return Response({'error': "User could not be authenticated."}, status=401)
        
class RegisterView(APIView):
    # Logic
    def post(self, request):
        data = request.data

        # Required User Fields

        username        = data.get("username")
        password        = data.get("password")
        email           = data.get("email")
        first_name      = data.get("first_name")
        last_name       = data.get("last_name")
        if not all([username, password, email, first_name, last_name]):
            return Response({'error': "Missing Parameters"}, status=400)

        # Check Uniqueness of fields
        if User.objects.filter(username=username).exists():
            return Response({'error': "Username is not available."}, status=400)
        if User.objects.filter(email=email).exists():
            return Response({'error': "Email is already registered."}, status=400)
        
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )

        if user.id is not None:
            return Response({'message': "User Created", "id": user.id}, status=201)
        else:
            return Response({'error': "Unknown error while creating user."}, status=500)

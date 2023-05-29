from rest_framework import serializers
from HiredApp.models import Service, Message, Task, Contract, User, Rating, Account

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class RatingSerializer(serializers.ModelSerializer):
    temp_name = UserSerializer(
        many=True,
        read_only=True
    )
    class Meta:
        model = Rating
        fields = '__all__'

class ContractSerializer(serializers.ModelSerializer):
    temp_name = UserSerializer(
        many=True,
        read_only=True
    )
    class Meta:
        model = Contract
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    temp_name = UserSerializer(
        many=True,
        read_only=True
    )
    class Meta:
        model = Message
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'
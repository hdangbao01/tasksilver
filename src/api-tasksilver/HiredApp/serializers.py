from rest_framework import serializers
from HiredApp.models import Service, Message, Task, Contract, User, Rating, Account

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id','name','description','image')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id','name','description', 'serviceId','image')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','phone','address','gender','creditcard','role','price','description','taskId','image')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id','ofuserId','touserId','star','comment', 'time')
        depth = 1

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = ('id','ofuserId','touserId','activity','starttime','endtime','pay','taskId')
        depth = 1

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id','ofuserId','touserId','content', 'time')

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id','username','password', 'userId')
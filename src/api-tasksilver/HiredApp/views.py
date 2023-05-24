from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from HiredApp.models import Service, Message, Task, Contract, User, Rating, Account
from HiredApp.serializers import ServiceSerializer, MessageSerializer, TaskSerializer, ContractSerializer, UserSerializer, RatingSerializer, AccountSerializer

from django.core.files.storage import default_storage
# Create your views here
@csrf_exempt
def ServiceAPI(request, id = 0):
    if request.method == 'GET':
        service = Service.objects.all()
        service_serializer = ServiceSerializer(service, many = True)
        return JsonResponse(service_serializer.data, safe= False)
    elif request.method == 'POST':
        service_data = JSONParser().parse(request)
        service_serializer = ServiceSerializer(data = service_data)
        if service_serializer.is_valid():
            service_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        service_data = JSONParser().parse(request)
        service = Service.objects.get(id = service_data['id'])
        service_serializer = ServiceSerializer(service , data = service_data)
        if service_serializer.is_valid():
            service_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        service = Service.objects.get(id = id)
        service.delete()
        return JsonResponse("Deleted", safe= False)

@csrf_exempt
def TaskAPI(request, id = 0):
    if request.method == 'GET':
        task = Task.objects.all()
        task_serializer = TaskSerializer(task, many = True)
        return JsonResponse(task_serializer.data, safe= False)
    elif request.method == 'POST':
        task_data = JSONParser().parse(request)
        task_serializer = TaskSerializer(data = task_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        task_data = JSONParser().parse(request)
        task = Task.objects.get(id = task_data['id'])
        task_serializer = TaskSerializer(task , data = task_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        task = Task.objects.get(id = id)
        task.delete()
        return JsonResponse("Deleted", safe= False)

@csrf_exempt
def UserAPI(request, id = 0):
    if request.method == 'GET':
        user = User.objects.all()
        user_serializer = UserSerializer(user, many = True)
        return JsonResponse(user_serializer.data, safe= False)
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data = user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        user_data = JSONParser().parse(request)
        user = User.objects.get(id = user_data['id'])
        user_serializer = UserSerializer(user , data = user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        user = User.objects.get(id = id)
        user.delete()
        return JsonResponse("Deleted", safe= False)

@csrf_exempt
def ContractAPI(request, id = 0):
    if request.method == 'GET':
        contract = Contract.objects.all()
        contract_serializer = ContractSerializer(contract, many = True)
        return JsonResponse(contract_serializer.data, safe= False)
    elif request.method == 'POST':
        contract_data = JSONParser().parse(request)
        contract_serializer = ContractSerializer(data = contract_data)
        if contract_serializer.is_valid():
            contract_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        contract_data = JSONParser().parse(request)
        contract = Contract.objects.get(id = contract_data['id'])
        contract_serializer = ContractSerializer(contract , data = contract_data)
        if contract_serializer.is_valid():
            contract_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        contract = Contract.objects.get(id = id)
        contract.delete()
        return JsonResponse("Deleted", safe= False)

@csrf_exempt
def RatingAPI(request, id = 0):
    if request.method == 'GET':
        rating = Rating.objects.all()
        rating_serializer = RatingSerializer(rating, many = True)
        return JsonResponse(rating_serializer.data, safe= False)
    elif request.method == 'POST':
        rating_data = JSONParser().parse(request)
        rating_serializer = RatingSerializer(data = rating_data)
        if rating_serializer.is_valid():
            rating_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        rating_data = JSONParser().parse(request)
        rating = Rating.objects.get(id = rating_data['id'])
        rating_serializer = RatingSerializer(rating , data = rating_data)
        if rating_serializer.is_valid():
            rating_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        rating = Rating.objects.get(id = id)
        rating.delete()
        return JsonResponse("Deleted", safe= False)

@csrf_exempt
def MessageAPI(request, id = 0):
    if request.method == 'GET':
        message = Message.objects.all()
        message_serializer = MessageSerializer(message, many = True)
        return JsonResponse(message_serializer.data, safe= False)
    elif request.method == 'POST':
        message_data = JSONParser().parse(request)
        message_serializer = MessageSerializer(data = message_data)
        if message_serializer.is_valid():
            message_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        message_data = JSONParser().parse(request)
        message = Message.objects.get(id = message_data['id'])
        message_serializer = MessageSerializer(message , data = message_data)
        if message_serializer.is_valid():
            message_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        message = Message.objects.get(id = id)
        message.delete()
        return JsonResponse("Deleted", safe= False)

@csrf_exempt
def AccountAPI(request, id = 0):
    if request.method == 'GET':
        account = Account.objects.all()
        account_serializer = AccountSerializer(account, many = True)
        return JsonResponse(account_serializer.data, safe= False)
    elif request.method == 'POST':
        account_data = JSONParser().parse(request)
        account_serializer = AccountSerializer(data = account_data)
        if account_serializer.is_valid():
            account_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failded to add", safe= False)
    elif request.method == 'PATCH':
        account_data = JSONParser().parse(request)
        account = Account.objects.get(id = account_data['id'])
        account_serializer = AccountSerializer(account , data = account_data)
        if account_serializer.is_valid():
            account_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Updated Faild", safe= False)
    elif request.method == 'DELETE':
        account = Account.objects.get(id = id)
        account.delete()
        return JsonResponse("Deleted", safe = False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)

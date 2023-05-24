from django.db import models

# Create your models here.
class Service(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=255, null = False)
    description = models.TextField()
    image = models.CharField(max_length=500)

class Task(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 255, null = False)
    description = models.TextField()
    serviceId = models.ForeignKey(Service, on_delete = models.CASCADE)
    image = models.CharField(max_length=500)

class User(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 255, null = False)
    phone = models.IntegerField(null = False)
    address = models.CharField(max_length = 255, null = False)
    gender = models.CharField(max_length = 50, null = True)
    creditcard = models.IntegerField(null = True)
    role = models.IntegerField()
    price = models.FloatField(null = True)
    description = models.TextField(null = True)
    taskId = models.IntegerField(null = True)
    image = models.CharField(max_length=500, null = True)

class Rating(models.Model):
    id = models.AutoField(primary_key = True)
    ofuserId = models.ForeignKey(User, on_delete = models.CASCADE, related_name='ofuserId_Rating_User')
    touseId = models.ForeignKey(User, on_delete = models.CASCADE, related_name='touseId_Rating_User')
    star = models.IntegerField(null = False)
    comment = models.TextField(null = True)
    time = models.DateTimeField()

class Contract(models.Model):
    id = models.AutoField(primary_key = True)
    ofuserId  = models.ForeignKey(User, on_delete = models.CASCADE, related_name='ofuserId_Contract_User')
    touseId = models.ForeignKey(User, on_delete = models.CASCADE, related_name='touseId_Contract_User')
    activity = models.CharField(max_length = 255)
    starttime = models.DateTimeField()
    endtime = models.DateTimeField()
    pay = models.CharField(max_length = 255)
    taskId  = models.ForeignKey(Task, on_delete = models.CASCADE)

class Message(models.Model):
    id = models.AutoField(primary_key = True)
    ofuserId  = models.ForeignKey(User, on_delete = models.CASCADE, related_name='ofuserId_Message_User')
    touseId = models.ForeignKey(User, on_delete = models.CASCADE,related_name='touseId_Message_User')
    content = models.TextField()
    time = models.DateTimeField()

class Account(models.Model):
    id = models.AutoField(primary_key = True)
    username = models.EmailField()
    password = models.CharField(max_length = 50)
    userId = models.ForeignKey(User, on_delete = models.CASCADE)

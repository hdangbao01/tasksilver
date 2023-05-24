from django.conf.urls import url
from HiredApp import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'service$',views.ServiceAPI),
    url(r'^service/([0-9]+)$',views.ServiceAPI),
    url(r'task$',views.TaskAPI),
    url(r'^task/([0-9]+)$',views.TaskAPI),
    url(r'user$',views.UserAPI),
    url(r'^user/([0-9]+)$',views.UserAPI),
    url(r'account$',views.AccountAPI),
    url(r'^account/([0-9]+)$',views.AccountAPI),
    url(r'rating$',views.RatingAPI),
    url(r'^rating/([0-9]+)$',views.RatingAPI),
    url(r'contract$',views.ContractAPI),
    url(r'^contract/([0-9]+)$',views.ContractAPI),
    url(r'message$',views.MessageAPI),
    url(r'^message/([0-9]+)$',views.MessageAPI),

    url(r'^service/savefile',views.SaveFile),
    url(r'^task/savefile',views.SaveFile),
    url(r'^user/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)
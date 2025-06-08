from django.urls import path
from .views import RiskListCreateView, RiskDetailView
from .views import CreateUserView

urlpatterns += [
    path('risks/', RiskListCreateView.as_view(), name='risk-list'),
    path('risks/<int:pk>/', RiskDetailView.as_view(), name='risk-detail'),
    path('create-user/', CreateUserView.as_view(), name='create-user'),
]

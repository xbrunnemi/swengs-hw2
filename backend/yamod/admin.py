from django.contrib import admin
from .models import *

class ArmOfServiceAdmin(admin.ModelAdmin): pass


class SoldierAdmin(admin.ModelAdmin): pass


class CountryAdmin(admin.ModelAdmin): pass


admin.site.register(ArmOfService,ArmOfServiceAdmin)
admin.site.register(Soldier, SoldierAdmin)
admin.site.register(Country,CountryAdmin)


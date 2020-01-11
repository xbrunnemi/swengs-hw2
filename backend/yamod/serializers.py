from rest_framework import serializers

from yamod.models import Country, ArmOfService, Soldier


class CountryOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']


class ArmOfServiceListSerializer(serializers.ModelSerializer):
    country_name = serializers.SerializerMethodField()

    class Meta:
        model = ArmOfService
        fields = ['id', 'name', 'short_name', 'annotation', 'in_action', 'country_name']

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''


class ArmOfServiceFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArmOfService
        fields = '__all__'


class SoldierListSerializer(serializers.ModelSerializer):
    country_name = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    arm_of_service = serializers.SerializerMethodField()

    class Meta:
        model = Soldier
        fields = "__all__"

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))

    def get_arm_of_service(self, obj):
        return obj.arm_of_service.name if obj.arm_of_service else ''

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''


class SoldierFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soldier
        fields = '__all__'

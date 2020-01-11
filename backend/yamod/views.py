from django.contrib.auth.decorators import permission_required
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.response import Response

from yamod.models import Country, ArmOfService, Soldier
from yamod.serializers import CountryOptionSerializer, ArmOfServiceListSerializer, ArmOfServiceFormSerializer, \
    SoldierListSerializer, SoldierFormSerializer


@swagger_auto_schema(method='GET', responses={200: CountryOptionSerializer(many=True)})
@api_view(['GET'])
def country_option_list(request):
    countries = Country.objects.all()
    serializer = CountryOptionSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ArmOfServiceListSerializer(many=True)})
@api_view(['GET'])
@permission_required('yamod.view_arm_of_service', raise_exception=True)
def arm_of_service_list(request):
    countries = ArmOfService.objects.all()
    serializer = ArmOfServiceListSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=ArmOfServiceFormSerializer,
                     responses={200: ArmOfServiceFormSerializer()})
@api_view(['POST'])
@permission_required('yamod.add_arm_of_service', raise_exception=True)
def arm_of_service_form_create(request):
    serializer = ArmOfServiceFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ArmOfServiceFormSerializer,
                     responses={200: ArmOfServiceFormSerializer()})
@api_view(['PUT'])
@permission_required('yamod.change_arm_of_service', raise_exception=True)
def arm_of_service_form_update(request, pk):
    try:
        arm_of_service = ArmOfService.objects.get(pk=pk)
    except ArmOfService.DoesNotExist:
        return Response({'error': 'ArmOfService does not exist.'}, status=404)

    serializer = ArmOfServiceFormSerializer(arm_of_service, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: ArmOfServiceFormSerializer()})
@api_view(['GET'])
@permission_required('yamod.view_arm_of_service', raise_exception=True)
def arm_of_service_form_get(request, pk):
    try:
        arm_of_service = ArmOfService.objects.get(pk=pk)
    except ArmOfService.DoesNotExist:
        return Response({'error': 'ArmOfService does not exist.'}, status=404)

    serializer = ArmOfServiceFormSerializer(arm_of_service)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_required('yamod.delete_arm_of_service', raise_exception=True)
def arm_of_service_delete(request, pk):
    try:
        arm_of_service = ArmOfService.objects.get(pk=pk)
    except Country.DoesNotExist:
        return Response({'error': 'ArmOfService does not exist.'}, status=404)
    arm_of_service.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: SoldierListSerializer(many=True)})
@api_view(['GET'])
@permission_required('yamod.view_soldier', raise_exception=True)
def soldier_list(request):
    countries = Soldier.objects.all()
    serializer = SoldierListSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=SoldierFormSerializer, responses={200: SoldierFormSerializer()})
@api_view(['POST'])
@permission_required('yamod.add_soldier', raise_exception=True)
def soldier_form_create(request):
    serializer = SoldierFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=SoldierFormSerializer, responses={200: SoldierFormSerializer()})
@api_view(['PUT'])
@permission_required('yamod.change_soldier', raise_exception=True)
def soldier_form_update(request, pk):
    try:
        soldier = Soldier.objects.get(pk=pk)
    except Soldier.DoesNotExist:
        return Response({'error': 'Soldier does not exist.'}, status=404)

    serializer = SoldierFormSerializer(soldier, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: SoldierFormSerializer()})
@api_view(['GET'])
@permission_required('yamod.view_soldier', raise_exception=True)
def soldier_form_get(request, pk):
    try:
        soldier = Soldier.objects.get(pk=pk)
    except Soldier.DoesNotExist:
        return Response({'error': 'Soldier does not exist.'}, status=404)

    serializer = SoldierFormSerializer(soldier)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_required('yamod.delete_soldier', raise_exception=True)
def soldier_delete(request, pk):
    try:
        soldier = Soldier.objects.get(pk=pk)
    except Country.DoesNotExist:
        return Response({'error': 'Soldier does not exist.'}, status=404)
    soldier.delete()
    return Response(status=204)

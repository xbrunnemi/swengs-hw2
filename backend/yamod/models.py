from django.db import models


class Country(models.Model):
    name = models.TextField()
    capital = models.TextField(null=True)

    def __str__(self):
        return self.name


class ArmOfService(models.Model):
    name = models.TextField()
    short_name = models.TextField()
    founding_year = models.IntegerField()
    annotation = models.TextField()
    in_action = models.BooleanField()
    country = models.ForeignKey(Country, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Soldier(models.Model):
    CHOICES = (
        ('Rekr', 'Rekrut'),
        ('Gfr', 'Gefreiter'),
        ('Kpl', 'Korporal'),
        ('Zgf', 'Zugsfuehrer'),
        ('Wm', 'Wachtmeister'),
        ('OWm', 'Oberwachtmeister'),
        ('StWm', 'Stabswachtmeister'),
        ('OStWm', 'Oberstabswachtmeister'),
        ('OStv', 'Offizierstellvertreter'),
        ('Vzlt', 'Vizeleutnant'),
        ('Fhr', 'Faehnrich'),
        ('Lt', 'Leutnant'),
        ('Olt', 'Oberleutnant'),
        ('Hptmn', 'Hauptmann'),
        ('Mjr', 'Major'),
        ('Obstlt', 'Oberstleutnant'),
        ('Obst', 'Oberst'),
        ('Bgdr', 'Brigadier'),
        ('GenMjr', 'Generalmajor'),
        ('GenLt', 'Generalleutnant'),
        ('Gen', 'General'),
    )
    rank = models.CharField(max_length=6, choices=CHOICES, null=True)
    first_name = models.TextField()
    last_name = models.TextField()
    year_of_birth = models.DateField()
    height = models.IntegerField(help_text='in cm')
    arm_of_service = models.ManyToManyField('yamod.ArmOfService', blank=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return '%s %s %s (%s)' % (self.rank, self.first_name, self.last_name, self.year_of_birth)

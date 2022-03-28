# Generated by Django 4.0.3 on 2022-03-27 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_crime_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crime',
            name='latitude',
            field=models.DecimalField(blank=True, decimal_places=7, max_digits=10),
        ),
        migrations.AlterField(
            model_name='crime',
            name='longitude',
            field=models.DecimalField(blank=True, decimal_places=7, max_digits=10),
        ),
    ]

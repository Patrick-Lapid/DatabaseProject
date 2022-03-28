# Generated by Django 4.0.3 on 2022-03-27 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='personID',
            new_name='pID',
        ),
        migrations.RemoveField(
            model_name='person',
            name='status',
        ),
        migrations.AddField(
            model_name='person',
            name='isArrested',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='person',
            name='isInjured',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='person',
            name='isKilled',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='person',
            name='isUnharmed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='gun',
            name='stolen',
            field=models.CharField(choices=[('Unknown', 'Unknown'), ('Notstolen', 'Not-Stolen'), ('Stolen', 'Stolen')], default='Unknown', max_length=10),
        ),
        migrations.AlterField(
            model_name='person',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Unknown', 'Unknown')], default='Unknown', max_length=10),
        ),
    ]
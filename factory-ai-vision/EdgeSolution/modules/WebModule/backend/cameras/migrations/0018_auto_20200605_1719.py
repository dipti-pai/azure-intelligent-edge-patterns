# Generated by Django 3.0.4 on 2020-06-05 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cameras', '0017_setting_is_collect_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='camera',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cameras.Camera'),
        ),
        migrations.AlterField(
            model_name='project',
            name='customvision_project_id',
            field=models.CharField(blank=True, default='', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='customvision_project_name',
            field=models.CharField(blank=True, default='', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='download_uri',
            field=models.CharField(blank=True, default='', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cameras.Location'),
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_type', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=200)),
                ('log', models.CharField(max_length=1000)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cameras.Project')),
            ],
        ),
    ]
from django.db import models


class Plane(models.Model):
    name = models.CharField(max_length=255, verbose_name="Name")
    sort = models.CharField(max_length=255, verbose_name="Sort")
    designer = models.CharField(max_length=255, verbose_name="Designer")
    first_flight = models.CharField(max_length=255, verbose_name="First flight")
    introduct = models.CharField(max_length=255, verbose_name="Introduction to service")
    prod_range = models.CharField(max_length=255, verbose_name="Production range")
    number_of_production = models.CharField(max_length=255, verbose_name="Number of production")
    unit_cost = models.CharField(max_length=255, verbose_name="Unit cost")
    image = models.ImageField(upload_to="media/", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("-created_at",)
        verbose_name = "Plane"
        verbose_name_plural = "Planes"

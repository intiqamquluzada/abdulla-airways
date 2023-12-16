from django.shortcuts import render
from plane.models import Plane

def index_view(request):
    planes = Plane.objects.order_by("-created_at")
    plane_name = request.GET.get("plane")

    if plane_name:
        planes = planes.filter(name__icontains=plane_name)

    context = {

        "planes": planes

    }
    return render(request, "index.html", context)

def detail_view(request, id):
    plane = Plane.objects.get(id=id)

    context = {
        "plane": plane
    }
    return render(request, "plane-detail.html", context)
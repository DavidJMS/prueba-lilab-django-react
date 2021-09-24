from django.db import models
from apps.utils.models import TestLilabModel

qualification_debtor=(
    ("bueno","bueno"),
    ("regular","regular"),
    ("malo","malo"),
)

status=(
    ("aprobado","aprobado"),
    ("denegado","denegado"),
    ("por evaluar","por evaluar"),
)

class Credit(TestLilabModel):

    names = models.CharField(max_length=30)
    total_debt =  models.DecimalField(max_digits=9, decimal_places=2)
    qualification_debtor = models.CharField(max_length=7,choices=qualification_debtor) 
    score = models.PositiveSmallIntegerField(help_text="reaffirms the decision of the supervising user by validating the client's profile, it is assigned by the system")
    status = models.CharField(max_length=11,choices=status) 

    def __str__(self) -> str:
        return self.names
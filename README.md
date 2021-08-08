# django-react-app

# install the current version of django
pip install django==3.2.6
# create a django api project in the current folder 
django-admin startproject djangoapi .

# create blog and api component
python manage.py startapp blog
python manage.py startapp api

# create a super user to manage the authenticationa, authorization and DB
python manage.py createsuperuser

# prepare the migration after change in the model files
python manage.py makemigrations 

# execute the migration
python manage.py migrate

# install coverage package
pip instal coverage

# use coverage to run the test
coverage run --omit='*/venv/*' manage.py test

# to get annotated HTML listings detailing missed lines
coverage html

# install django rest framework
pip install djangorestframework

# export all installed package to requriements.txt
pin freeze > requriements.txt

# djangorestframeowrk document reference
https://www.django-rest-framework.org/

https://www.django-rest-framework.org/api-guide/generic-views/


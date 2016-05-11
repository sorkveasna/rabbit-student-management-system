Collection.Teacher.permit(['insert', 'update', 'remove'])
    .ifHasRole('Setting')
    .apply();


Collection.Student.permit(['insert', 'update', 'remove'])
    .ifHasRole('Data')
    .apply();

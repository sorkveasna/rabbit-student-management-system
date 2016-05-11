Collection.Subject.permit(['insert', 'update', 'remove'])
    .ifHasRole('Setting')
    .apply();

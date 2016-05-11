Collection.Status.permit(['insert', 'update', 'remove'])
    .ifHasRole('Setting')
    .apply();
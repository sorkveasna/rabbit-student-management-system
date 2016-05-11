Collection.Register.permit(['insert', 'update', 'remove'])
    .ifHasRole('Data')
    .apply();

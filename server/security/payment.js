Collection.Payment.permit(['insert', 'update', 'remove'])
    .ifHasRole('Data')
    .apply();

Collection.Company.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();

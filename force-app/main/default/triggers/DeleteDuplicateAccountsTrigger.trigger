trigger DeleteDuplicateAccountsTrigger on Account (before insert) {
    List<Account> accountsToDelete = new List<Account>();
    Set<String> newAccountNames = new Set<String>();
    for (Account newAccount : Trigger.new) {
        newAccountNames.add(newAccount.Name);
    }
    List<Account> existingAccounts = [SELECT Id, Name FROM Account WHERE Name IN :newAccountNames];
    for (Account existingAccount : existingAccounts) {
        if (newAccountNames.contains(existingAccount.Name)) {
            accountsToDelete.add(existingAccount);
        }
    }
    if (!accountsToDelete.isEmpty()) {
        delete accountsToDelete;
    }
}

public with sharing class AccountContactsController {
    @AuraEnabled
    public static List<Contact> getContactsByAccountName(String accountName) {  // ,Integer pageNumber, Integer pageSize

        // Calculate the start index based on the page number and page size
        //  Integer startIndex = (pageNumber - 1) * pageSize;
        // Query contacts related to the specified account name
        List<Contact> contacts = new List<Contact>();

        if(String.isNotBlank(accountName)){
        List<Account> accounts = [SELECT Id FROM Account WHERE Name = :accountName LIMIT 1 ];
        
        if (!accounts.isEmpty()) {
            contacts = [SELECT Id, Name, Email,	Phone FROM Contact WHERE AccountId = :accounts[0].Id ];         //LIMIT :pageSize OFFSET :startIndex
        }
    }else{
        contacts =  [SELECT Id, Name, Email,Phone FROM Contact];  //LIMIT :pageSize OFFSET :startIndex
    }
        return contacts;
    }
    
}

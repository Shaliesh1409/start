    public with sharing class Task3 {
    @AuraEnabled
    public static List<Contact> getContactsByAcc(String accountName) {  
        List<Contact> contacts = new List<Contact>();
        List<Account> accounts = [SELECT Id FROM Account WHERE Name = :accountName LIMIT 1 ];
        
        if (!accounts.isEmpty()) {
            contacts = [SELECT Id, Name, Email,	Phone FROM Contact WHERE AccountId = :accounts[0].Id ];         
        }
        return contacts;
    }
    @AuraEnabled
    public static Integer getContactcount(String accountName) {

        List<Account> accounts = [SELECT Id FROM Account WHERE Name = :accountName LIMIT 1 ];
        Integer contactcount =[SELECT COUNT()
        FROM Contact WHERE AccountId = :accounts[0].Id];

        System.debug('contactcount' +contactcount);

        return contactcount;
       
    }
}
    


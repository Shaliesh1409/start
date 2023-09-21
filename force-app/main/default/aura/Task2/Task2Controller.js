({
    init: function(component, event, helper) {
        // Load contacts when the component initializes (you can keep this if needed)
        helper.loadContacts(component);
    },
    
    searchAccount: function(component, event, helper) {
        // Get the account name entered by the user
        var accountName = component.get("v.accountName");
        
        // Call the server-side controller method to search for the account and retrieve its contacts
        var action = component.get("c.getContactsByAccountName");
        action.setParams({ accountName: accountName });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var contacts = response.getReturnValue();
                component.set("v.contacts", contacts);
            } else {
                console.error("Error searching for account: " + state);
            }
        });
        
        $A.enqueueAction(action);
        // component.set("v.currentPage", 1);

    }

    // toggleShowAllContacts: function(component, event, helper) {
    //     // Get the "Show All Contacts" checkbox value
    //     var showAllContacts = component.get("v.showAllContacts");
        
    //     // If "Show All Contacts" is selected, load all contacts; otherwise, reload based on the entered account name
    //     if (showAllContacts) {
    //         helper.loadContacts(component);
    //     } else {
    //         // Trigger the search based on the entered account name
    //         this.searchAccount(component);
    //     }
    // }
    
    // previousPage: function(component) {
    //     var currentPage = component.get("v.currentPage");
    //     if (currentPage > 1) {
    //         component.set("v.currentPage", currentPage - 1);
    //         helper.loadContacts(component);
    //     }
    // },
    
    // nextPage: function(component) {
    //     var currentPage = component.get("v.currentPage");
    //     var totalPages = component.get("v.contacts.totalPages");
    //     if (currentPage < totalPages) {
    //         component.set("v.currentPage", currentPage + 1);
    //         helper.loadContacts(component);
    //     }
    // }
})

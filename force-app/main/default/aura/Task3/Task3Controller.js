({
    init: function(component, event, helper) {
        // Load contacts when the component initializes (you can keep this if needed)
        helper.loadContacts(component);
    },
    
    search1: function(component, event, helper) {
        // Get the account name entered by the user
        var accountName1 = component.get("v.accountName1");
        
        // Call the server-side controller method to search for the account and retrieve its contacts
        var action = component.get("c.getContactsByAcc");
        // var action2 = component.get("c.getContactcount");

        action.setParams({ accountName: accountName1 });
        // action2.setParams({ accountName: accountName1 });
      
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var contacts = response.getReturnValue();
                component.set("v.contacts1", contacts);
            } else {
                console.error("Error searching for account: " + state);
            }
        });
        // action2.setCallback(this, function(response2) {
        //     var state = response2.getState();
        //     if (state === "SUCCESS") {
        //         component.set("v.contactCount1",contactcount);
        //     } else {
        //         console.error("Error searching for account: " + state);
        //     }
        // });
        
        $A.enqueueAction(action);
    },
    search2: function(component, event, helper) {
        // Get the account name entered by the user
        var accountName2 = component.get("v.accountName2");
        
        // Call the server-side controller method to search for the account and retrieve its contacts
        var action = component.get("c.getContactsByAcc");
        action.setParams({ accountName: accountName2 });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var contacts = response.getReturnValue();
                component.set("v.contacts2", contacts);
            } else {
                console.error("Error searching for account: " + state);
            }
        });
        
        $A.enqueueAction(action);
    }
})
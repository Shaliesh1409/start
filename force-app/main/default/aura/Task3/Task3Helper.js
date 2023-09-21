({
   
    
    section1: function(component) {
        // Get the account name entered by the user
        var accountName1 = component.get("v.accountName1");
        
        // Call the server-side controller method to search for the account and retrieve its contacts
        var action = component.get("c.getContactsByAcc");
        action.setParams({ accountName: accountName1 });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var contacts = response.getReturnValue();
                component.set("v.contacts1", contacts);
            } else {
                console.error("Error searching for account: " + state);
            }
        });
        
        $A.enqueueAction(action);

    },


    section2: function(component) {
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



});
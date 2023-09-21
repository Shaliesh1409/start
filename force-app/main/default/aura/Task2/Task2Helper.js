({ loadContacts: function(component) {
    var currentPage = component.get("v.currentPage");
    var pageSize = component.get("v.pageSize");

    // Call server-side action to fetch data
    var action = component.get("c.getContactsByAccountName"); // Replace with your Apex method
    action.setParams({
        currentPage: currentPage,
        pageSize: pageSize
    });

    action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
            var result = response.getReturnValue();
            component.set("v.data", result.data);
            component.set("v.totalPages", result.totalPages);
        } else {
            console.error("Error loading data: " + state);
        }
    });

    $A.enqueueAction(action);
},

// previousPage: function(component) {
//     var currentPage = component.get("v.currentPage");
//     if (currentPage > 1) {
//         component.set("v.currentPage", currentPage - 1);
//         this.loadContacts(component);
//     }
// },

// nextPage: function(component) {
//     var currentPage = component.get("v.currentPage");
//     var totalPages = component.get("v.totalPages");
//     if (currentPage < totalPages) {
//         component.set("v.currentPage", currentPage + 1);
//         this.loadContacts(component);
//     }
// },

});

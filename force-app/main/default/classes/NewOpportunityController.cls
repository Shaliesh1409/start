public with sharing class NewOpportunityController {
    public String selectedAccountId { get; set; }
    public List<SelectOption> accountOptions { get; set; }
    public List<Opportunity> opportunities { get; set; }

    // Pagination properties
    public Integer pageSize { get; set; }
    public Integer currentPage { get; set; }
    public Integer totalPages { get; set; }
    public Boolean hasPrevious { get; set; }
    public Boolean hasNext { get; set; }

    public NewOpportunityController() {
        pageSize = 10;
        currentPage = 1;
        loadAccountOptions();
    }

    public void loadAccountOptions() {
        accountOptions = new List<SelectOption>();
        for (Account acc : [SELECT Id, Name FROM Account]) {
            accountOptions.add(new SelectOption(acc.Id, acc.Name));
        }
    }

    public List<Opportunity> getPagedOpportunities() {
        Integer startIndex = (currentPage - 1) * pageSize;
        return opportunities.subList(startIndex, Math.min(startIndex + pageSize, opportunities.size()));
    }

    public void loadOpportunities() {
        opportunities = [SELECT Name, StageName, CloseDate FROM Opportunity WHERE AccountId = :selectedAccountId];

        // Update pagination properties
        totalPages = (opportunities.size() + pageSize - 1) / pageSize;
        hasPrevious = currentPage > 1;
        hasNext = currentPage < totalPages;
    }

    public PageReference nextPage() {
        currentPage++;
        loadOpportunities();
        return null;
    }

    public PageReference previousPage() {
        currentPage--;
        loadOpportunities();
        return null;
    }
}

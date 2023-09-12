public class UpdateRating implements Schedulable {
    public void execute(SchedulableContext ce ) {
        List<Account> records = new List<Account>();
        for(Account record : records){
            record.Rating = 'Warm';
        }

        update records;

    }
}
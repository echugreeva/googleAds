//script sends email notification once your monthly budget is exceeded on 80%, script runs everyday,
//on a monthly basis you need to update your current month budget
//you can tweak at which % of spend you want the nothification as well

function main() {
  var limit = [INSERT YOUR MONTHLY BUDGET HERE] * 0.8 ;

  Logger.log('limit: ' + limit);

  var accountCost = AdsApp.currentAccount().getStatsFor('THIS_MONTH').getCost();

  Logger.log(accountCost);

  if (accountCost > limit) {

    Logger.log("exceeded");

    function sendSimpleTextEmail() {
      MailApp.sendEmail('mailto:[INSERT YOUR EMAIL HERE]',
                    'ACCOUNT SPENT MORE THAN 80% OF MONTHLY BUDGET',
                    'Spend has exceeded 80% of the monthly budget');
}
    sendSimpleTextEmail();


      } else {
  Logger.log("all good");
  }

}

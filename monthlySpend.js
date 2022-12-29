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

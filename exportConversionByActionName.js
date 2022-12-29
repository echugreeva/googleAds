function main(){
  var ss = SpreadsheetApp.openByUrl([INSERT YOUR SPREADSHEET URL]);
  var sheet = ss.getActiveSheet();


  var query = `
    SELECT campaign.name, metrics.all_conversions, metrics.view_through_conversions, segments.conversion_action_name, segments.date
    FROM campaign
    WHERE segments.conversion_action_name = '[INSERT YOUR CONVERSION ACTION NAME]'
    AND segments.date DURING YESTERDAY
  `;
 var report = AdsApp.report(query);
 var rowIterator = report.rows();


  while (rowIterator.hasNext()) {
        var rowToAdd =[];
        var row = rowIterator.next();
        var campaign = row['campaign.name'];
        var date = row['segments.date'];
        var conv = row['metrics.all_conversions'];
        var vwconv = row['metrics.view_through_conversions'];
    console.log(vwconv);
        var conv_name = row['segments.conversion_action_name'];
        rowToAdd.push(date);
        rowToAdd.push(campaign);
        rowToAdd.push(conv);
        rowToAdd.push(vwconv);
        rowToAdd.push(conv_name)

       // Logger.log(row);
       sheet.appendRow(rowToAdd);
      //Logger.log(rowToAdd);



      }

 var query2 =`
    SELECT campaign.name, metrics.all_conversions, metrics.view_through_conversions, segments.conversion_action_name, segments.date
    FROM campaign
    WHERE segments.conversion_action_name = '[INSERT YOUR 2ND CONVERSION ACTION NAME]'
    AND segments.date DURING YESTERDAY
`
;


  var report2 = AdsApp.report(query2);
  var rowIterator2 = report2.rows();
  console.log(report2);

  while (rowIterator2.hasNext()) {
        var rowToAdd =[];
        var row = rowIterator2.next();
        var campaign = row['campaign.name'];
        var date = row['segments.date'];
        var conv = row['metrics.all_conversions'];
        var vwconv = row['metrics.view_through_conversions'];
        var conv_name = row['segments.conversion_action_name'];
        rowToAdd.push(date);
        rowToAdd.push(campaign);
        rowToAdd.push(conv);
        rowToAdd.push(vwconv);
        rowToAdd.push(conv_name);

       // Logger.log(row);
       sheet.appendRow(rowToAdd);
      //Logger.log(rowToAdd);



      }
 var query3 =`
    SELECT campaign.name, metrics.conversions, metrics.view_through_conversions, metrics.cost_micros, segments.date
    FROM campaign
    WHERE segments.date DURING YESTERDAY
`
;

 var report3 = AdsApp.report(query3);
 var rowIterator3 = report3.rows();

  console.log(rowIterator3);

  while (rowIterator3.hasNext()) {
        var rowToAdd =[];
        var row = rowIterator3.next();
        var campaign = row['campaign.name'];
        var date = row['segments.date'];
        var conv = row['metrics.conversions'];
        var vwconv = row['metrics.view_through_conversions'];
        var conv_name = `Sale`;
        var cost = row['metrics.cost_micros']/1000000;
        rowToAdd.push(date);
        rowToAdd.push(campaign);
        rowToAdd.push(conv);
        rowToAdd.push(vwconv);
        rowToAdd.push(conv_name);
        rowToAdd.push(cost);

       // Logger.log(row);
       sheet.appendRow(rowToAdd);
      //Logger.log(rowToAdd);



      }


}

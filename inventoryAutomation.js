(function() {
  'use strict';

  var handleAutomation = function(event) {
    var record = event.record;
    var orderType = record.order_type.value;
    var orderQuantity = parseInt(record.qty.value);
    var itemCode = record.item_lookup.value;
    
    // Check if the item_lookup field exists and has a value
    if (record.hasOwnProperty('item_lookup') && record.item_lookup.value) {
      var isSale = orderType === 'Sale';
      // Check if the record is being moved from "In Progress" to "Completed"
      if (event.nextStatus.value === 'Complete' && event.status.value === 'In Progress') {
        kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
          app: 25, 
          query: 'item_code="' + itemCode + '"'
      }).then(function(resp) {
      var itemsRecords = resp.records;
      if (itemsRecords.length > 0) {
        var itemRecord = itemsRecords[0];
        var stock = parseInt(itemRecord.stock.value);
        // update the item stock accordingly based on order type and status
        if (orderType === 'Sale') {
          var newStock = stock - orderQuantity;
          kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
            app: 25,
            id: itemRecord['$id'].value,
            record: {
              stock: { value: newStock }
            }
          }).then(function(resp) {
            console.log(resp);
          }).catch(function(error) {
            console.log(error);
          });
        } else if (orderType === 'Purchase') {
          var newPurchaseStock = stock + (orderQuantity);
          kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
            app: 25,
            id: itemRecord['$id'].value,
            record: {
              stock: { value: newPurchaseStock }
            }
          }).then(function(resp) {
            console.log(resp);
          }).catch(function(error) {
            console.log(error);
          });
        }
      }
    }).catch(function(error) {
      console.log(error);
    });
      }
    }
    return event;
  }
  kintone.events.on('app.record.detail.process.proceed', handleAutomation);
})();

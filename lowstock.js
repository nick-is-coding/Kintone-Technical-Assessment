(function() {
  'use strict';
  
  var changeStockColor = function(params) {
    var element = params.element;
    var value = params.value;
    var backgroundColor;
    if (value >= 15) {
      backgroundColor= '#81AE9D'; // Green
    } else if (value >= 5) {
      backgroundColor = '#FFF275'; // Yellow
    } else {
      backgroundColor = '#C8553D'; // Red
    }
    console.log('value:', value);
    console.log('backgroundColor', backgroundColor);
    if(backgroundColor) {
      element.style.backgroundColor = backgroundColor;
    }
  }
  
  kintone.events.on('app.record.detail.show', function(event) {
    var record = event.record;
    
    var stock = record.stock.value;
    var stockElement = kintone.app.record.getFieldElement('stock');
    changeStockColor({element: stockElement, value: stock});
    
    return event;
    
  });
  kintone.events.on('app.record.index.show', function(event) {
    var records = event.records;
    var stockElements = kintone.app.getFieldElements('stock');
    for (var i = 0; i < records.length; i++) {
      var record = records[i];
      var stock = record.stock.value;
      var stockElement = stockElements[i];
      changeStockColor({element: stockElement, value: stock});
    }
  return event;
});
  
})();

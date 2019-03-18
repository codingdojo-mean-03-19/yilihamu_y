const _ = {

    map: function(array, callback) {
      for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
      }
    },

    reduce: function(array, callback, memo){
        let el = 0;
        if (!memo){
          memo = array[0];
          el = 1;
        }
        for (let i = el; i < array.length; i++) {
          memo = callback(array[i], memo);
        }
        return memo;
    },

    filter: function(array, callback) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                tempArray.push(array[i]);
            }
        }
      
        return tempArray;
    },

    find: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])){
            return array[i];
            }
        }
    },

    reject: function(array, callback) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i])) {
                tempArray.push(array[i]);
            }
        }
      
        return tempArray;
    },
  }
  
  const array = [3, 4, 5];
  _.map(array, function callback(x) { return x * 5; });
  console.log(array);
  console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
  console.log(_.find(array, function callback(x) { return x === 15; }));
  console.log(_.filter(array, function(x) { return x > 20; }));
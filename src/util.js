var util = {
    asyncRun(context, f, params) {
        if(typeof f != 'function') throw "First parameter of asyncRun must be a function!";
        f = f.bind(context);
        return new Promise((resolve, reject) => {
            if(params) {
                f(params, function(err, data) {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                });
            }
            else {
                f(function(err, data) {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                });
            }
        })
    }
};

module.exports = util;
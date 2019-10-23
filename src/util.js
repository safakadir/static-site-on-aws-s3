var util = {
    // Context is needed. 
    // Since it's not called directly as a method, it loses the context and this statements start to produce errors.
    // Use of bind makes the method regain its original context.
    // https://stackoverflow.com/questions/24687915/error-turning-amazon-s3-function-into-promises-using-when-node
    asyncRun(context, method, params) { 
        if(typeof method != 'function') throw "First parameter of asyncRun must be a function!";
        method = method.bind(context);
        return new Promise((resolve, reject) => {
            if(params) {
                method(params, function(err, data) {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                });
            }
            else {
                method(function(err, data) {
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

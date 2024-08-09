const middlewares = {
    middleware1 : function(req,res,next){
        console.log('middleware1');
        next();
    },

    middleware2 : function(req,res,next){
        console.log('middleware2');
        next();
    },

    middleware3 : function(req,res,next){
        console.log('middleware3');
        next();
    }
};

module.exports = middlewares;
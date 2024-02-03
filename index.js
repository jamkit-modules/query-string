const module = (function() {
    function _build_query(params, options) {
        var query = "";
    
        for (let key in params) {
            query += (query.length > 0) ? "&" : "";
            query += key + "=" + encodeURIComponent(params[key]);
        }
    
        return query;
    }

    return {
        stringify: function(params, options) {
            return _build_query(params, options || {});
        }
    }
})();

__MODULE__ = module;

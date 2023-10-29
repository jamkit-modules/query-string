function _build_query(params) {
    var query = "";

    for (let key in params) {
        query += (query.length > 0) ? "&" : "";
        query += key + "=" + encodeURIComponent(params[key]);
    }

    return query;
}

const module = (function() {
    return {
        stringify: function(params) {
            return _build_query(params);
        }
    }
});

__MODULE__ = module;

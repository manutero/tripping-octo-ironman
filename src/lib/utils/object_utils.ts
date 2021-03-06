/*
 * Exports two usefull functions
 * 1. overwrite(Object, Object) : Object
 * 2. complete(Object, Object) : Object
 */
 
 
/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj'2
 * 
 * @example
 *  var o1 = {a:12, b:"empty"};
 *  var o2 = {b: "default", c:"added"};
 *  var o3 = overwrite(o1, o2) 
 *      #=> {a: 12, b: "default", c:"added"}
 * 
 * @param {object} obj1
 * @param {object} obj2
 * @return {object} A new object based on o1 and override with o2
 */
export function overwrite(obj1: Object, obj2: Object) : Object {
    var o1 = obj1 || {}, 
        o2 = obj2 || {},
        response = {};
    for (var attrname in o1) { response[attrname] = o1[attrname]; }
    for (var attrname in o2) { response[attrname] = o2[attrname]; }
    return response;
}


/**
 * Completes obj1's values with obj2's defaults values adding those attributes from obj2 that weren't in obj1.
 * 
 * @example
 *  var o1 = {a:12, b:"mine"};
 *  var o2 = {b:"default", c:42};
 *  var o3 = complete(o1, o2)
 *      #=> {a:12, b:"mine", c:42}
 * 
 * @param {object} obj1
 * @param {object} obj2
 * @return {object} A new object based on o1 and completed - if necessary - with obj2's defaults.
 */
export function complete(obj1: Object, obj2: Object) : Object {
    var o1 = obj1 || {}, 
        o2 = obj2 || {},
        response = {};
    for (var attrname in o1) { response[attrname] = o1[attrname]; }
    for (var attrname in o2) { 
        if (!o1[attrname]) { response[attrname] = o2[attrname]; }
    }
    return response;
}

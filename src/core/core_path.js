/**
 * @name pc.path
 * @namespace Code for manipulating file and resource paths
 */
pc.path = function () {
    return {
        /**
         * The character that separates path segments
         * @name pc.path.delimiter
         */
        delimiter: "/",
        /**
         * Join two sections of file path together, insert a delimiter if needed.
         * @param {String} one First part of path to join
         * @param {String} two Second part of path to join
         * @function
         * @name pc.path.join
         */
        /*
         join: function(one, two) {
            if(two[0] === pc.path.delimiter) {
                return two;
            }
            
            if(one && two && one[one.length - 1] !== pc.path.delimiter && two[0] !== pc.path.delimiter) {
                return one + pc.path.delimiter + two;
            }
            else {
                return one + two;
            }
        },
        */
        join: function () {
            var index;
            var num = arguments.length;
            var result = arguments[0];
            
            for(index = 0; index < num - 1; ++index) {
                var one = arguments[index];
                var two = arguments[index+1];
                if(!pc.isDefined(one) || !pc.isDefined(two)) {
                    throw new Error("undefined argument to pc.path.join");
                }
                if(two[0] === pc.path.delimiter) {
                    result = two;
                    continue;
                }
                
                if(one && two && one[one.length - 1] !== pc.path.delimiter && two[0] !== pc.path.delimiter) {
                    result += (pc.path.delimiter + two);
                } else {
                    result += (two);
                }
            }
            
            return result;
        },
        /**
         * Get the directory name from the path. This is everything up to the final instance of pc.path.delimiter
         * @param {String} path The path to get the directory from
         * @function
         * @name pc.path.getDirectory
         */
        getDirectory: function(path) {
            var parts = path.split(pc.path.delimiter);
            return parts.slice(0,parts.length-1).join(pc.path.delimiter);
        },
        
        getExtension: function (path) {
            var ext = path.split(".").pop();
            if (ext !== path) {
                return "." + ext;
            } else {
                return "";
            }
        },
        
        isRelativePath: function (s) {
            return s.charAt(0) !== "/" && s.match(/:\/\//) === null;
        },

        extractPath: function (s) {
            var path = ".", 
            parts = s.split("/"),
            i = 0;
                
            if (parts.length > 1) {    
                if (pc.path.isRelativePath(s) === false) {
                    path = "";
                }
                for (i = 0; i < parts.length - 1; ++i) {
                    path += "/" + parts[i];
                }
            }
            return path;
        }
    };    
} ();





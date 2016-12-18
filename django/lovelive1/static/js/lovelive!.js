(function() {
    var _DATA = [		// Map data：　27 * 45
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	],
    _LEFT = [		// Map data：　27 * 28
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	],
    _RIGHT = [		// Map data：　27 * 28
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	],
    _UP = [		// Map data：　27 * 28
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	],
    _DOWN = [		// Map data：　27 * 28
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	],
    _SPECIAL = [		// Map data：　27 * 28
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,1,0,0,0,0,0,2,9,9,9,9,9,9,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,3,9,9,9,9,9,9,9,9,9,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,1,9,9,9,9,9,9,9,9,9,9,9,2,9,9,9,9,9,9,9,9,9,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,5,9,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,7,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	],
    _OWNERS = new Array(_DATA[0].length),
    _PRICES = new Array(_DATA[0].length),
    // 0: right. 1: down. 2: left. 3: up.
	_DX = [1,0,-1,0],
	_DY = [0,-1,0,1],
    _COLOR = ['#F00','#F93','#0CF','#F9C'], // Red, Oringe
	_SCORE = 0,
    _OFFSET = {x: 60, y: 60},
    _CURRENT_TOKEN = 0;
    _MY_TOKEN = 0;
    _TEMP_TOKEN = -1;
    _RANDOM_DIRECTION = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0];
    _RANDOM_INDEX = 0;
    _M = _DATA.length;
    _N = _DATA[0].length;
    _NUMBER_OF_USERS = 3;
    priceArray = new Array(_N);
    for (var i = 0; i < _N; i++) {
        temp = new Array(_M);
        for (var j = 0; j < temp.length; j++) {
            temp[j] = Math.floor(Math.random() * (6000 - 1000) + 1000);
        }
        priceArray[i] = temp;
    }

    //
    // Ajax here
    //

    // Locks
    var mutex = new Mutex();
    var isMoving = false;
    var isProcessing = false;

    // Images
    var numberOfPlayers = 3;
    var houses = new Array(numberOfPlayers); // 3
    var icons = new Array(numberOfPlayers); // 3
    var characters = new Array(numberOfPlayers); // 48 * 3 = 144
    var characterStanding = new Array(numberOfPlayers); // 144
    for (var i = 0; i < numberOfPlayers; i++) {
        houses[i] = new Image();
        characters[i] = new Array(24);
        characterStanding[i] = new Array(24);
        for (var j = 0; j < 48; j++) {
            characters[i][j] = new Image();
            characterStanding[i][j] = new Image();
        }
        icons[i] = new Image();
    }
    var specialImages = new Array(8); // 7
    for (var i = 0; i < specialImages.length; i++) {
        specialImages[i] = new Image();
    }
    var garden = new Image(); // 1
    var diceImage = new Image(); // 1
    var numberOfImage = 303;
    var my_room_id = -1;
    var userCounter = 0;

    var imagesLoad = new Array(numberOfImage);
    for (var i = 0; i < numberOfImage; i++) {
        imagesLoad = false;
    }

    // Audio
    var audio = new Audio("/static/lovelive/audio/Final Fantasy IX - Ukulele De Chocobo.mp3");
    var isAudioLoaded = false;

    $.get("/lovelive/get-my-room-id/")
        .done(function(data1) {
            if (data1.my_room_id == -1) {
                window.location = "/lovelive/error-lovelive/";
            } else {
                my_room_id = data1.my_room_id;
            }
        });

    var game = new Game('canvas');
    for (var i = 0; i < _OWNERS.length; i++) {
        _OWNERS[i] = new Array(_DATA.length);
        for (var j = 0; j < _DATA.length; j++) {
            _OWNERS[i][j] = -1;
        }
    }
    for (var i = 0; i < _OWNERS.length; i++) {
        _PRICES[i] = new Array(_DATA.length);
        for (var j = 0; j < _DATA.length; j++) {
            _PRICES[i][j] = 2500;
        }
    }

    _PLAYERS = [{'username':':<>}{@#)()}',
                 'cash':100000,
                 'deposit':0},
                 {'username':'>#@:{@#+}',
                  'cash':100000,
                  'deposit':0},
                  {'username':'#+_@:#>?@#',
                   'cash':100000,
                   'deposit':0}
                ]
    // _PLAYERS = [{'username':'444',
    //              'cash':100000,
    //              'deposit':0},
    //              {'username':'555',
    //               'cash':100000,
    //               'deposit':0},
    //               {'username':'666',
    //                'cash':100000,
    //                'deposit':0}
    //             ]
    game.colors = ['#FFE600', '#00FFFF', '#DC143C'];
    game.orientations = [2, 0, 1];

    var counter = 0;
    var particles = [];

    var usersInRoom = [];
    var canStart = false;
    var allUsersReady = false;
    var sendGameStart = false;
    var isSocketReady = false;
    var socket;
    var myUsername = '';

    // The start page.
    (function() {
        var stage = game.createStage();
        isCompleted = false;
        stage.createItem({
			x:game.width / 2,
			y:game.height * .45,
			width:100,
			height:100,
			frames:10,
			draw:function(context){
                context.fillStyle = "#272822";
                context.fillRect(0,0,game.width,game.height);
                context.fillStyle = "#171814";
                context.fillRect(game.width/2 - 250,game.height/2,500,25);
			}
		});
        var bar = stage.createItem({
			x:game.width/2 - 250,
			y:game.height/2,
			width:0,
			height:100,
			frames:10,
			draw:function(context){
                this.hue += 0.8;
                if (this.width < 500) {
                    // this.hue += 2;
                    // this.width += 10;
                    var index = 0;
                    for (var i = 0; i < numberOfPlayers; i++) {
                        houses[i].src = "/static/lovelive/imgs/house" + i + ".jpg";
                        if (houses[i].complete && !imagesLoad[i]) {
                            this.width += 500 / numberOfImage;
                            imagesLoad[i] = true;
                        }
                        icons[i].src = "/static/lovelive/imgs/role-icon" + i + ".png";
                        if (icons[i].complete && !imagesLoad[i + numberOfPlayers]) {
                            this.width += 500 / numberOfImage;
                            imagesLoad[i + numberOfPlayers] = true;
                        }
                        for (var j = 0; j < 48; j++) {
                            characters[i][j].src = "/static/lovelive/imgs/characters/walking/role_walking_" + i + "_0" + (j + 1) + ".jpg";
                            if (characters[i][j].complete && !imagesLoad[6 + i * 48 + j]) {
                                this.width += 500 / numberOfImage;
                                imagesLoad[6 + i * 48 + j] = true;
                            }
                        }
                        for (var j = 0; j < 48; j++) {
                            characterStanding[i][j].src = "/static/lovelive/imgs/characters/standing/role_standing_" + i + "_0" + (j + 1) + ".jpg";
                            if (characterStanding[i][j].complete && !imagesLoad[150 + i * 48 + j]) {
                                this.width += 500 / numberOfImage;
                                imagesLoad[150 + i * 48 + j] = true;
                            }
                        }
                    }
                    garden.src = "/static/lovelive/imgs/garden.png";
                    if (garden.complete && !imagesLoad[294]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[294] = true;
                    }
                    diceImage.src = "/static/lovelive/imgs/dice.png";
                    if (diceImage.complete && !imagesLoad[295]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[295] = true;
                    }
                    specialImages[1].src = "/static/lovelive/imgs/school.jpg";
                    if (specialImages[1].complete && !imagesLoad[296]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[296] = true;
                    }
                    specialImages[2].src = "/static/lovelive/imgs/restaurant.jpg";
                    if (specialImages[2].complete && !imagesLoad[297]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[297] = true;
                    }
                    specialImages[3].src = "/static/lovelive/imgs/supermarket.jpg";
                    if (specialImages[3].complete && !imagesLoad[298]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[298] = true;
                    }
                    specialImages[4].src = "/static/lovelive/imgs/mall.jpg";
                    if (specialImages[4].complete && !imagesLoad[299]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[299] = true;
                    }
                    specialImages[5].src = "/static/lovelive/imgs/gas station.jpg";
                    if (specialImages[5].complete && !imagesLoad[300]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[300] = true;
                    }
                    specialImages[6].src = "/static/lovelive/imgs/hospital.jpg";
                    if (specialImages[6].complete && !imagesLoad[301]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[301] = true;
                    }
                    specialImages[7].src = "/static/lovelive/imgs/bank.jpg";
                    if (specialImages[7].complete && !imagesLoad[302]) {
                        this.width += 500 / numberOfImage;
                        imagesLoad[302] = true;
                    }

                    context.font = 'bold 25px Comic Sans MS';
    				context.textAlign = 'center';
    				context.textBaseline = 'middle';
    				context.fillStyle = '#FFF';
    				context.fillText('Loading images ...',this.x + 250,this.y + 50);
                } else if (canStart) {
                    context.strokeStyle="#AAA";
                    context.strokeRect(this.x + 250 - 60, this.y + 50, 120, 36);
                    context.font = 'bold 25px Comic Sans MS';
    				context.textAlign = 'center';
    				context.textBaseline = 'middle';
    				context.fillStyle = '#FFF';
    				context.fillText('Start',this.x + 250,this.y + 66);
                    isCompleted = true;
                    // this.width = 500;
                }
                context.fillStyle = 'hsla('+this.hue+', 50%, 40%, 1)';　// 100%, 40%, 1
                context.fillRect(this.x,this.y,this.width,25);
                var grad = context.createLinearGradient(0,0,0,130);
                grad.addColorStop(0,"transparent");
                grad.addColorStop(1,"rgba(0,0,0,0.5)");
                context.fillStyle = grad;
                context.fillRect(this.x,this.y,this.width,25);

                if (my_room_id != -1 && !isSocketReady) {
                    isSocketReady = true;
                    socket = new WebSocket("ws://" + window.location.host + "/lovelive/channel/" + my_room_id);
                    socket.onopen = function () {
                        socket.send("0" + "##@##" + "AAA");
                    }
                }

                if (isSocketReady) {
                    socket.onmessage = function(message) {
                        console.log("$$$" + message.data);
                        var mes = JSON.parse(message.data);
                        if (mes.type_no == '0') {
                            userCounter++;
                        } else if (mes.type_no == '1') {
                            $.get("/lovelive/get-my-initial-property/")
                            .done(function(data3) {
                                console.log("get-my-initial-property");
                                myUsername = data3.username;
                                socket.send("2" + "##@##" + data3.username + "##@##" + data3.cash + "##@##" + data3.deposit);
                            });
                        } else if (mes.type_no == '2') {
                            var newItem = {"username":mes.username,
                                            "cash":parseInt(mes.cash),
                                            "deposit": mes.deposit};
                            insert(_PLAYERS, newItem);
                            if (_PLAYERS.length >= _NUMBER_OF_USERS + 3) {
                                canStart = true;
                                while (_PLAYERS.length > 3) {
                                    _PLAYERS.pop();
                                }
                                _PLAYERS.sort(function(a, b) {
                                    return strcmp(a.username, b.username);
                                });
                                for (var i = 0; i < _PLAYERS.length; i++) {
                                    console.log("All user in:" + _PLAYERS[i].username);
                                    if (myUsername == _PLAYERS[i].username) {
                                        _MY_TOKEN = i;
                                    }
                                }
                            }
                        }
                    }
                    if (userCounter >= _NUMBER_OF_USERS && !sendGameStart) {
                        sendGameStart = true;
                        socket.send("1" + "##@##" + "game start");
                    }
                }
			}
		});
        bar.hue = 0;
        //logo
		stage.createItem({
			x:game.width / 2,
			y:game.height * .45,
			width:100,
			height:100,
			frames:10,
			draw:function(context){
			}
		});
        // Name of the game.
		stage.createItem({
            x:game.width / 2,
			y:game.height * .4,
			draw:function(context){
				context.font = 'bold 42px Helvetica';
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = '#FFF';
				context.fillText('Lovelive!',this.x,this.y);
			}
		});
		// Copyright.
		stage.createItem({
            x:game.width - 12,
			y:game.height - 5,
			draw:function(context){
				context.font = '25px Helvetica';
				context.textAlign = 'right';
				context.textBaseline = 'bottom';
				context.fillStyle = '#AAA';
				context.fillText('© Team214',this.x,this.y);
			}
		});
        stage.bind('click',function(e) {
            var point = getEventPosition(e);
            if (point && isCompleted && point.x > game.width/2 - 60 && point.x < game.width/2 + 120
                      && point.y > game.height/2 + 50 && point.y < game.height/2 + 86) {
                socket.send("010");
                game.nextStage();
            }
		});
    })();

    // The playing page
    (function (){
        var stage,map,times,buildings,leftBuildings,rightBuildings,upBuildings,downBuildings;
        var income = [0, 0, 0];
        var isInit = true;
        var players = [];

        stage = game.createStage( {
			update:function() {
                if (isSocketReady) {
                    socket.onmessage = function(message) {
                        console.log("$$$" + message.data);
                        var result = JSON.parse(message.data);
                        if (result.type_no == '010') {
                            insertUsername(usersInRoom,result.username);
                            console.log("userinroom = " + usersInRoom.length);
                            dice.step = 0;
                            if (usersInRoom.length >= _NUMBER_OF_USERS) {
                                randomIndex = Math.floor(Math.random() * (24 - 0 + 1)) + 0;
                                socket.send("101" + "##@##" + randomIndex);
                            }
                        } else if (result.type_no == '101') {
                            allUsersReady = true;;
                            _RANDOM_INDEX = result.random_index;
                            if (typeof audio.loop == 'boolean') {
                                audio.loop = true;
                            } else {
                                audio.addEventListener('ended', function() {
                                    this.currentTime = 0;
                                    this.play();
                                }, false);
                            }
                            audio.play();
                            if (_CURRENT_TOKEN == _MY_TOKEN) {
                                layer.msg("Your turn.", {
                                    skin:'layer-ext-espresso',
                                    icon: 1,
                                    time: 1250,
                                });
                            }
                        } else if (result.type_no == '3') {
                            var step = parseInt(result.step);
                            players[_CURRENT_TOKEN].steps += step * map.size;
                            isMoving = true;
                            isProcessing = true;
                            dice.step = step - 1;
                        } else if (result.type_no == '4') {
                            _CURRENT_TOKEN = parseInt(result.token);
                            if (_CURRENT_TOKEN == _MY_TOKEN) {
                                layer.msg("Your turn.", {
                                    skin:'layer-ext-espresso',
                                    icon: 1,
                                    time: 1250,
                                });
                            }
                        } else if (result.type_no == '5') {
                            isMoving = false;
                        } else if (result.type_no == '6') {
                            isProcessing = false;
                            if (!isMoving && !isProcessing && !isInit) {
                                var nextToken = (_CURRENT_TOKEN + 1) % _NUMBER_OF_USERS;
                                socket.send("4" + "##@##" + nextToken);
                            }
                        } else if (result.type_no == '7') {
                            var coord_x = result.x;
                            var coord_y = result.y;
                            _PRICES[coord_x][coord_y] = result.money;

                            for (var i = 0; i < buildingSet.length; i++) {
                                if (buildingSet[i].get(coord_x, coord_y)) {
                                    buildingSet[i].set(coord_x, coord_y, result.level);
                                }
                            }
                            for (var i = 0; i < 3; i++) {
                                if (_PLAYERS[i].username == result.username) {
                                    _OWNERS[coord_x][coord_y] = i;
                                }
                            }
                        } else if (result.type_no == '8') {
                            var temp_token = parseInt(result.token);
                            var temp_money = parseInt(result.money);
                            income[temp_token] = income[temp_token] + temp_money;
                        }
                    }
                }
			}
		});
        stage.createItem({
            x:game.width / 2,
			y:game.height * .4,
			draw:function(context){
                if (!allUsersReady) { // !!!!!!!
    				context.font = 'bold 42px Helvetica';
    				context.textAlign = 'center';
    				context.textBaseline = 'middle';
    				context.fillStyle = '#000';
    				context.fillText('Waiting other users',this.x,this.y);
                }
			}
		});
        reminder = stage.createItem({
            x:game.width - 125,
			y:game.height * .05,
			draw:function(context){
                this.hue += 0.8;
                context.font = 'bold 25px Helvetica';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillStyle = 'hsla('+this.hue+', 50%, 40%, 1)';
                if (_CURRENT_TOKEN == _MY_TOKEN) { // !!!!!!!
    				context.fillText('YOUR TURN',this.x,this.y);
                } else {
                    context.fillText(_PLAYERS[_CURRENT_TOKEN].username + "'s turn",this.x,this.y);
                }
			}
		});
        reminder.hue = 0;
        // Create Map
        map = stage.createMap({
			x:_OFFSET.x,
			y:_OFFSET.y,
			data:_DATA,
			cache:false, // True -> Cannot eat bean
			draw:function(context){
				for(var j=0; j<this.y_length; j++){
					for(var i=0; i<this.x_length; i++){
						var value = this.get(i,j);
						if(!value){
							var code = 0;
                            var up = this.get(i,j-1);
                            var leftTop = this.get(i-1,j-1);
                            var rightTop = this.get(i+1,j-1);
                            var left = this.get(i-1,j);
                            var right = this.get(i+1,j);
                            var rightBottom = this.get(i+1,j+1);
                            var down = this.get(i,j+1);
                            var leftBottom = this.get(i-1,j+1);
							if(!up&&!(!leftTop&&!rightTop&&!left&&!right)){
								if(j){
									code += 1000;
								}
							}
							if(!right&&!(!rightTop&&!rightBottom&&!up&&!down)){
								if(i<this.x_length-1){
									code += 100;
								}
							}
							if(!down&&!(!leftBottom&&!rightBottom&&!left&&!right)){
								if(j<this.y_length-1){
									code += 10;
								}
							}
							if(!left&&!(!leftTop&&!leftBottom&&!up&&!down)){
								if(i){
									code += 1;
								}
							}
							if(code){
								context.strokeStyle=value==2?"#FFF":"#e67300";
                                context.lineWidth = 7;
								var pos = this.coord2position(i,j);
								switch(code){
									case 1100:
									context.beginPath();
									context.arc(pos.x+this.size/2,pos.y-this.size/2,this.size/2,.5*Math.PI,1*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
									case 110:
									context.beginPath();
									context.arc(pos.x+this.size/2,pos.y+this.size/2,this.size/2,Math.PI,1.5*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
									case 11:
									context.beginPath();
									context.arc(pos.x-this.size/2,pos.y+this.size/2,this.size/2,1.5*Math.PI,2*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
									case 1001:
									context.beginPath();
									context.arc(pos.x-this.size/2,pos.y-this.size/2,this.size/2,0,.5*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
									default:
									var arr = String.prototype.split.call(code,'');
									if(+arr.pop()){
										context.beginPath();
										context.moveTo(pos.x,pos.y);
										context.lineTo(pos.x-this.size/2,pos.y);
										context.stroke();
										context.closePath();
									}
									if(+arr.pop()){
										context.beginPath();
										context.moveTo(pos.x,pos.y);
										context.lineTo(pos.x,pos.y+this.size/2);
										context.stroke();
										context.closePath();
									}
									if(+arr.pop()){
										context.beginPath();
										context.moveTo(pos.x,pos.y);
										context.lineTo(pos.x+this.size/2,pos.y);
										context.stroke();
										context.closePath();
									}
									if(+arr.pop()){
										context.beginPath();
										context.moveTo(pos.x,pos.y);
										context.lineTo(pos.x,pos.y-this.size/2);
										context.stroke();
										context.closePath();
									}
								}
							}
						}
					}
				}
			}
		});
        var buildingSize = map.size;
        // Create buildings
        buildings = stage.createMap({
            x:_OFFSET.x,
            y:_OFFSET.y,
            data:_DATA,
            frames:8,
            draw:function(context){
                for(var j=0; j<this.y_length; j++) {
                    for(var i=0; i<this.x_length; i++) {
                        if (this.get(i, j)) {
                            var pos = this.coord2position(i,j);
                            context.fillStyle = "#FFF";
                            context.fillRect(pos.x-map.size,pos.y-map.size,map.size*2,map.size*2);
                        }
                        if(this.get(i,j) && i % 2 && j % 2 &&
                                !leftBuildings.get(i,j) &&
                                !rightBuildings.get(i,j) &&
                                !upBuildings.get(i,j) &&
                                !downBuildings.get(i,j)) {
                            var pos = this.coord2position(i,j);
                            context.fillStyle = "#F5F5DC";
                            context.fillRect(pos.x-map.size/2,pos.y-map.size/2,map.size,map.size);
                        }
                    }
                }
            }
        })
        // left buildings
        leftBuildings = stage.createMap({
            x:_OFFSET.x - 2 * map.size + 3,
            y:_OFFSET.y + 4,
            data:_LEFT,
            frames:8,
            prices:priceArray,
            draw:function(context){
                for(var j=0; j<this.y_length; j++) {
                    for(var i=0; i<this.x_length; i++) {
                        var level = this.get(i,j);
                        if (level && i % 2 && j % 2) {
                            var pos = this.coord2position(i,j);
                            context.lineWidth = 1;
                            context.strokeStyle="#AAA";
                            context.strokeRect(pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                            if (_OWNERS[i][j] >= 0 && _OWNERS[i][j] < _NUMBER_OF_USERS) {
                                if (level == 1) {
                                    context.drawImage(icons[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                } else if (level == 2) {
                                    context.drawImage(houses[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                }
                            }
                        }
                    }
                }
            }
        })
        rightBuildings = stage.createMap({
            x:_OFFSET.x + 2 * map.size + 3,
            y:_OFFSET.y + 4,
            data:_RIGHT,
            frames:8,
            prices:priceArray,
            draw:function(context){
                for(var j=0; j<this.y_length; j++) {
                    for(var i=0; i<this.x_length; i++) {
                        var level = this.get(i,j);
                        if (level && i % 2 && j % 2) {
                            var pos = this.coord2position(i,j);
                            context.lineWidth = 1;
                            context.fillStyle = "#F5F5DC";
                            context.strokeStyle="#A0A";
                            context.strokeRect(pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                            if (_OWNERS[i][j] >= 0 && _OWNERS[i][j] < _NUMBER_OF_USERS) {
                                if (level == 1) {
                                    context.drawImage(icons[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                } else if (level == 2) {
                                    context.drawImage(houses[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                }
                            }
                        }
                    }
                }
            }
        })
        upBuildings = stage.createMap({
            x:_OFFSET.x + 3,
            y:_OFFSET.y - 2 * map.size + 3,
            data:_UP,
            frames:8,
            prices:priceArray,
            draw:function(context){
                for(var j=0; j<this.y_length; j++) {
                    for(var i=0; i<this.x_length; i++) {
                        var level = this.get(i,j);
                        if (level && i % 2 && j % 2) {
                            var pos = this.coord2position(i,j);
                            context.lineWidth = 1;
                            context.fillStyle = "#F5F5DC";
                            context.strokeStyle="#0AA";
                            context.strokeRect(pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                            if (_OWNERS[i][j] >= 0 && _OWNERS[i][j] < _NUMBER_OF_USERS) {
                                if (level == 1) {
                                    context.drawImage(icons[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                } else if (level >= 2) {
                                    context.drawImage(houses[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                }
                            }
                        }
                    }
                }
            }
        })
        downBuildings = stage.createMap({
            x:_OFFSET.x + 3,
            y:_OFFSET.y + 2 * map.size + 3,
            data:_DOWN,
            frames:8,
            prices:priceArray,
            draw:function(context){
                for(var j=0; j<this.y_length; j++) {
                    for(var i=0; i<this.x_length; i++) {
                        var level = this.get(i,j);
                        if (level && i % 2 && j % 2) {
                            var pos = this.coord2position(i,j);
                            context.lineWidth = 1;
                            context.fillStyle = "#F5F5DC";
                            context.strokeStyle="#AA0";
                            context.strokeRect(pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                            if (_OWNERS[i][j] >= 0 && _OWNERS[i][j] < _NUMBER_OF_USERS) {
                                if (level == 1) {
                                    context.drawImage(icons[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                } else if (level == 2) {
                                    context.drawImage(houses[_OWNERS[i][j]],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                                }
                            }
                        }
                    }
                }
            }
        })
        specialBuildings = stage.createMap({
            x:_OFFSET.x + 3,
            y:_OFFSET.y + 3,
            data:_SPECIAL,
            frames:8,
            draw:function(context){
                var buildingSize = map.size;
                for(var j=0; j<this.y_length; j++) {
                    for(var i=0; i<this.x_length; i++) {
                        var type = this.get(i,j);
                        if (type > 0 && type < 9) {
                            var pos = this.coord2position(i,j);
                            context.drawImage(specialImages[type],pos.x-map.size,pos.y-map.size,map.size*2-7,map.size*2-7);
                        }
                    }
                }
            }
        })
        buildingSet = [leftBuildings, rightBuildings, upBuildings, downBuildings];
        // Create dice. Dice should be created before the player
        dice = stage.createItem({
            x:game.width-150,
			y:100,
            width:90,
            height:90,
            step:1,
			draw:function(context){ // y positions: 5, 110, 215, 320, 430, 540, 650,
                context.drawImage(diceImage, 5, this.yPos[this.step], 90, 90, this.x, this.y, this.width, this.height);
			}
		});
        dice.yPos = [5, 110, 215, 320, 430, 540];
        stage.bind('click', function(e) {
            console.log("MY_TOKEN = " + _MY_TOKEN + "\tCURRENT_TOKEN = " + _CURRENT_TOKEN + "\tmyusername = " + myUsername);
            if (!isMoving && !isProcessing && _MY_TOKEN == _CURRENT_TOKEN && allUsersReady) { // !!!!!!!
                isInit = false;
                var point = getEventPosition(e);
                var a = point.x - dice.x;
                var b = point.y - dice.y;
                for (var i = 0; i < _PLAYERS.length; i++) {
                    console.log("&&&username = " + _PLAYERS[i].username);
                }
                if (point.x > dice.x && point.x < dice.x + dice.width
                          && point.y > dice.y && point.y < dice.y + dice.height) {
                    var step = Math.floor(Math.random() * 6 + 1); // generate random number between 1 ~ 6.
                    console.log("You got " + step);
                    socket.send("3" + "##@##" + step);
                    isMoving = true;
                }
            } else {
                if (isMoving) {
                    console.log("Is moving!");
                }
                if (isProcessing) {
                    console.log("Is processing!");
                }
                if (_MY_TOKEN != _CURRENT_TOKEN) {
                    console.log("Not you turn!");
                }
            }
        });
        // Create Players
        for (var i = 0; i < 3; i++) {
            thisCoord = {};
            if (i == 0) {
                thisCoord = {x:1, y:1};
            } else if (i == 1) {
                thisCoord = {x:map.x_length - 2, y:map.y_length - 2};
            } else if (i == 2) {
                thisCoord = {x:13, y:13};
            }
    		player = stage.createItem({
    			width:15,
    			height:15,
    			type:1,
    			location:map,
    			coord:thisCoord,
    			orientation:game.orientations[i],
    			speed:2,
    			frames:10,
                token:i,
                color:game.colors[i],
                // name:_PLAYERS[i].username,
                // cash:_PLAYERS[i].cash,
                // deposit:_PLAYERS[i].deposit,
    			update:function() {
                    if (income[this.token] != 0) {
                        var abs = Math.abs(income[this.token]);
                        var diff = 1;
                        if (abs > 10000) {
                            diff = 1111;
                        } else if (abs > 1000) {
                            diff = 111;
                        } else if (abs > 100) {
                            diff = 11;
                        } else if (abs > 10) {
                            diff = 9;
                        } else {
                            diff = 1;
                        }
                        if (income[this.token] > 0) {
                            income[this.token] -= diff;
                            _PLAYERS[this.token].cash += diff;
                        } else {
                            income[this.token] += diff;
                            if (diff <= _PLAYERS[this.token].cash) {
                                _PLAYERS[this.token].cash -= diff;
                            } else {
                                var remaining = diff - _PLAYERS[this.token].cash;
                                _PLAYERS[this.token].cash = 0;
                                _PLAYERS[this.token].deposit -= remaining;
                            }
                        }
                        if (income[this.token] == 0 && _PLAYERS[this.token].cash + _PLAYERS[this.token].deposit < 0) {
                            layer.msg("Game Over. " + _PLAYERS[this.token].username + " is bankrupt!", {
                                skin:'layer-ext-espresso',
                                icon: 3,
                                time: 1800,
                            });
                            game.nextStage();
                        }
                    }
    				var coord = this.coord;
    				if (!coord.offset) {　// Reach the middle.
    					if(typeof this.control.orientation!='undefined'){
    						if(map.get(coord.x+_DX[this.control.orientation],coord.y+_DY[this.control.orientation])){
    							this.orientation = this.control.orientation;
    						}
    					}
    					this.control = {};

                        var nextOrientation = [];
                        for (var i = 0; i < 4; i++) {
                            var val = map.get(coord.x + _DX[i], coord.y + _DY[i]);
                            if (val != 0 && Math.abs(i - this.orientation) != 2) {
                                nextOrientation.push(i);
                            }
                        }
                        // var randomIndex = Math.floor(Math.random() * nextOrientation.length);
                        randomIndex = 0;
                        if (nextOrientation.length > 1) {
                            randomIndex = _RANDOM_DIRECTION[_RANDOM_INDEX];
                            _RANDOM_INDEX = (_RANDOM_INDEX + 1) % _RANDOM_DIRECTION.length;
                        }
                        this.orientation = nextOrientation[randomIndex];
                        this.x += this.speed * _DX[this.orientation];
                        this.y += this.speed * _DY[this.orientation];
                        this.steps--;

                        if (this.steps < Math.floor(map.size / 2)) { // < instead of <=.
                            this.steps = 0;
                            var tempCurrentToken = _CURRENT_TOKEN;
                            var type = specialBuildings.get(coord.x, coord.y);
                            price = 2000;
                            level = 1;
                            for (var i = 0; i < buildingSet.length; i++) {
                                if (buildingSet[i].get(coord.x, coord.y)) {
                                    price = buildingSet[i].prices[coord.x][coord.y];
                                    level = buildingSet[i].get(coord.x, coord.y);
                                }
                            }

                            if (!isInit && type > 0 && type < 8) { // Walk in special buildings.
                                isProcessing = true;
                                switch(type) {
                                    case 1: // School
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + 1024);
                                    layer.msg("It is just A school, but " + _PLAYERS[tempCurrentToken].username + "earned some money somehow??? (+$1024)", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;

                                    case 2: // Restaurant
                                    // income[tempCurrentToken] = -2000;
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + 6666);
                                    layer.msg(_PLAYERS[tempCurrentToken].username + " did a good job in Primanti Bros Restaurant, WOW! (+$6666)", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;

                                    case 3: // Supermarket
                                    // income[tempCurrentToken] = -2000;
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-996));
                                    layer.msg(_PLAYERS[tempCurrentToken].username + " spent $996 in the Supermarket!", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;

                                    case 4: // Mall
                                    // income[tempCurrentToken] = -2000;
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-4396));
                                    layer.msg(_PLAYERS[tempCurrentToken].username + " spent $4396 in the mall!", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;

                                    case 5: // Gas station
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-666));
                                    layer.msg("Ahhh~ Need to refill some gas. $666", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;

                                    case 6: // Hospital
                                    // income[tempCurrentToken] = -5000;
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-10000));
                                    players[tempCurrentToken].stayDays = 3;
                                    layer.msg("Becuase of a terrible cold, " + _PLAYERS[tempCurrentToken].username + " need to stay for 3 days (Not implemented) and pay $10000!", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;

                                    case 7: // Bank
                                    layer.msg("Bank is not currently available.", {
                                        // skin: 'myskin',
                                        skin:'layer-ext-espresso',
                                        icon: 1,
                                        time: 1250,
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                    break;
                                    default:
                                    socket.send("6" + "##@##" + "0");
                                }

                                // socket.send("6" + "##@##" + "0");
                            } else if (!isInit && _OWNERS[coord.x][coord.y] < 0) {
                                isProcessing = true;
                                if (_MY_TOKEN == tempCurrentToken) {
                                    // isProcessing = true;
                                    layer.confirm('<p style="margin-bottom:18;text-align:center;font-size:25px;">Do you want to buy it for</p> <p style="margin:0;text-align:center;font-size:32px;">$' + price + '?</p>', {
                                        title: "This property is AVAILABLE!",
                                        skin: 'layer-ext-espresso',
                                        btn: ['Yes','No'], //
                                        area: ['500px'],
                                        cancel: function(){
                                            // isProcessing = false;
                                            socket.send("6" + "##@##" + "0");
                                        }
                                    }, function() {
                                        // console.log("cash = " + _PLAYERS[tempCurrentToken].cash + ",deposit = " + _PLAYERS[tempCurrentToken].deposit + ",total= " + (parseInt(_PLAYERS[tempCurrentToken].cash) + parseInt(_PLAYERS[tempCurrentToken].deposit)) + ",Price = " + price);
                                        if (parseInt(_PLAYERS[tempCurrentToken].cash) + parseInt(_PLAYERS[tempCurrentToken].deposit) >= parseInt(price)) {
                                            // income[tempCurrentToken] = -price;
                                            socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-price));
                                            socket.send("7" + "##@##" + coord.x + "##@##" + coord.y + "##@##" + level);
                                            layer.msg("This property is now belong to [" + _PLAYERS[tempCurrentToken].username + "]", {
                                                // skin: 'myskin',
                                                skin:'layer-ext-espresso',
                                                icon: 1,
                                                time: 1250,
                                            });
                                        } else {
                                            layer.msg("You don't have enough money!", {
                                                // skin: 'myskin',
                                                skin:'layer-ext-espresso',
                                                icon: 1,
                                                time: 1250,
                                            });
                                        }
                                        // isProcessing = false;
                                        socket.send("6" + "##@##" + "0");
                                    }, function() {
                                        // isProcessing = false;
                                        socket.send("6" + "##@##" + "0");
                                    });
                                }
                            } else if (!isInit && _OWNERS[coord.x][coord.y] == tempCurrentToken) {
                                isProcessing = true;
                                if (_MY_TOKEN == tempCurrentToken) {
                                    // isProcessing = true;
                                    var tempPrice = Math.floor(price * Math.pow(1.618, level));
                                    layer.confirm('<p style="margin-bottom:18;text-align:center;font-size:25px;">Do you want to Update it for</p> <p style="margin:0;text-align:center;font-size:32px;">$' + tempPrice + '?</p>', {
                                        // skin: 'myskin',
                                        title: "This property is belong to you.",
                                        skin: 'layer-ext-espresso',
                                        btn: ['Yes','No'], //
                                        area: ['500px'],
                                        cancel: function(){
                                            // isProcessing = false;
                                            socket.send("6" + "##@##" + "0");
                                        }
                                    }, function(){
                                        if (parseInt(_PLAYERS[tempCurrentToken].cash) + parseInt(_PLAYERS[tempCurrentToken].deposit) > tempPrice) {
                                            // income[tempCurrentToken] = -(price * Math.pow(2, level));
                                            socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-tempPrice));
                                            var level = 1;
                                            for (var ii = 0; ii < buildingSet.length; ii++) {
                                                if (buildingSet[ii].get(coord.x,coord.y)) {
                                                    level = Math.max(level, buildingSet[ii].get(coord.x,coord.y) + 1);
                                                    // buildingSet[i].set(coord.x,coord.y, level);
                                                }
                                            }
                                            socket.send("7" + "##@##" + coord.x + "##@##" + coord.y + "##@##" + level);
                                            layer.msg("You have updated this property to level: " + level, {
                                                // skin: 'myskin',
                                                skin:'layer-ext-espresso',
                                                icon: 1,
                                                time: 1250,
                                            });
                                            socket.send("6" + "##@##" + "0");
                                        } else {
                                            layer.msg("You don't have enough money!", {
                                                // skin: 'myskin',
                                                skin:'layer-ext-espresso',
                                                icon: 1,
                                                time: 1250,
                                            });
                                            socket.send("6" + "##@##" + "0");
                                        }
                                    }, function() {
                                        socket.send("6" + "##@##" + "0");
                                    });
                                }
                            } else if (!isInit) {
                                isProcessing = true;
                                var tempPrice = Math.floor(1.2 * price * Math.pow(1.688, level - 1));
                                layer.msg(_PLAYERS[tempCurrentToken].username + "'ve been charged by [" + _PLAYERS[_OWNERS[coord.x][coord.y]].username + "]" + 'for</p> <p style="margin:0;text-align:center;font-size:32;">$' + tempPrice + '</p>', {
                                    // skin: 'myskin',
                                    skin:'layer-ext-espresso',
                                    icon: 1,
                                    time: 1250,
                                });
                                if (_MY_TOKEN == tempCurrentToken) {
                                    // socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-(1.2 * price * Math.pow(2, level))));
                                    // socket.send("8" + "##@##" + owners[coord.x][coord.y].token + "##@##" + (1.2 * price * Math.pow(2, level)));
                                    socket.send("8" + "##@##" + tempCurrentToken + "##@##" + (-tempPrice));
                                    socket.send("8" + "##@##" + _OWNERS[coord.x][coord.y] + "##@##" + tempPrice);
                                }
                                socket.send("6" + "##@##" + "0");
                            }
                            socket.send("5" + "##@##" + "0");
                        } // END stoping
    				} else {
                        // Go util step got 0.
                        if (this.steps > 0) {
        					this.x += this.speed*_DX[this.orientation];
        					this.y += this.speed*_DY[this.orientation];
                            this.steps--;
                            if (this.steps == 0) {
                                if (coord.offset) {
                                    this.steps++;
                                }
                            }
                        } else {
                            // console.log("Stop at " + "[" + this.coord.x + ", " + this.coord.y + "]");
                        }
    				}
    			},
    			draw:function(context){
    				context.beginPath();
    				if(stage.status != 3){	// Normal state of the player
                        if (this.steps > 0) {
                            if (this.orientation) {
                                this.imageIndex[0] = (this.imageIndex[0] + 1) % 24;
                            } else {
                                this.imageIndex[0] = (this.imageIndex[0] + 1) % 24 + 24;
                            }
                            context.drawImage(characters[this.token][this.imageIndex[0]], 25, 25, 120-45, 160-45, this.x - map.size + 2, this.y - map.size + 2, map.size*2-2, map.size*2-2);
                        } else {
                            if (this.times % 2 == 0) {
                                if (this.orientation) {
                                    this.imageIndex[1] = (this.imageIndex[1] + 1) % 24;
                                } else {
                                    this.imageIndex[1] = (this.imageIndex[1] + 1) % 24 + 24;
                                }
                            }
                            context.drawImage(characterStanding[this.token][this.imageIndex[1]], 25, 25, 120-45, 160-45, this.x - map.size + 2, this.y - map.size + 2, map.size*2-2, map.size*2-2);
                        }
    				}else{	// Player is being consumed by NPC
    					if(stage.timeout) {
    						context.arc(this.x,this.y,this.width/2,(.5*this.orientation+1-.02*stage.timeout)*Math.PI,(.5*this.orientation-1+.02*stage.timeout)*Math.PI,false);
    					}
    				}
    				context.lineTo(this.x,this.y);
    				context.closePath();
    				context.fill();
    			}
    		});
            players.push(player);
        }
        // Scores
        stage.createItem({
			x:game.width - 200,
			y:225,
			frames:25,
            draw:function(context){
                for (var i = 0; i < players.length; i++) {
    				context.font = '24px Comic Sans MS';
    				context.textAlign = 'left';
    				context.textBaseline = 'center';
    				// context.fillStyle = '#09F';
                    context.fillStyle = game.colors[i];
                    context.fillText("Player" + (i + 1) + ": " + _PLAYERS[i].username, this.x, this.y + i * 100);
                    context.fillText("Cash: $" + _PLAYERS[i].cash, this.x, this.y + i * 100 + 25);
                    context.fillText("Deposit: $" + _PLAYERS[i].deposit, this.x, this.y + i * 100 + 50);
    				// context.fillText("Cash: $" + players[i].cash, this.x, this.y + i * 100 + 25);
                    // context.fillText("Deposit: $" + players[i].deposit, this.x, this.y + i * 100 + 50);
    			}
            }
		});
        // Copyright.
		stage.createItem({
            x:game.width - 12,
			y:game.height - 5,
			draw:function(context){
				context.font = '25px Helvetica';
				context.textAlign = 'right';
				context.textBaseline = 'bottom';
				context.fillStyle = '#AAA';
				context.fillText('© Team214',this.x,this.y);
			}
		});
    })();
    // The gameover page.
    (function() {
        var stage = game.createStage();
        // Name of the game.
		stage.createItem({
            x:game.width / 2,
			y:game.height * .2,
			draw:function(context){
				context.font = 'bold 42px Helvetica';
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = '#FFF';
				context.fillText('Result:',this.x,this.y - 100);
                for (var i = 0; i < 3; i++) {
                    context.font = '24px Comic Sans MS';
    				context.textAlign = 'left';
    				context.textBaseline = 'center';
    				// context.fillStyle = '#09F';
                    context.fillStyle = game.colors[i];
                    context.fillText("Player" + (i + 1) + ": " + _PLAYERS[i].username, this.x - 75, this.y + i * 100);
    				context.fillText("Cash: $" + _PLAYERS[i].cash, this.x - 75, this.y + i * 100 + 25);
                    context.fillText("Deposit: $" + _PLAYERS[i].deposit, this.x - 75, this.y + i * 100 + 50);
                }
			}
		});
		// Copyright.
		stage.createItem({
            x:game.width - 12,
			y:game.height - 5,
			draw:function(context){
				context.font = '25px Helvetica';
				context.textAlign = 'right';
				context.textBaseline = 'bottom';
				context.fillStyle = '#AAA';
				context.fillText('© Team214',this.x,this.y);
			}
		});
    })();
    game.init();


})();

function getEventPosition(ev){
    var x, y;
    if (ev.layerX || ev.layerX == 0) {
        x = ev.layerX;
        y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
        x = ev.offsetX;
        y = ev.offsetY;
    }
    return {x: x, y: y};
}

function insert(array, object) {
    var contains = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].username == object.username) {
            contains = true;
        }
    }
    if (!contains) {
        array.unshift(object);
    }
}

function insertUsername(array, username) {
    var contains = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == username) {
            contains = true;
        }
    }
    if (!contains) {
        array.unshift(username);
    }
}

function strcmp(a, b)
{
    return (a<b?-1:(a>b?1:0));
}

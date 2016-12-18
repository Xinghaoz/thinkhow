$(document).ready(function() {
	var width = 15,
		height = 9,
		token = 0,
		characters = [],
	 	startPositions = [[0, 0], [8, 9], [0, 14]],
		direction = [[1, 0], [0, 1], [-1, 0], [0, -1]], // Up, Right, Down, Left.
	 	grid = multiArray(width,height),
		validBlock = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		];

	initGrid();

	console.log(grid[0][0].classList);

	function Event(type, description) {
		this.type = type;
		this.description = description;
	}

	function Character(startPosition, currentDirection) {
		this.position = startPosition;
		this.currentDirection = currentDirection;
	}

	for (var i = 0; i < startPositions.length; i++) {
		characters.push(new Character(startPositions[i], direction[i]));
	}

	Character.prototype.grid = grid;
	Character.prototype.move = function(step) {
		// alert("Move " + step + " step");
		var moveAnimation = setInterval(frame, 250);
		// console.log(this.position);
		var position = this.position;
		var u = this;
		console.log(token);
		function frame() {
			if (step == 0) {
				clearInterval(moveAnimation);
				token = (token + 1) % 3;
				$("#dice_mask").remove();
				var randomGPA = (Math.random() * (0.25 + 0.25) - 0.25).toFixed(2);
				var randomWealth = Math.floor(Math.random() * (10000 + 10000) - 10000);
				var randomStrength = Math.floor(Math.random() * 10);

				if (randomGPA >= 0) {
					randomGPA = "+" + randomGPA;
				}

				if (randomWealth >= 0) {
					randomWealth = "+" + randomWealth;
				}

				layer.open({
					type: 1,
					title: 'Event',
					area: ['250px', '150px'],
					shadeClose: true, //
					content: '\<\div style="padding:20px;">GPA: ' + randomGPA +
							 ' \b Wealth: ' + randomWealth +
							 ' \b Strength: -' + randomStrength + '\<\/div>'
				});
			} else {
				step--;
				var x = u.position[0];
				var y = u.position[1];
				var className = "character" + token;
				$("." + className).removeClass(className);

				// Find next direction.
				var nextDirection = findNextDirection(x, y, u.currentDirection);
				u.currentDirection = nextDirection;

				x = x + nextDirection[0];
				y = y + nextDirection[1];
				u.position = [x, y];
				var previousClass = u.grid[x][y].className;
				u.grid[x][y].setAttribute("class", previousClass + " " + className);
			}
		}
	}

	var dice = $("#dice");
	dice.click(function(){
		$(".wrap").append("<div id='dice_mask'></div>"); // Add mask.
		dice.attr("class","dice"); // Clear the last result.
		dice.css('cursor','default');
		var step = Math.floor(Math.random() * 6 + 1); // generate random number between 1 ~ 6.
		dice.animate({left: '+2px'}, 100, function() {
			dice.addClass("dice_t");
		}).delay(200).animate({top:'-2px'}, 100, function() {
			dice.removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'}, 600, function() {
			dice.removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'}, 100, function() {
			dice.removeClass("dice_e").addClass("dice_" + step);
			dice.css('cursor','pointer');
			// $("#dice_mask").remove(); // Remove the mask.

			// Move the character.
			characters[token].move(step);
		});

	});

	function multiArray(m,n) {
		var arr =  new Array(n);
		for(var i=0; i<m; i++)
			arr[i] = new Array(m);
		return arr;
	}

	function initGrid() {
		var body = $("body");
		var table = document.createElement("table"),
			tbody = document.createElement("tbody");

		for (var i = 0; i < height; i++) {
			var col = document.createElement("tr");
			for(var j = 0; j < width; j++) {
				var row = document.createElement("td");
	            if (validBlock[i][j] == 0) {
	                row.setAttribute("class", "hidden-block");
	            }
				col.appendChild(row);
				grid[i][j] = row;
			}
			tbody.appendChild(col);
		}

		for (var i = 0; i < 3; i++) {
			var point = startPositions[i];
			grid[point[0]][point[1]].setAttribute("class", "character" + i);
		}

		table.appendChild(tbody);
		$("#snakeWrap").append(table);
	}

	function findNextDirection(x, y, currentDirection) {
		// [[0, 1], [1, 0], [0, -1], [-1, 0]] // Up, Right, Down, Left.
		var validDirection = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // Up, Right, Down, Left.
		var invalidDirection = [];

		reverseDirection = [-currentDirection[0], -currentDirection[1]];
		removeFromArray(validDirection, reverseDirection);

		for (var i = 0; i < validDirection.length; i++) {
			var nx = x + validDirection[i][0],
				ny = y + validDirection[i][1];
			if (nx < 0 || nx >= height || ny < 0 || ny >= width || validBlock[nx][ny] == 0) {
				invalidDirection.push(validDirection[i]);
			}
		}

		for (var i = 0; i < invalidDirection.length; i++) {
			removeFromArray(validDirection, invalidDirection[i]);
		}

		var randomIndex = Math.floor(Math.random() * validDirection.length);

		return validDirection[randomIndex];
	}

	function arraysEqual(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;

		for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
		}
		return true;
	}

	function removeFromArray(a, b) {
		var index = -1;

		for (var i = 0; i < a.length; i++) {
			if (arraysEqual(a[i],b)) {
				index = i;
			}
		}

		if (index != -1) {
			a.splice(index, 1);
		}

	}
});

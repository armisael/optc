angular.module('turtleApp')
	.directive('eventDay', [function () {
		return {
			restrict: 'AE',
			scope: {
				military: '=',
				index: '=',
				my_id: '=myId',
				my_time: '=myTime'
			},
			template: '<div><h2>{{date}}</h2><p>First time {{ttime1_format}}</p><p>Second time {{ttime2_format}}</p></div>',
			link: function (scope, elem, attrs) {
				var my_time = scope.my_time;
				var day_num = scope.index;

				scope.$watch('military', function(value) {
					update_times();
				});

				scope.$watch('my_id', function(value) {
					update_times();
				});

				function update_times() {
					var ttime1 = calc_time(scope.my_id, false);
					var ttime2 = calc_time(scope.my_id, true);

					scope.date = ttime1.format('MMMM Do, YYYY');
					scope.ttime1_format = print_time(ttime1, scope.military);
					scope.ttime2_format = print_time(ttime2, scope.military);
				}

				function calc_time(id, second_time) {
					var weekly_order = [0,1,2,3,4];
					var ttime = my_time.clone();
					var offset = day_num + my_time.isoWeek() + 2;
					offset = offset % 5;

					for (var i=0; i < offset; i++)
						weekly_order.unshift(weekly_order.pop());

					for (var i=0; i < day_num; i++) {
						ttime.add(1, 'day');
					}

					if (id>4)
						id -=5;

					// console.log(ttime.clone().local().format('YYYY-MM-dd HH:mm'));
					ttime.add(weekly_order[id]*2, 'hours');
					if (second_time)
						ttime.add(10,'hours');
					console.log('index = ', day_num);
					console.log(ttime.clone().local().format('YYYY-MM-dd HH:mm'));
					return ttime;
				}

				function print_time(date, military) {
					if (military)
						return date.format('HH:mm');
					return date.format('h:mm a');
				}
			}
		};
	}])
	.directive('selectOnClick', [function () {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				var focused;
				elem.on('click', function() {
					if (focused != this) {
						this.select();
						focused = this;
					}
				});
				elem.on('blur', function() {
					focused = null;
				});
			}
		};
	}]);
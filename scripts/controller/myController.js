define(['angular', 'app'], function(angular, app) {
    app.controller('myController', function($scope, $rootScope) {
        $scope.text = '';
        $rootScope.list = [];
        $scope.myKeyup = function(e) {
            var keycode = window.event ? e.keyCode : e.which;
            var newMessage = new Object;
            if (keycode == 13) {
                if (!$scope.text) {
                    alert("你还没有输入内容！");
                    return;
                }
                newMessage.text = $scope.text;
                newMessage.status = 'undo';
                newMessage.chk = false;
                $rootScope.list.push(newMessage);
                $scope.text = "";
            }
        }
        $scope.finish = function(message) {

            message.status = 'done';

        }
        $scope.delete = function(message) {
            $rootScope.list.splice($rootScope.list.indexOf(message), 1);
        }
        $scope.myVar = false;
        $scope.toggle = function() {
            $scope.myVar = !$scope.myVar;
        }
        $scope.all = false;
        $scope.check = function() {
            if ($rootScope.list.every(function(element, index, array) {
                    return (element.chk == true);
                })) {
                $scope.all = true;
            } else { $scope.all = false; }
        }
        $scope.chkAll = function() {

            for (var i = 0; i < $rootScope.list.length; i++) { $rootScope.list[i].chk = $scope.all; }
        }
        $scope.deleteMore = function() {
            if ($scope.all) {

                $rootScope.list = [];
            } else {
                var newList = [];
                $rootScope.list.map(function(value, index) {
                    if (!value.chk) {
                        newList.push(value);
                    }
                })
                $rootScope.list = newList;
            }
        }
        $scope.finishMore = function() {
            if ($scope.all) {
                for (var i = 0; i < $rootScope.list.length; i++) { $rootScope.list[i].status = 'Fixed'; }

            } else {
                $rootScope.list.map(function(value, index) {
                    if (value.chk) {
                        $rootScope.list[index].status = 'Fixed';
                    }
                })
            }
        }

    });
    app.filter('textFilter', function() {
        return function(list, val) {
            if (!val) return list;
            var arr = [];
            for (var i = 0; i < list.length; i++) {

                if (list[i].text.indexOf(val) != -1) {
                    arr.push(list[i]);
                }
            }
            return arr;
        }
    });

});

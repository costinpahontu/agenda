function AgendaController($scope) {
        $scope.list = [];
 
        $scope.add = function() {
        $scope.list.push($scope.newload +$scope.space+ $scope.nextload);
		$scope.space="  pentru ca ";
        $scope.newload = "";
		$scope.nextload = "";
        }
    }
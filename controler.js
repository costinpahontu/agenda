var uid = 1;


function ContactController($scope) {
    
    $scope.list = [
        {id:0, 'first': 'primul lucru  |||||', 'second':'urmat de '}
    ];
    
    $scope.saveList = function() {
        
        if($scope.newload.id == null) {
             $scope.newload.id = uid++;
             $scope.list.push($scope.newload);
        } else {
            
             for(i in $scope.list) {
                    if($scope.list[i].id == $scope.newload.id) {
                        $scope.list[i] = $scope.newload;
                    }
             }                
        }
        $scope.newload = {};
    }

    
    $scope.delete = function(id) {
        
        for(i in $scope.list) {
            if($scope.list[i].id == id) {
                $scope.list.splice(i,1);
                $scope.newload = {};
            }
        }
        
    }
    
    
    $scope.edit = function(id) {
        for(i in $scope.list) {
            if($scope.list[i].id == id) {
                $scope.newload = angular.copy($scope.list[i]);
            }
        }
    }
	
	
	
}
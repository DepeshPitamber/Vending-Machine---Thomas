
var app = angular.module("myVendingMachine", []);
app.controller('myCtrl', function($scope) {
    $scope.products =  [
        {"name": "Coca Cola", "amt": 12.55},
        {"name": "Chocolate", "amt": 16.00},
        {"name": "Energy Drink", "amt": 24.50},
        {"name": "Simba Chips", "amt": 8.50},
        {"name": "Peanuts", "amt": 14.50},
    ];

    $scope.Welcome_Msg = "Please select an product to purchase.";
    $scope.cashIn = 0;
    $scope.change_returned = 0;
    $scope.disable = true;
    $scope.error ="";

    $scope.checkoptions = function (choice) {
        var details = [];
        if ($scope.selectedProduct!=undefined) {
            $scope.msg = 'The cost of the selected product is R ' + $scope.selectedProduct + '. Please insert coins to purchase.';
            $scope.Welcome_Msg = "";
            $scope.error = "";
            $scope.cashIn = 0;
            $scope.change_returned = 0;
            $scope.disable = false;
        }
    };

    $scope.insertFive = function(){
        $scope.cashIn = $scope.cashIn + 5;
    };

    $scope.insertTwo = function(){
        $scope.cashIn = $scope.cashIn + 2;
    };

    $scope.insertOne = function(){
        $scope.cashIn = $scope.cashIn + 1;
    };

    $scope.insertFifty = function(){
        $scope.cashIn = $scope.cashIn + 0.5;
    };

    $scope.Purchase = function () {
        if ($scope.cashIn < $scope.selectedProduct){
            $scope.error = "You have inserted insufficient coins for this purchase.";
        }
        if ($scope.cashIn >= $scope.selectedProduct){
            $scope.change_returned = $scope.cashIn - $scope.selectedProduct;
            $scope.error = "Purchase Successful, Pick up your purchase and take your change";
            $scope.disable = true;
        }
    };

    $scope.Reset = function () {
        $scope.msg = "";
        $scope.selectedProduct = false;
        $scope.Welcome_Msg = "Please select an product to purchase.";
        $scope.cashIn = 0;
        $scope.change_returned = 0;
        $scope.error = "";
        $scope.disable = true;
    };
});

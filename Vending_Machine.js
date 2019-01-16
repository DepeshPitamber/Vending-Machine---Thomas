
var app = angular.module("myVendingMachine", []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("products.json")
        .then(function (response) {
            //First function handles success
            $scope.products = response.data.products;},
            function(response) {
            //Second function handles error
            $scope.Welcome_Msg = "Something went wrong";
        });


    $scope.Welcome_Msg = "Please select an product to purchase.";
    $scope.cashIn = 0;
    $scope.change_returned = 0;
    $scope.disable = true;
    $scope.error ="";

    $scope.checkoptions = function (choice) {
        var details = [];
        if ($scope.selectedProduct!=undefined) {
            // $scope.msg = 'The cost of the selected product is R ' + $scope.selectedProduct + '. Please insert coins to purchase.';
            $scope.Welcome_Msg = "";
            $scope.error = "";
            $scope.cashIn = 0;
            $scope.change_returned = 0;
            $scope.disable = false;
        }
    };

    $scope.insertCoin = function(Coin){
        $scope.cashIn = $scope.cashIn + Coin;
    };

    $scope.Purchase = function () {
        if ($scope.cashIn < $scope.selectedProduct){
            $scope.error = "You have inserted insufficient coins for this purchase.";
        }
        if ($scope.cashIn >= $scope.selectedProduct){
            $scope.change_returned = $scope.cashIn - $scope.selectedProduct;
            $scope.error = "Purchase Successful, Pick up your purchase and take your change";
        }
    };

    $scope.Reset = function () {
        // $scope.msg = "";
        $scope.selectedProduct = false;
        $scope.Welcome_Msg = "Please select an product to purchase.";
        $scope.cashIn = 0;
        $scope.change_returned = 0;
        $scope.error = "";
        $scope.disable = true;
    };

    $scope.addItem = function() {
        // $scope.products = [];
        $scope.products.push({
            name: $scope.itemName,
            amt: $scope.itemAmount
        });
        // Clear input fields after push
        $scope.itemAmount = "";
        $scope.itemName = "";
    };

    $scope.deleteItem = function(index){
        $scope.products.splice(index,1);
    };

});

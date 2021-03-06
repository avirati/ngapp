define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentCtrl', ['$scope', 'craftsvillaService', function ($scope,craftsvillaService) {
			window.scope = $scope;
			$scope.credit = {};
			// Repeat

			// Tabs
    	 	$scope.changeName = 'Cash On Delivery';
    	 	$scope.paymentMethods = [];
			$scope.changeSlide = function(value) {
				$scope.changeName = value;
				console.log($scope.changeName);
			}
			// Cash On Delivery
			$scope.cashOn = function() {
				alert("cashOn");
			}
			// Credit Card Pay
			$scope.submitCreditForm = function() {
				craftsvillaService.placeOrder({
					"pg":"CC",
					"bankcode":"VISA",
					"ccnum": $scope.credit.cardNumber,
					"ccname": $scope.credit.cardName,
					"ccvv": $scope.credit.cardCvv,
					"ccexpmon":$scope.credit.cardMonth,
					"ccexpyr": $scope.credit.cardYear
				})
				.success(function(data){
					console.log(data);
				})
				.error(function(err){
					console.log(err);
				})
			}
			// Debit Card
			$scope.debitCard = function() {
				$scope.pg = 'DC';
			}
			// Net Banking
			$scope.netBanking = function() {
				$scope.pg = 'NB';
			}
			// Pay U Money
			$scope.payUbtn = function() {
				alert("Pay U Money");
			}
			// Pay U Money
			$scope.getPayments = function() {
				craftsvillaService.getPaymentMethods()
				.success( function(response) {
					console.log(response);
					$scope.paymentMethods = response.d;
					console.log($scope.paymentMethods);
				})
				.error(function(err) {

				})
			}

			$scope.getOrderproducts = function() {
				craftsvillaService.assignAddressToQuote(3034030, 3034030)
				.success( function(response) {
					console.log(response);
					$scope.productDetails = response;
				})
				.error(function(err) {
					console.log(err);

				})
			}

			$scope.initPayment = function() {
				console.log("initializing Payment");
				$scope.getPayments();
				$scope.getOrderproducts();
			}

			$scope.initPayment();

    }]);
});

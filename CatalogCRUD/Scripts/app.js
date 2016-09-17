(function () {
    'use strict';

    //create angularjs controller
    var app = angular.module('app', []);//set and get the angular module
    app.controller('productController', ['$scope', '$http', productController]);

    //angularjs controller method
    function productController($scope, $http) {

        //declare variable for mainain ajax load and entry or edit mode
        $scope.loading = true;
        $scope.addMode = false;
        $scope.addModeCategory = false; // my

        //get all customer information
        $http.get('/api/Products/').success(function (data) {
            $scope.products = data;
            $scope.loading = false;
        })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });

        //by pressing toggleEdit button ng-click in html, this method will be hit
        $scope.toggleEdit = function () {
            this.product.editMode = !this.product.editMode;
        };

        $scope.toggleAddCategory = function () {  //my
            $scope.addModeCategory = !$scope.addModeCategory;
        };

        //by pressing toggleAdd button ng-click in html, this method will be hit
        $scope.toggleAdd = function () {
            $scope.addMode = !$scope.addMode;
        };

        //Добавление товара
        //$scope.add = function () {
        //    $scope.loading = true;
        //    $http.post('/api/Products/', this.newproduct).success(function (data) {
        //        alert("Товар добавлен!");
        //        $scope.addMode = false;
        //        $scope.products.push(data);
        //        $scope.loading = false;
        //    }).error(function (data) {
        //        $scope.error = "Произошла ошибка при добавлении товара!" + data;
        //        $scope.loading = false;
        //    });
        //};

        //Добавление категории
        $scope.addCategory = function () {
            $scope.loading = true;
            $http.post('/api/Categories/', this.newcategory).success(function (data) {
                alert("Категория добавлена!");
                $scope.addModeCategory = false;
                //$scope.products.push(data); // delete?
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "Произошла ошибка при добавлении категории!" + data;
                $scope.loading = false;
            });
        };

        //Редактирование товара
        $scope.save = function () {
            alert("Сохранить?");
            $scope.loading = true;
            var frien = this.product;
            alert(frien);
            $http.put('/api/products/' + frien.Id, frien).success(function (data) {
                alert("Данные товара изменены!");
                $scope.products.push(data);
                frien.editMode = false;
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "Произошла ошибка при сохранении товара!" + data;
                $scope.loading = false;
            });
        };

        //Удаление товара
        $scope.deleteProduct = function () {
            $scope.products.splice(this.$index, 1);
            $scope.loading = true;
            var Id = this.product.Id;
            $http.delete('/api/products/' + Id).success(function (data) {
            alert("Товар удален!");
            $scope.loading = false;
            }).error(function (data) {
                $scope.error = "Произошла ошибка при удалении товара!" + data;
                $scope.loading = false;
            });
        };

        //Добавление товара по новому с фото
        $scope.add = function (file, description) {
            var formData = new FormData();
            formData.append("file", file);
            formData.append("description", description);
            var defer = $q.defer();
            $scope.loading = true;
            $http.post('/api/Products/', formData,
            {
                withCredentials: true,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            }).success(function (data) {
                defer.resolve(data);
                alert("Товар добавлен!");
                $scope.addMode = false;
                $scope.products.push(data);
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "Произошла ошибка при добавлении товара!" + data;
                $scope.loading = false;
            });
        };




    }
})();
frontApp.controller("categoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categoryProducts = [];
    $scope.products = [];
    $scope.idCategoryProduct = angular.element('#idCategoryProduct').val();
    $scope.product = {};
    $scope.id;
    $scope.spNoiBats = [];
    $scope.remVais = [];
    $scope.remCuons = [];
    $scope.remSaos = [];
    $scope.remChucNangs = [];
    $scope.remKhacs = [];
    $scope.chanGas = [];

    $scope.remVaiProducts = [];
    $scope.remCuonProducts = [];
    $scope.remSaoProducts = [];
    $scope.remChucNangProducts = [];
    $scope.remKhacProducts = [];
    $scope.chanGaProducts = [];

    //Lấy tất cả danh mục
    //$http.get('/API/CategoryProductsAPI/')
    //    .success(function (data) {
    //        var categoryProducts = CategoryProduct.getallCategoryProduct(data);
    //        angular.forEach(categoryProducts, function (value, key) {
    //            if (value.idCategoryParent == '1') {
    //                $scope.categoryProducts.push(value);
    //            }
    //        });
    //    })

    $http.get('/API/CategoryProductsAPI/')
        .success(function (data) {
            angular.forEach(CategoryProduct.getallCategory(data), function (value, key) {
                if (value.idCategoryParent == 1) {
                    $scope.categoryProducts.push(value);
                }

                if (value.idCategoryParent == 2) {
                    $scope.remVaiProducts.push(value);
                }

                if (value.idCategoryParent == 3) {
                    $scope.remCuonProducts.push(value);
                }

                if (value.idCategoryParent == 4) {
                    $scope.remSaoProducts.push(value);
                }

                if (value.idCategoryParent == 5) {
                    $scope.remChucNangProducts.push(value);
                }

                if (value.idCategoryParent == 6) {
                    $scope.remKhacProducts.push(value);
                }

                if (value.idCategoryParent == 25) {
                    $scope.chanGaProducts.push(value);
                }
            });
        })




    //Xem sản phẩm
    $scope.show = function (id) {
        $scope.id = id;
        $http.get('/API/ProductsAPI/' + id)
       .success(function (data) {
           $scope.product = data;
       });
    }

    //Sản phẩm trong danh mục con
    $http.get('/API/ProductsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == $scope.idCategoryProduct) {
                    $scope.products.push(value);
                }

                //Sản phẩm nổi bật
                if (value.feature == '1') {
                    $scope.spNoiBats.push(value);
                }

                //Rèm vải
                if (value.feature == '1' && (value.idCategoryProduct == 2 || value.idCategoryProduct == 7 || value.idCategoryProduct == 8)) {
                    $scope.remVais.push(value);
                }

                //Rèm cuốn
                if (value.feature == '1' && (value.idCategoryProduct == 3 || value.idCategoryProduct == 9 || value.idCategoryProduct == 10 || value.idCategoryProduct == 11 || value.idCategoryProduct == 12 || value.idCategoryProduct == 13)) {
                    $scope.remCuons.push(value);
                }

                //Rèm sáo
                if (value.feature == '1' && (value.idCategoryProduct == 4 || value.idCategoryProduct == 14 || value.idCategoryProduct == 15)) {
                    $scope.remSaos.push(value);
                }

                //Rèm chức năng
                if (value.feature == '1' && (value.idCategoryProduct == 5 || value.idCategoryProduct == 16 || value.idCategoryProduct == 17 || value.idCategoryProduct == 18)) {
                    $scope.remChucNangs.push(value);
                }

                //Rèm khác
                if (value.feature == '1' && (value.idCategoryProduct == 6 || value.idCategoryProduct == 19 || value.idCategoryProduct == 20 || value.idCategoryProduct == 21 || value.idCategoryProduct == 22 || value.idCategoryProduct == 23 || value.idCategoryProduct == 24)) {
                    $scope.remKhacs.push(value);
                }

                //Chăn ga
                if (value.feature == '1' && (value.idCategoryProduct == 25 || value.idCategoryProduct == 26 || value.idCategoryProduct == 27)) {
                    $scope.chanGas.push(value);
                }
            });
        });
}]);
frontApp.controller("categoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categoryPosts = [];
    $scope.posts = [];
    $scope.idCategory = angular.element('#idCategory').val();
    $scope.huongDans = [];
    $scope.baiVietTops = [];
    $scope.tuVans = [];
    $scope.congTrinhNoiBats = [];
    $scope.tinTucs = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoriesAPI/')
        .success(function (data) {
            var categories = CategoryPost.getallCategory(data);
            angular.forEach(categories, function (value, key) {
                if (value.idCategoryParent == '1') {
                    $scope.categoryPosts.push(value);
                }
            });
        })

    //bài viết trong danh mục con
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == $scope.idCategory) {
                    $scope.posts.push(value);
                }

                //Bài viết lên top
            if (value.featured == 1 && value.idCategory == 2) {
                $scope.baiVietTops.push(value);
            }

            //Hướng dẫn
            if (value.idCategory == 2) {
                $scope.huongDans.push(value);
            }

            //Tư vấn
            if (value.idCategory == 3) {
                $scope.tuVans.push(value);
            }

            //Công trình nổi bật
            if (value.idCategory == 4) {
                $scope.congTrinhNoiBats.push(value);
            }

            //Tin tức
            if (value.idCategory == 5) {
                $scope.tinTucs.push(value);
            }
            });
        });
}]);
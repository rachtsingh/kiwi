function BlockCtrl($scope) {
  chrome.storage.sync.get('urls', function(urls) {
    if(Object.keys(urls).length === 0) {
        chrome.storage.sync.set({
            'urls': [{value:'facebook.com', time:50},
    {value:'reddit.com', time: 50}]
        });
        $scope.urls = [{value:'facebook.com', time: 50},
    {value:'reddit.com', time:50}];
        $scope.$apply();
    } else {
        $scope.urls = urls.urls;
        $scope.$apply();
    }
    //console.log(urls);
  });

  $scope.urls = [{value:'facebook.com'},
    {value:'reddit.com'}];
 
  $scope.save = function() {
    jsondump = $scope.urls;
    chrome.storage.sync.set({
        'urls': jsondump
    });
  };

  $scope.append = function() {
    $scope.urls.push({value: 'example.com', time: 50});
    console.log($scope.urls);
    //$scope.$apply();
  }

  $scope.del = function(url){
    $scope.urls.splice($scope.urls.indexOf(url), 1);
    //$scope.$apply();
  }
}
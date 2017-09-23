define(['jquery'],function($){
  return{
    qs : function(key){
      var url = location.search.substr(1);
      var result = null;
      if(url){
        var ps = url.split('&')
        $.each(ps,function(index,item) {
         var k = item.split('=');
        if(k[0] == key){
          result = k[1]
          return false;
        }
        }); 
      }
      return result;
    }
  }
})
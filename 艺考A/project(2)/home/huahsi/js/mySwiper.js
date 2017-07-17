angular.module("mySwiper",[]).controller("myCon",function($scope){
	//swiper
		/*setTimeout(function(){
			$scope.mySwiper=new Swiper(".swiper-container",{
			loop:true,//重复播放

			autoplay:1000,//自动轮播

			autoplayDisableOnInteraction:false,//操作之后继续播放

			speed:500,

			pagination: '.swiper-pagination',//分页器（小圆点）

			paginationClickable:true,//点击小圆点
			})
		})*/
		
		$(".mj_dj").click(function(){
			window.location.href="xingXing.html";
		})
})
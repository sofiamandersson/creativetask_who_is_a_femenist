			window.onload = function (){ Alert.render("<p>My name is Sofia Andersson and this is my Creative Task for applying to Hyper Island in 2015.</p><p>I wanted to raise the matter of stereotypes regarding the followers to the feminist movement. This site is developed for a persona who would like to describe themselves as a feminist but not dare to because of uncertainties about the significance. Hopefully the site, in some regards, solve the matter or enlightens the visitor about what beeing a feminist acctually menas.</p><p>All info derives form the folowing sources; <em>Lean In - Women, Work, and the Will to Lead</em> by Sheryl Sandberg, <em>Feminism</em> by Lena Gemzöe.</p><p>The site contains HTML, CSS, some JavaScript and jQuery and the images are SVG files. Hope you enjoy, because I’ve truly enjoyed developing the site!</p>");}
			
			
			function CustomAlert (){
				
				this.render = function(di){
					var winW = window.innerWidth;
					var winH = window.innerHeight;
					var dioverlay = document.getElementById ('dioverlay');
					var dibox = document.getElementById('dibox');
					dioverlay.style.display = "block";
					dioverlay.style.height = winH+"px";
					dibox.style.left = (winW/2) - (650 * 0.5)+"px";
					dibox.style.top = "70px";
					dibox.style.display = "block";
					document.getElementById('diboxhead').innerHTML = "OH HI!";
					document.getElementById('diboxbody').innerHTML = di;
					document.getElementById('diboxfoot').innerHTML = '<button onclick="Alert.ok();fade();">Let\'s see more!</button>';
				}
				
				this.ok = function (){
					document.getElementById('dibox').style.display = "none";
					document.getElementById('dioverlay').style.display = "none";
				}
				
			}
			
			var Alert = new CustomAlert();
			
				
			function showAnswer1() {
				document.getElementById('answer1').style.visibility = "visible";
			};
			
			
			function showAnswer2() {
				document.getElementById('answer2').style.visibility = "visible";
			};
			
			
			
			function fade() {
				var elem = document.getElementById('fade1');
				fade1.style.transition = "opacity 1s linear 0.3s";
				fade1.style.opacity = 1;
				var elem = document.getElementById('fade2');
				fade2.style.transition = "opacity 1s linear 0.9s";
				fade2.style.opacity = 1;
				var elem = document.getElementById('fade3');
				fade3.style.transition = "opacity 1s linear 1.5s";
				fade3.style.opacity = 1;
				var elem = document.getElementById('fade4');
				fade4.style.transition = "opacity 1s linear 2.1s";
				fade4.style.opacity = 1;
				var elem = document.getElementById('fade5');
				fade5.style.transition = "opacity 1s linear 2.7s";
				fade5.style.opacity = 1;
			};
			
			
			function yHandler () {
				var contentHeight = wrap.offsetHeight;
				var yOffset = window.pageYOffset;
				var y = yOffset + window.innerHeight;
				if(y >= contentHeight){
					var elem = document.getElementById('fade6');
					fade6.style.transition = "opacity 1s linear 0.3s";
					fade6.style.opacity = 1;
					var elem = document.getElementById('fade7');
					fade7.style.transition = "opacity 1s linear 0.9s";
					fade7.style.opacity = 1;
					var elem = document.getElementById('fade8');
					fade8.style.transition = "opacity 1s linear 1.5s";
					fade8.style.opacity = 1;
					var elem = document.getElementById('fade9');
					fade9.style.transition = "opacity 1s linear 2.1s";
					fade9.style.opacity = 1;
					var elem = document.getElementById('fade10');
					fade10.style.transition = "opacity 1s linear 2.7s";
					fade10.style.opacity = 1;
				}
			}
			
			window.onscroll = yHandler;
			
	$(document).ready(function () {
			
			
			var showYO1 = $("#hideopp1").offset().top;
			var showYO2 = $("#hideopp2").offset().top;
			$(window).scroll(function () {
				if ($(window).scrollTop() > showYO1 && $(window).scrollTop() < showYO2) {
					$("#yopp1").show();
				} else {
					$("#yopp1").hide();
				}
			});
			
			
			var showYO3 = $("#hideopp3").offset().top;
			var showYO4 = $("#hideopp4").offset().top;
			$(window).scroll(function () {
				if ($(window).scrollTop() > showYO3 && $(window).scrollTop() < showYO4) {
					$("#yopp2").show();
				} else {
					$("#yopp2").hide();
				}
			});
			
			var showYO5 = $("#hideopp5").offset().top;
			var showYO6 = $("#hideopp6").offset().top;
			$(window).scroll(function () {
				if ($(window).scrollTop() > showYO5 && $(window).scrollTop() < showYO6) {
					$("#yopp3").show();
				} else {
					$("#yopp3").hide();
				}
			});
			
			var showYO7 = $("#hideopp7").offset().top;
			var showYO8 = $("#hideopp8").offset().top;
			$(window).scroll(function () {
				if ($(window).scrollTop() > showYO7 && $(window).scrollTop() < showYO8) {
					$("#yopp4").show();
				} else {
					$("#yopp4").hide();
				}
			});
			
			
			
			$("#readmore1").click(function() {
				$("#more1").slideToggle(200);
				$("#readmore1").fadeOut(100);
			
			});
			
			$("#readmore2").click(function() {
				$("#more2").slideToggle(200);
				$("#readmore2").fadeOut(100);
			
			});	
			
			$("#readmore3").click(function() {
				$("#more3").slideToggle(200);
				$("#readmore3").fadeOut(100);
			
			});	
			
			
	});
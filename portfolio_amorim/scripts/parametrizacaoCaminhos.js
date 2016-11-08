'use strict';

var Curva = function (caminhos) {
	var self = this;

	this.paths = Array();
	
	this.setPath = function (x, y) {
		this.paths.push([x, y]);
	};
	this.getLength = function () {
		var length = 0;
		for (var i = 0; i < self.paths.length - 1; i++){
			length += pointDistance(self.paths[i], self.paths[i+1]);
		}
		return length;
	};
	this.getRelativePosition = function (relativeDistance) {
		var length = 0;
		var result = [0, 0]
		for (var i = 0; i < self.paths.length - 1; i++){
			var pointRelativePosition = length/self.getLength();
			var nextPointRelativePosition = (length + pointDistance(self.paths[i], self.paths[i+1]))/self.getLength();
			if (nextPointRelativePosition >= relativeDistance){
				result[0] = self.paths[i][0] + (self.paths[i+1][0] - self.paths[i][0]) * ((relativeDistance - pointRelativePosition)/(nextPointRelativePosition - pointRelativePosition));
				result[1] = self.paths[i][1] + (self.paths[i+1][1] - self.paths[i][1]) * ((relativeDistance - pointRelativePosition)/(nextPointRelativePosition - pointRelativePosition));
				break;
			}
			else{
				length += pointDistance(self.paths[i], self.paths[i+1]);
			}
		}
		return result;
	}

	switch(caminhos){
		case 1: 
			self.setPath($("#img01").offset().left+ $("#img01").width()+ 50, $("#img01").offset().top + ($("#img01").height()/2));
			self.setPath($("#img02").offset().left -50, $("#img02").offset().top + ($("#img02").height()/2));
			break;
		case 2: 
			self.setPath($("#infoParag2").offset().left+($("#infoParag2").width()/2), $("#infoParag2").offset().top+$("#infoParag2").height()+20);
			self.setPath($("#infoParag2").offset().left+($("#infoParag2").width()/2), $("#img03").offset().top + ($("#img03").height()/2));
			self.setPath($("#img03").offset().left+ $("#img03").width()+ 50, $("#img03").offset().top + ($("#img03").height()/2));
			break;
		case 3: 
			self.setPath($("#img03").offset().left-50, $("#img03").offset().top + ($("#img03").height()/2));
			self.setPath($("#img04").offset().left+($("#img04").width()/2), $("#img03").offset().top + ($("#img03").height()/2));
			self.setPath($("#img04").offset().left+($("#img04").width()/2), $("#img04").offset().top-50);
			break;
		case 4: 
			self.setPath($("#img04").offset().left+ $("#img04").width()+ 50, $("#img04").offset().top + ($("#img04").height()/2));
			self.setPath($("#img05").offset().left -50, $("#img05").offset().top + ($("#img05").height()/2));
			break;
		case 5: 
			self.setPath($("#infoParag5").offset().left+($("#infoParag5").width()/2), $("#infoParag5").offset().top+$("#infoParag5").height()+20);
			self.setPath($("#img07").offset().left+($("#img07").width()/2), $("#img07").offset().top-25);
			
			break;
		case 6: 
			self.setPath($("#img06").offset().left+ $("#img06").width()+ 50, $("#img06").offset().top + ($("#img06").height()/2));
			self.setPath($("#img07").offset().left -50, $("#img07").offset().top + ($("#img07").height()/2));
			break;
		case 7: 
			self.setPath($("#infoParag6").offset().left+($("#infoParag6").width()/2), $("#infoParag6").offset().top + ($("#infoParag6").height()+25));
			self.setPath($("#infoParag6").offset().left+($("#infoParag6").width()/2), $("#img08").offset().top + ($("#img08").height()/2));
			self.setPath($("#img08").offset().left-50, $("#img08").offset().top + ($("#img08").height()/2));
			break;
		//Inicio Modo Desktop
		case 8: 
			self.setPath($("#img02").offset().left+($("#img02").width())+25, $("#img02").offset().top+($("#img02").height()/2));
			self.setPath($("#img02").offset().left+($("#img02").width())+125, $("#img02").offset().top+($("#img02").height()/2));
			self.setPath($("#img02").offset().left+($("#img02").width())+125,  $("#img03").offset().top + ($("#img03").height()/2));
			//self.setPath($("#infoParag2").offset().left+($("#infoParag2").width()/2), $("#img03").offset().top + ($("#img03").height()/2));
			self.setPath($("#img03").offset().left+ $("#img03").width()+ 50, $("#img03").offset().top + ($("#img03").height()/2));
			break;
		case 9: 
			self.setPath($("#img03").offset().left-50, $("#img03").offset().top + ($("#img03").height()/2));
			self.setPath($("#img04").offset().left-100, $("#img03").offset().top + ($("#img03").height()/2));
			self.setPath($("#img04").offset().left-100, $("#img04").offset().top + ($("#img04").height()/2));
			self.setPath($("#img04").offset().left-20, $("#img04").offset().top + ($("#img04").height()/2));
			break;
		case 10: 
				self.setPath($("#img05").offset().left+$("#img05").width()+20, $("#img05").offset().top+($("#img05").height()/2));
				self.setPath($("#img05").offset().left+$("#img05").width()+100, $("#img05").offset().top+($("#img05").height()/2));
				self.setPath($("#img05").offset().left+$("#img05").width()+100, $("#img07").offset().top+($("#img07").height()/2));
				self.setPath($("#img07").offset().left+$("#img07").width()+20, $("#img07").offset().top+($("#img07").height()/2));
				//self.setPath($("#img07").offset().left+($("#img07").width()/2), $("#img07").offset().top-25);
			break;
		case 11: 
			 
			break;
		default:
			break;
	}
}

function pointDistance (p1, p2) {
	return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}



function Punto(x,y){
    this.x = x;
    this.y = y;
    this.getX = function (){
    	return this.x;
    } 
    this.getY= function (){
    	return this.y;
    }
    this.getDistance = function (punto){
       var diffX=punto.getX() - this.getX();
       var diffY=punto.getY() - this.getY();
       var num = Math.pow(diffX,2) + Math.pow(diffY,2);
       return Math.sqrt(num);
    }
}

function Triangolo(p1,p2,p3){
	this.getPerimeter = function (){
		return (p1.getDistance(p2) + p2.getDistance(p3) + p3.getDistance(p1));
	}
	this.getArea = function (){
		var semip = this.getPerimeter()/2;

		return Math.sqrt(semip*(semip-p1.getDistance(p2))*(semip-p2.getDistance(p3))*(semip- p3.getDistance(p1)));
	}
}
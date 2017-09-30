$(document).ready(function() {
	'use strict';
	console.log('main.js loaded');
	
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	
	let c;
	let k=0;
    for(let i=1; i<=8;i++){
		c=Shape.Circle(50+k,50+k,50);
		k+=50;
		c.fillColor ='green';
		
		
	}
	paper.view.draw();

	
	
});
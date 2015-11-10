//This is the proportion of grades (A:Green, B:Blue, C:Red) between boroughs as they grow continuously. This is to give a better sense of scale between the grades.
//If they are zero, they just shrink until they disappear
//Noses: Bronx = white, Manhattan = blue, Brooklyn = red, Queens = green, StatenIsland = black
//https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000
//references: Daniel Shiffman's series on p5.js with JSON
var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
var gradecbronx = 0;
var gradebbronx = 0;
var gradeabronx = 0;
var gradeaman = 0;
var gradebman = 0;
var gradecman = 0;
var gradeabrok = 0;
var gradebbrok = 0;
var gradecbrok = 0;
var gradeaq = 0;
var gradebq = 0;
var gradecq = 0;
var gradeasi = 0;
var gradebsi = 0;
var gradecsi = 0;
//grade_ is the grade and gradea_ is the borough (bronx(obvious), man(hattan), brok(brooklyn), q(ueens), si(staten island))
function preload(){
	getRats();
}

function setup(){
	createCanvas(1000,800);
	frameRate(1);
}

function draw(){
//the bigger the circle, the more there is of that grade
//Green = A, Blue = B, Red = C
	borough();
	background(0);
	
stroke(0);
   //Manhattan Mickey
   fill(0,255,0);
   ellipse(500, 300, 100 + gradeaman, 100 + gradeaman); //main
    //Brooklyn Mickey
   fill(0,255,0);
   ellipse(800, 300, 100 + gradeabrok, 100 + gradeabrok); //main
   //Manhattan Mickey Ears (Layered Up)
      fill(255,0,0);
      ellipse(450, 250, 50 + gradecman, 50 + gradecman); //left ear
      fill(0,0,255);
   ellipse(550, 250, 50 + gradebman, 50 + gradebman); //right ear
   fill(255,0,0);
      ellipse(750, 250, 50 + gradecbrok, 50 + gradecbrok); //left ear
      fill(0,0,255);
   ellipse(850, 250, 50 + gradebbrok, 50 + gradebbrok); //right ear
	//Bronx Mickey
   fill(0,255,0);
   ellipse(200, 300, 100 + gradeabronx, 100 + gradeabronx); //main
   fill(255,0,0);
      ellipse(150, 250, 50 + gradecbronx, 50 + gradecbronx); //left ear
      fill(0,0,255);
   ellipse(250, 250, 50 + gradebbronx, 50 + gradebbronx); //right ear
   //Queens Mickey
   fill(0,255,0);
   ellipse(400, 600, 100 + gradeaq, 100 + gradeaq); //main
   fill(255,0,0);
      ellipse(350, 550, 50 + gradecq, 50 + gradecq); //left ear
      fill(0,0,255);
   ellipse(450, 550, 50 + gradebq, 50 + gradebq); //right ear
  	//Staten Island Mickey
  	fill(0,255,0);
   ellipse(700, 600, 100 + gradeasi, 100 + gradeasi); //main
   fill(255,0,0);
      ellipse(650, 550, 50 + gradecsi, 50 + gradecsi); //left ear
      fill(0,0,255);
   ellipse(750, 550, 50 + gradebsi, 50 + gradebsi); //right ear
   	  fill(0);
   ellipse(700,600,20,20);//nose
      fill(0,255,0);
   ellipse(400,600,20,20);//nose
      fill(255,0,0);
   ellipse(800,300,20,20); //nose
      fill(0,0,255);
   ellipse(500,300,20,20);//nose
      fill(255);
   ellipse(200,300,20,20);//nose
}
function borough(){
	//this is going through the data to find the grades in each borough and change the size of the Mickey heads in function draw
	for(var i = 0; i < rats.length; i++){
		if(rats[i].grade == "C" && rats[i].boro == "BRONX"){
			gradecbronx + 1;
					gradecbronx = gradecbronx - 1;
		}//if
		if(rats[i].grade == "B" && rats[i].boro == "BRONX"){
			gradebbronx + 1;
					gradebbronx = gradebbronx - 1;
		}//if
		if(rats[i].grade == "A" && rats[i].boro == "BRONX"){
			gradeabronx + 1;
					gradeabronx = gradeabronx - 1;
		}//if
		if(rats[i].grade == "C" && rats[i].boro == "MANHATTAN"){
			gradecman + 1;	
					gradecman = gradecman - 1;
		}
		if(rats[i].grade == "B" && rats[i].boro == "MANHATTAN"){
			gradebman + 1;
					gradebman = gradebman - 1;
		}
		if(rats[i].grade == "A" && rats[i].boro == "MANHATTAN"){
			gradeaman + 1;
					gradeaman = gradeaman - 1;
		}
		if(rats[i].grade == "C" && rats[i].boro == "BROOKLYN"){
			gradecbrok + 1;
					gradecbrok = gradecbrok - 1;
		}
		if(rats[i].grade == "B" && rats[i].boro == "BROOKLYN"){
			gradebbrok + 1;
					gradebbrok = gradebbrok - 1;
		}
		if(rats[i].grade == "A" && rats[i].boro == "BROOKLYN"){
			gradeabrok + 1;
					gradeabrok = gradeabrok - 1;
		}
		if(rats[i].grade == "C" && rats[i].boro == "QUEENS"){
			gradecq + 1;
					gradecq = gradecq - 1;
		}
		if(rats[i].grade == "B" && rats[i].boro == "QUEENS"){
			gradebq + 1;
					gradebq = gradebq - 1;
		}
		if(rats[i].grade == "A" && rats[i].boro == "QUEENS"){
			gradeaq + 1;
					gradeaq = gradeaq - 1;
		}
		if(rats[i].grade == "C" && rats[i].boro == "STATEN ISLAND"){
			gradecsi + 1;
					gradecsi = gradecsi - 1;
		}
		if(rats[i].grade == "B" && rats[i].boro == "STATEN ISLAND"){
			gradebsi + 1;
					gradebsi = gradebsi - 1;
		}
		if(rats[i].grade == "A" && rats[i].boro == "STATEN ISLAND"){
			gradeasi + 1;
					gradeasi = gradeasi - 1;
		}
	}//for loop that goes through the function for the grades
	limiter();//puts a limit on the shape's growth
}//borough

function limiter(){
	if(gradeasi >= 100){
		gradeasi = gradeasi - 1;
	}
	if(gradeasi >= 100){
		gradebsi = gradebsi - 1;
	}
	if(gradeasi >= 100){
		gradecsi = gradecsi - 1;
	}
	if(gradeaq >= 100){
		gradeaq = gradeaq - 1;
	}
	if(gradebq >= 100){
		gradebq = gradebq - 1;
	}
	if(gradecq >= 100){
		gradecq = gradecq - 1;
	}
	if(gradeabrok >= 100){
		gradeabrok = gradeabrok - 1;
	}
	if(gradebbrok >= 100){
		gradebbrok = gradebbrok - 1;
	}
	if(gradecbrok >= 100){
		gradecbrok = gradecbrok - 1;
	}
	if(gradeaman >= 100){
		gradeaman = gradeaman - 1;
	}
	if(gradebman >= 100){
		gradebman = gradebman - 1;
	}
	if(gradecman >= 100){
		gradecman = gradecman - 1;
	}
	if(gradeabronx >= 100){
		gradeabronx = gradeabronx - 1;
	}
	if(gradebbronx >= 100){
		gradebbronx = gradebbronx - 1;
	}
	if(gradecbronx >= 100){
		gradecbronx = gradecbronx - 1;
	}
}
// this is gonna grab the NYC open data stuff
function getRats(){

	 // this will download the city open data on the health violations:
  rats = loadJSON(ratsUrl, ratsDownloaded); // asynchronous API call

}

function ratsDownloaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}
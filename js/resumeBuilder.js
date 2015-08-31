/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var awesomeThoughts = "I am Kevin and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(funThoughts);

 // $("#header").append()

var bio = {
	"name" : "Kevin Kipp",
	"role" : "Alright Guy",
	"bioPic" : "http://i.imgur.com/Yd4YmUN.jpg",
	"welcomeMessage" : "Hi there! So glad you're here!",
	"skills" : [
		"Awesomeness",
		"Guitar",
		"BBQ",
		"JS",
		"SQL",
		"Python",
		"Vagrant",
		"Linux",
		"Salesforce"
		],
	"contacts" : {
		"mobile" : "512.998.4914",
		"email" : "kevin.kipp@gmail.com",
		"github" : "third774",
		"twitter" : "@kevin_kipp",
		"location" : "Austin, TX"
	}
};

var education = {
    "Schools" : [
        {
            "name" : "DeVry University",
            "location" : "Fremont, CA",
            "dates" : "2003-2004",
            "degree" : "None",
            "majors" : [
            	"Computer Science",
            	"Electronics Engineering"
            ],
            "url" : "http://www.devry.edu/"
        },
        {
            "name" : "Mt. Whitney High School",
            "location" : "Visalia, CA",
            "dates" : "1999-2003",
            "degree" : "GED",
            "majors" : [
            	"N/A"
            ],
            "url" : "http://www.vusd.org/MtWhitney.cfm"
        },
        {
            "name" : "Udacity",
            "location" : "Mountainview, CA",
            "dates" : "2014-2015",
            "degree" : "None",
            "majors" : [
            	"Web Development"
            ],
            "url" : "https://www.udacity.com/"
        }
    ],
    "onlineCourses" : [
    	{
    		"title" : "How to Use Git and GitHub",
	    	"school" : "Udacity",
	    	"dates" : "2015",
	    	"url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
	    },
	    {
    		"title" : "Intro to HTML and CSS",
	    	"school" : "Udacity",
	    	"dates" : "2015",
	    	"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	    },
	    {
    		"title" : "Web Development",
	    	"school" : "Udacity",
	    	"dates" : "2014-2015",
	    	"url" : "https://www.udacity.com/course/web-development--cs253"
	    }
    ]
};

education.display = function() {
	console.log("education.display() TEST");	
	if (education.Schools.length > 0) {
		for (var i = 0; i < education.Schools.length; i++) {
			var formatted_HTMLschoolStart = HTMLschoolStart;
			var formatted_HTMLschoolName = HTMLschoolName.replace("%data%", education.Schools[i].name);
			var formatted_HTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[i].degree);
			var formatted_HTMLschoolDates = HTMLschoolDates.replace("%data%", education.Schools[i].dates);
			var formatted_HTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.Schools[i].location);
			
			$("#education").append(formatted_HTMLschoolStart)
			$(".education-entry:last").append(formatted_HTMLschoolName + formatted_HTMLschoolDegree + formatted_HTMLschoolDates + formatted_HTMLschoolLocation);

			for (each in education.Schools[i].majors) {
				var formatted_HTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.Schools[i].majors[each]);
				$(".education-entry:last").append(formatted_HTMLschoolMajor)
			}
		}
	} else {
		console.log("No Schools!");
	}
}

var work = {
	"jobs" : [
		{
			"title" : "Event Producer",
			"employer" : "InteSolv",
			"dates" : "2013-2015",
			"location" : "Austin, TX",
			"description" : "Street art fap mustache, fingerstache slow-carb Schlitz fanny pack McSweeney's shabby chic. Marfa DIY VHS flannel, Bushwick Tumblr +1 meditation squid cold-pressed photo booth. Cray lumbersexual chillwave deep v, polaroid salvia sustainable Godard Pinterest +1 quinoa locavore chambray next level. Mumblecore DIY wayfarers, beard freegan you probably haven't heard of them Shoreditch fixie chambray slow-carb Odd Future keffiyeh quinoa. Health goth fanny pack kitsch irony asymmetrical sriracha vegan, Tumblr Pinterest Odd Future Bushwick tattooed stumptown art party Godard. Deep v migas art party Austin, typewriter meggings ethical Thundercats Blue Bottle direct trade McSweeney's Odd Future. Pork belly farm-to-table direct trade, mumblecore banh mi gluten-free food truck."
		},
		{
			"title" : "Operations Manager",
			"employer" : "Advanced Transportation Services",
			"dates" : "2005-2013",
			"location" : "Visalia, CA",
			"description" : "Wes Anderson gentrify fashion axe, Williamsburg actually craft beer drinking vinegar master cleanse Odd Future Neutra. High Life artisan VHS dreamcatcher narwhal Marfa, ennui tousled. Single-origin coffee biodiesel migas twee leggings. Scenester vinyl ennui keffiyeh, bitters drinking vinegar banh mi forage biodiesel kogi umami twee High Life flexitarian. Four loko Echo Park kogi PBR&B, fixie try-hard kitsch leggings polaroid paleo cold-pressed. Swag scenester retro chillwave. Mlkshk Kickstarter gentrify, meditation forage Schlitz readymade flexitarian fingerstache single-origin coffee."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "poopr",
			"dates" : "2014-2015",
			"description" : "Heirloom hashtag flannel gentrify, beard pug pickled forage normcore 8-bit mixtape. Salvia bespoke Helvetica Echo Park 3 wolf moon. Meditation brunch polaroid mlkshk, skateboard pour-over next level iPhone. Freegan slow-carb leggings, kitsch migas DIY YOLO disrupt single-origin coffee. Mustache XOXO YOLO pop-up. Distillery craft beer squid Austin meh, Banksy gluten-free fashion axe +1 vinyl. Pinterest narwhal freegan, blog yr Godard farm-to-table distillery Etsy keytar Vice butcher taxidermy.",
			"image" : [
				"https://unsplash.it/200",
				"https://unsplash.it/200",
				"https://unsplash.it/200"
			]
		},
		{
			"title" : "Javascript Basics",
			"dates" : "2015",
			"description" : "Whatever tofu paleo mustache fingerstache, freegan chia pop-up PBR&B twee Neutra yr pug leggings readymade. Meditation kogi banh mi 90's. Trust fund hoodie literally bicycle rights. Typewriter cold-pressed cardigan, Thundercats jean shorts kitsch gentrify tofu lo-fi trust fund irony Vice. Meggings 8-bit typewriter pop-up ennui. Lomo hashtag try-hard, gluten-free cardigan gastropub Marfa chambray fanny pack iPhone. Cornhole bitters banh mi Intelligentsia.",
			"image" : [
				"https://unsplash.it/200",
				"https://unsplash.it/200",
				"https://unsplash.it/200"
			]
		}
	]
};

projects.display = function() {
	if (projects.projects.length > 0) {
		for (var i = 0; i < projects.projects.length; i++) {
			var formatted_HTMLprojectStart = HTMLprojectStart;
			var formatted_HTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formatted_HTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formatted_HTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			
	
			$("#projects").append(formatted_HTMLprojectStart);
			$(".project-entry:last").append(formatted_HTMLprojectTitle + formatted_HTMLprojectDates + formatted_HTMLprojectDescription);
			for (each in projects.projects[i].image) {
				var formatted_HTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image[each]);
				$(".project-entry:last").append(formatted_HTMLprojectImage);
				console.log(each);
			}
		}
	} else {
		console.log("No Projects!");
	}
}




var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var pictureURL = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

function displayContactInfo() {
	for (information in bio.contacts) {
		var formattedContactInfo = HTMLcontactGeneric.replace("%data%", bio.contacts[information]).replace("%contact%", information);
		$("#topContacts").append(formattedContactInfo);
	}
}

function displayHeader() {
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(pictureURL);
	$("#header").append(formattedWelcomeMessage);
	$("#main").append(work["position"]);
	$("#main").append(education.name);

	displayContactInfo();
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		};
	} else {
		console.log("No skills! :o");
	}
}

work.display = function() {
	if (work.jobs.length > 0) {
		for (job in work.jobs) {
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
		};
	} else {
		console.log("No jobs! :o");
	}
}

displayHeader();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

function inName(name) {
	var split_name = name.trim().split(" ");
	return split_name[0].slice(0, 1).toUpperCase() + split_name[0].slice(1).toLowerCase() + " " + split_name[1].toUpperCase();
}
var bio = {
	"name" : "Maxwell Fox",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "marvin.martian2009@gmail.com",
		"mobile" : "256-808-7419",
		"github" : "Maxwell5656",
		"twitter" : "@MaxwellFox2",
		"location" : "Huntsville, AL, USA"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : ["HTML and CSS", "Javascript"],
	"bioPic" : "images/myface.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedGitHub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter)
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation)
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
		}
	}
};
bio.display();

var work = {
	"jobs" : [
		{
			"title" : "Toilet Cleaner",
			"employer" : "Area 51",
			"dates" : "2010-2014",
			"location" : "Groom Lake, NV",
			"description" : "**CLASSIFIED**"
		}
	],
	display: function() {
		for(var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerandTitle = [formattedEmployer, formattedTitle];
			$(".work-entry:last").append(formattedEmployerandTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation)
			var formattedDescription =HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();

var projects = {
	"projects" : [
		{
			"title" : "Project 1: Project Portfolio",
			"dates" : "March 2015",
			"description" : "A portfolio containing links to all of my other projects.",
			"images" : ["images/udacity-logo.jpg", "images/sunflower.jpg"]
		}
	],
	display: function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			formattedProjectDates = HTMLprojectTitle.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};
projects.display();

var education = {
	"schools" : [
		{
			"name" : "Homeschool",
			"location" : "Huntsville, AL, USA",
			"dates" : "2003-2015",
			"degree" : "n/a",
			"majors" : ["n/a"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "February 2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617/m-2698138588"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "March 2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "April 2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-2948908664"
		}
	],
	display: function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);
			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			if (education.schools[school].majors.length > 0) {
				for (major in education.schools[school].majors) {
					formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var onlineCourse in education.onlineCourses) {
			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};
education.display()

$("#mapDiv").append(googleMap);
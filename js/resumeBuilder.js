
// Bio information
var bio = {
  "name": "Jerry Dy",
  "role": "Web Developer",
  "contacts": {
      "mobile": "925-123-4567",
      "email": "jerrydy@sbcglobal.net",
      "twitter": "@jerrydygreat",
      "github": "jerrydy",
      "location": "San Ramon, CA 94583"
  },
  "welcomeMessage": "Hello World! Seize the day!",
  "skills": ["awesome attitude", "quick learner", "ridiculously motivated"],
  "bioPic": "images/fry.jpg"
};

// Encapsulating display function with the bio object

bio.display = function () {
  $("#header").prepend (HTMLheaderRole.replace ("%data%", bio.role));
  $("#header").prepend (HTMLheaderName.replace ("%data%", bio.name));
  $("#topContacts").append (HTMLmobile.replace ("%data%", bio.contacts.mobile));
  $("#topContacts").append (HTMLemail.replace ("%data%", bio.contacts.email));
  $("#topContacts").append (HTMLtwitter.replace ("%data%", bio.contacts.twitter));
  $("#topContacts").append (HTMLgithub.replace ("%data%", bio.contacts.github));
  $("#topContacts").append (HTMLlocation.replace ("%data%", bio.contacts.location));
  $("#header").append (HTMLbioPic.replace ("%data%", bio.bioPic));
  $("#header").append (HTMLWelcomeMsg.replace ("%data%", bio.welcomeMessage));
  if (bio.skills) {
    $("#header").append (HTMLskillsStart);
    for (i in bio.skills) {
      $("#skills").append (HTMLskills.replace ("%data%", bio.skills[i]));
    }
  }
};

// Work history

var work = {
    "jobs": [
        {
            "employer": "Azeus Systems",
            "title": "Associate Programmer",
            "location": "White Plains, Quezon City, Philippines",
            "dates": "1995-1996",
            "description": "Worked as a junior programmer developing Windows client applications for various projects, including document management solutions."
        },
        {
            "employer": "AT&T Services",
            "title": "Professional Technical Architect",
            "location": "2600 Camino Ramon, San Ramon, CA",
            "dates": "1999-current",
            "description": "Worked as a solutions architect for various projects, including provisioning and capacity management applications."
        }
    ]
};

work.display = function () {
  for (job in work.jobs) {
      $("#workExperience").append (HTMLworkStart);
      var formattedEmployerTitle = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer) +
        HTMLworkTitle.replace ("%data%", work.jobs[job].title);
      $(".work-entry:last").append (formattedEmployerTitle); 
      $(".work-entry:last").append (HTMLworkDates.replace ("%data%", work.jobs[job].dates));
      $(".work-entry:last").append (HTMLworkLocation.replace ("%data%", work.jobs[job].location));
      $(".work-entry:last").append (HTMLworkDescription.replace ("%data%", work.jobs[job].description));

  }
};

// Projects worked on

var projects = {
    "project": [
        {
            "title": "AT&T Dedicated Ethernet",
            "dates": "2014",
            "description": "Responsible for developing an application for capacity managing dedicated ethernet equipment. This includes the development of a backend Oracle database for inventory of equipment, cards and port capacitiies, and a front end GUI for generating reports."
        },
        {
            "title": "PIC/LPIC",
            "dates": "2003",
            "description": "Responsible for writing a Unix application for transmitting orders for provisioning in the central office switches and generating transactions billing systems."
        }
    ]
}

projects.display = function () {
  for (i in projects.project) {
    $("#projects").append (HTMLprojectStart);
    $(".project-entry:last").append (HTMLprojectTitle.replace ("%data%", projects.project[i].title));
    $(".project-entry:last").append (HTMLprojectDates.replace ("%data%", projects.project[i].dates));
    $(".project-entry:last").append (HTMLprojectDescription.replace ("%data%", projects.project[i].description));
  }
}

// Education history

var education = {
    "schools": [
        {
            "name": "Devry University",
            "location": "Fremont, CA",
            "degree": "Master",
            "majors": "Business Administration",
            "dates": 2001
        },        {
            "name": "Ateneo de Manila University",
            "location": "Quezon City, Philippines",
            "degree": "BS",
            "majors": "Computer Science",
            "dates": 1995
        },

        {
            "name": "Saint Jude Catholic School",
            "location": "Manila, Philippines",
            "degree": "High School",
            "majors": "None",
            "dates": 1991
        }
    ],
    "onlineCourse": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2014,
            "url": "udacity.com"
        }
    ]
};

education.display = function () {
  if (education.schools) {
    for (i in education.schools) {
      $("#education").append (HTMLschoolStart);
      var formattedNameDegree = HTMLschoolName.replace ("%data%", education.schools[i].name)
          + HTMLschoolDegree.replace ("%data%", education.schools[i].degree)
      $(".education-entry:last").append (formattedNameDegree);
      $(".education-entry:last").append (HTMLschoolDates.replace ("%data%", education.schools[i].dates));
      $(".education-entry:last").append (HTMLschoolLocation.replace ("%data%", education.schools[i].location));
      $(".education-entry:last").append (HTMLschoolMajor.replace ("%data%", education.schools[i].majors));
    }
  }

  if (education.onlineCourse) {
    $("#education").append (HTMLonlineClasses);
    for (i in education.onlineCourse) {
      $("#education").append (HTMLschoolStart);
      var formatoOnlineTitleSchool = HTMLonlineTitle.replace ("%data%", education.onlineCourse[i].title)
          + HTMLonlineSchool.replace ("%data%", education.onlineCourse[i].school);
      $(".education-entry:last").append (formatoOnlineTitleSchool);
      $(".education-entry:last").append (HTMLonlineDates.replace ("%data%", education.onlineCourse[i].dates));
      $(".education-entry:last").append (HTMLonlineURL.replace ("%data%", education.onlineCourse[i].url));
    }
  }
}


// Calls to the display functions in each object are independent of each other, so it can be called in any order

bio.display ();
work.display ();
projects.display ();
education.display ();

//$(function () {
  $("img").attr("src", "http://placekitten.com/350/150");
//});

// The following were added as part of exercises during the lessons, just commenting for future reference.
//$("#main").append (internationalizeButton);

/*function inName (name) {
  var names = name.trim ().split (" ");
  return names[0] + " " + names[1].toUpperCase ();
}*/

/*$(document).click(function(loc) {
  logClicks (loc.pageX, loc.pageY);
});*/

$("#mapDiv").append (googleMap);

if(document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('topContacts').style.backgroundColor = 'black';
}
if(document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.backgroundColor = 'black';
}
if(document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.backgroundColor = 'black';
}
if(document.getElementsByClassName('project-entry').length === 0) {
  document.getElementById('projects').style.backgroundColor = 'black';
}
if(document.getElementsByClassName('education-entry').length === 0) {
  document.getElementById('education').style.backgroundColor = 'black';
}
if(document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('letsConnect').style.backgroundColor = 'black';
}
if(document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.backgroundColor = 'black';
}
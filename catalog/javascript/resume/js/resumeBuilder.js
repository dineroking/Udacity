/*
 This is empty on purpose! Your code to build the resume will go here.
 */
/*

 $('#main').append('<h1>Ronny Rosabal</h1>');

 console.log('This is inside resumeBuilder.js');

 var awesomeThoughts = 'I\'m Ronny and I\'m AWESOME';
 var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
 console.log(funThoughts);
 $('#main').append(funThoughts);*/
var bio = {
  'name' : 'Ronny Rosabal',
  'role' : 'Web Developer',
  contacts : {
    'mobile' : '305.343.8007',
    'email' : 'ronnyrosabal@aol.com',
    'github' : 'dineroking',
    'twitter' : '@dineroking',
    'location' : 'Houston'
  },
  'picture' : 'images/fry.jpg',
  'skills' : ['amazing', 'crazy', 'strong'],
  'welcomeMessage' : 'Hello and welcome to my resume.'
};

var education = {
  "schools" : [
    {
      "name" : "Miami High",
      "location" : "Miami",
      'degree' : "High School",
      "majors" : ["N/A"],
      "dates" : "09/1997 - 06/1999"
    },
    {
      "name" : "Coral Park",
      "location" : "Miami",
      'degree' : "High School",
      "majors" : ["N/A"],
      "dates" : "09/1999 - 06/2000"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "JavaScript",
      "school" : "Udacity",
      "dates" : "present",
      "url" : "www.udacity.com"
    },
    {
      "title" : "PHP",
      "school" : "Udemy",
      "dates" : "09/2005",
      "url" : "www.udemy.com"
    }
  ]
};

var work = {
  jobs : [
    {
      "employer" : "ExpressJet Airlines",
      "title" : "Pilot",
      "location" : "Houston",
      "dates" : "12/06 - present",
      "description" : "Safely flying airplanes."
    },
    {
      "employer" : "ADF Airways",
      "title" : "Instructor",
      "location" : "Miami",
      "dates" : "04/04 - 12/06",
      "description" : "Instruction of future pilots."
    }
  ]
};

var projects = {
  projects : [
    {
      "title" : "unknown",
      "dates" : "present",
      "description" : "I have no idea what I'm doing.",
      "images" : ["url"]
    },
    {
      "title" : "another project",
      "dates" : "past",
      "description" : "Another project I did.",
      "images" : ["url"]
    }
  ]
};


//header
/*var formattedRole = HTMLheaderRole.replace( '%data%', bio.role );
$( '#header' ).prepend( formattedRole );
var formatterName = HTMLheaderName.replace( '%data%', bio.name );
$( '#header' ).prepend( formatterName );
var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.message);
$('#header' ).append(formattedMessage);
var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
var formattedPhone = HTMLmobile.replace('%data%', bio.contact.phone);
$('#topContacts' ).append(formattedEmail, formattedPhone);
var formattedPicture = HTMLbioPic.replace('%data%', bio.picture);
$('#header' ).prepend(formattedPicture);

var formattedSkills = "";
for(var i = 0; i < bio.skills.length; i++) {
  formattedSkills += HTMLskills.replace( '%data%', bio.skills[i]);
}
$('#header' ).append(HTMLskillsStart);
$('#header' ).append(formattedSkills);*/

//work info
/*$('#main').append(HTMLworkStart);
$('.work-entry').append($('#workExperience'));
var formattedEmployer = HTMLworkEmployer.replace('%data%', bio['work']['employer']);
var formattedPosition = HTMLworkTitle.replace('%data%', bio['work']['position']);
var formattedWorkYears = HTMLworkDates.replace('%data%', bio['work']['years']);
var formattedWorkCity = HTMLworkLocation.replace('%data%', bio['work']['location']);
var formattedWorkDescription = HTMLworkDescription.replace('%data%', bio['work']['description']);
$('#workExperience').append(formattedEmployer, formattedPosition, formattedWorkYears, formattedWorkCity, formattedWorkDescription);*/

//education info
/*$('#main').append(HTMLschoolStart);
$('.education-entry').append($('#education'));
var formattedSchool = HTMLschoolName.replace('%data%', bio.education.school);
var formattedSchoolYears = HTMLschoolDates.replace('%data%', bio.education.years);
var formattedSchoolCity = HTMLschoolLocation.replace('%data%', bio.education.location);
$('#education').append(formattedSchool, formattedSchoolYears, formattedSchoolCity);*/



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
  project : [
    {
      "title" : "unknown",
      "dates" : "present",
      "description" : "I have no idea what I'm doing.",
      "images" : ["images/fry.jpg" , "images/fry.jpg"]
    },
    {
      "title" : "another project",
      "dates" : "past",
      "description" : "Another project I did.",
      "images" : ["images/fry.jpg", "images/fry.jpg"]
    }
  ]
};

var formattedName = HTMLheaderName.replace( '%data%', bio.name );
$( "#header" ).append( formattedName );
if( bio[ 'skills' ].length > 0 ) {
  $( '#header' ).append( HTMLskillsStart );
  var formattedSkills = "";
  /*for( var i = 0; i < bio[ "skills" ].length; i++ ) {
   formattedSkills += HTMLskills.replace( '%data%', bio[ 'skills' ][ i ] )
   }*/
  for( var skill in bio.skills ) {
    formattedSkills += HTMLskills.replace( '%data%', bio.skills[ skill ] );
  }
  $( '#skills' ).append( formattedSkills );
}

if( Object.keys( work ).length > 0 ) {
  var formattedEmployer = "";
  var formattedTitle = "";
  var formattedWorkDates = "";
  var formattedWorkLocation = "";
  var formattedWorkDescription = "";
  for( var job in work.jobs ) {
    $( '#workExperience' ).append( HTMLworkStart );
    formattedEmployer = HTMLworkEmployer.replace( '%data%', work[ "jobs" ][ job ].employer );
    formattedTitle = HTMLworkTitle.replace( '%data%', work[ "jobs" ][ job ].title );
    formattedWorkDates = HTMLworkDates.replace( '%data%', work[ "jobs" ][ job ].dates );
    formattedWorkLocation = HTMLworkLocation.replace( '%data%', work[ "jobs" ][ job ].location );
    formattedWorkDescription = HTMLworkDescription.replace( '%data%', work[ "jobs" ][ job ].description );
    $( ".work-entry:last" ).append( formattedEmployer + formattedTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription );
    $( ".work-entry" ).append();
  }
}

projects.display = function(){
  for(var project in projects.project){
    $('#projects' ).append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.project[project ].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.project[project ].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.project[project ].description);
    var formattedProjectImg = "";
    for(var img in projects.project[project].images){
      formattedProjectImg += HTMLprojectImage.replace('%data%', projects.project[project ].images[img]);
    }
    $('.project-entry:last' ).append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImg);
  }
};

projects.display();

$( "#main" ).append( internationalizeButton );
$("#mapDiv" ).append(googleMap);
console.log( Object.keys( education ).length );
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



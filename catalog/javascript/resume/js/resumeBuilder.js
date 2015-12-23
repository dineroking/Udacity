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
  contact : {
    'phone' : '305.343.8007',
    'email' : 'ronnyrosabal@aol.com'
  },
  'picture' : 'images/fry.jpg',
  'skills' : ['amazing', 'crazy', 'strong'],
  'message' : 'Hello and welcome to my resume.'
};
var formattedRole = HTMLheaderRole.replace( '%data%', bio.role );
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
$('#workExperience' ).append(HTMLskillsStart);
$('#skills' ).append(formattedSkills);


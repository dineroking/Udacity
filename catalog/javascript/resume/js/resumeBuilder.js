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
  'contact' : 'ronnyrosabal@aol.com',
  'picture' : '',
  'message' : 'Hello and welcome to my resume.'
};
var formattedContact = HTMLemail.replace('%data%', bio.contact);
$('#header' ).prepend(formattedContact);
var formattedRole = HTMLheaderRole.replace( '%data%', bio.role );
$( '#header' ).prepend( formattedRole );
var formatterName = HTMLheaderName.replace( '%data%', bio.name );
$( '#header' ).prepend( formatterName );
var formattedMessage = HTMLwelcomeMsg.replace('%data', bio.message);



$( '#header' ).css( 'color', 'white' );


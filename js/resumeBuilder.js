/* --- Bio Information --- */
var bio = {
  "name": "Marc Smith",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0466 642 422",
    "email": "smivers624@gmail.com",
    "github": "smithmarc",
    "twitter": "@smivers624",
    "location": "Perth, WA"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": ["Restocking shelves", "Operating pallet jacks",
    "Programming",
    "HTML"
  ],
  "bioPic": "images/fry.jpg"
};

/* --- Work Information --- */

var work = {
  "jobs": [{
    "title": "Nightfill",
    "employer": "Woolworths",
    "dates": "2009 - Present",
    "location": "Currambine, WA",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
      "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
      "culpa qui officia deserunt mollit anim id est laborum."
  }, {
    "title": "Pizza Delivery Boy",
    "employer": "Papa Johns",
    "dates": "2007 - 2009",
    "location": "Joondalup, WA",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
      "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
      "culpa qui officia deserunt mollit anim id est laborum."
  }]
};

/* --- Project Information --- */

var projects = {
  "projects": [{
    "title": "Two Halfs Football Development",
    "dates": 2015,
    "description": "Website development for a friend.",
    "images": ["images/2hfd.png"]
  }, {
    "title": "Sample Project 2",
    "dates": 2013,
    "description": "Cauliflower cheese, cheesy rice with tomato sauce." +
      " Peri-peri chicken sauted with garlic and onions, dipped in cheese " +
      "topped with the finest lettuce, traffic light capsicum and broccoli.",
    "images": ["images/sample.jpg"]
  }]
};

/* --- Education Information --- */

var education = {
  "schools": [{
    "name": "Edith Cowan University",
    "degree": "BA",
    "dates": 2013,
    "location": "Joondalup, WA",
    "majors": ["CS"],
    "url": "http://www.ecu.edu.au/degrees/courses/bachelor-of-computer-science"
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": 2016,
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
};

/* --- Header --- */

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts
    .mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts
    .email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts
    .twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts
    .github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts
    .location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",
    bio.welcomeMessage);

  $("#header").prepend(formattedName, formattedRole);
  $("#topContacts").prepend(formattedMobile, formattedEmail,
    formattedTwitter, formattedGithub, formattedLocation);
  $("#header").append(formattedBioPic, formattedWelcomeMsg);

  if (bio.skills.length > 0) { // Any skills to show?
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[
        skill]);
      $("#header").append(formattedSkill);
    }

  };

  $("#footerContacts").append(formattedMobile, formattedEmail,
    formattedTwitter, formattedGithub, formattedLocation);
}

/* --- Work Experience --- */

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",
      work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work
      .jobs[job].title);
    var formattedEmployerTitle = formattedEmployer +
      formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work
      .jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",
      work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace(
      "%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  };
}

/* --- Projects --- */

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",
      projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%",
      projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace(
      "%data%", projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage =
          HTMLprojectImage.replace("%data%", projects.projects[
            project].images[image]);
        $(".project-entry:last").append(formattedImage);
      };
    };
  };
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",
      education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",
      education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    var formattedDates = HTMLschoolDates.replace("%data%",
      education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace(
      "%data%", education.schools[school].location);

    $(".education-entry:last").append(formattedNameDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);

    if (education.schools[school].majors.length > 0) {
      for (major in education.schools[school].majors) {
        var formattedMajor =
          HTMLschoolMajor.replace("%data%", education.schools[
            school].majors[major]);
        $(".education-entry:last").append(formattedMajor);
      }
    }
  }

  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%",
      education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",
      education.onlineCourses[course].school);
    var formattedTitleSchool = formattedTitle +
      formattedSchool;
    var formattedDates = HTMLonlineDates.replace("%data%",
      education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%",
      education.onlineCourses[course].url);

    $(".education-entry:last").append(formattedTitleSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedURL);

  }
}

/* --- Call our functions --- */

bio.display();
work.display();
projects.display();
education.display();


function locationiser(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  };
  return locationArray;
}

console.log(locationiser(work));

$("#mapDiv").append(googleMap);

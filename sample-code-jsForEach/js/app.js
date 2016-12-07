console.log('Sanity Check: app.js is linked correctly!');

$(document).ready(function(){

  // select a template script, and pull out the handlebars and html inside it
  var source = $('#developer-li-template').html();
  //console.log('template script source:', source);

  var header_source = $("#header-template").html();
  console.log("header template script source: ", header_source);

  // compile the handlebars template
  var template = Handlebars.compile(source);
  //console.log(template);

  var header_template = Handlebars.compile(header_source);
    console.log("header source", header_source);

  var headerHtml = header_template({
    cohortNumber: data.cohort,
    roomNumber: data.room,
    scheduleUrl: data.github_schedule
  });
  console.log(headerHtml);

  // use the template function from handlebars to create an HTML string
  // the template function takes in an object where:
    // each key is a variable the html template expects
    // each key's value is the data we want that variable to have
  data.developers.forEach(function(developer){
    var developerHtml = template({ github_username: developer.github_username,
      first_name: developer.first_name,
      last_name: developer.last_name
     });
    console.log('generated html string:', developerHtml);

    // append html to the view
    $("#developers-list").append(developerHtml);

  });
    $('header').append(headerHtml);
});



//  <header>
  //   <script id="header-template" type="text/x-handlebars-template">
  //   <h1>WDI {{cohortNumber}} Rocks!</h1>
  //   <div class="where row">
  //     <div class="col-md-6">
  //       <p>room {{roomNumber}}</p>
  //     </div>
  //     <div class="col-md-6">
  //       <p>online: <a href="https://github.com/{{sheduleUrl}}" target="_blank"></a></p>
  //     </div>
  //   </div>
  // </script>
  // </header>

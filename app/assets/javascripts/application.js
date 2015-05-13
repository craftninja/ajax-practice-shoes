// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $("button.buy-shoes").on("click", function() {
    var material = $("input.buy-shoes").val();
    $("input.buy-shoes").val('');
    $.ajax({
      type: "POST",
      url: "/shoes",
      data: { "shoe": { "material": material } },
      success: function(data) {
          var tr = "<tr>"
          tr = tr + "<td>" + data.material + "</td>"
          tr = tr + "<td><a href='/shoes/" + data.id + "'>Show</a></td>"
          tr = tr + "<td><a href='/shoes/" + data.id + "/edit'" + ">Edit</a></td>"
          tr = tr + "<td><a href='/shoes/" + data.id + "' data-method='delete'>Destroy</a></td>"
          tr = tr + "</tr>"
          $("tbody").append(tr);
      }
    })
  });
})

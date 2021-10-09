window.onload = function(){
    alert('Website has finished loading!')
};

function showValues() {
  var checkboxValue = document.getElementById("optimize").value;
  var modulesValue = document.getElementById("modules").value;
  var fullNameValue = document.getElementById("fullName").value;
  alert("Optimize: " + checkboxValue + "\nSelected Module: " + modulesValue + "\nFull Name" + fullNameValue);
}
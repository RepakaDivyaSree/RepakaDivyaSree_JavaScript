<script type="text/javascript">
function validateForm() {
  var x = document.forms["myForm"]["email"].value;
  var y = document.forms["myForm"]["password"].value;

  if (x == "" || x == null )  {
    alert("all fields must be filled out");
    return false;
  }
  if (y == "" || y == null )  {
    alert("all fields must be filled out");
    return false;
  }
}
</script>
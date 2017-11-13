function validation() {
    var x=document.getElementById("nom").value
    var y=document.getElementById("pre").value
    var z=document.getElementById("add").value
    var m=document.getElementById("mail").value
   if (document.getElementById("nom").value.length<5 || document.getElementById("nom").value.length>20 || document.getElementById("pre").value.length<5 || document.getElementById("pre").value.length>20 || document.getElementById("add").value.length<5 || document.getElementById("add").value.length>50 || document.getElementById("mail").value.length<5 || document.getElementById("mail").value.length>30)
   {
       document.getElementById("resultat").setAttribute("hidden","hidden");
       document.getElementById("error").removeAttribute("hidden");
   document.getElementById("error").innerHTML = "Vérifier tous les champs";
   }
    else

{
    document.getElementById("error").setAttribute("hidden","hidden");
    document.getElementById("resultat").removeAttribute("hidden");
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value
}

}

   // navbar
   window.addEventListener('scroll' , function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('scrolling-active',window.scrollY > 0);
})

 // hamburger menu js
 function myham() {
      let va = document.querySelector(".menu");
      va.classList.toggle("change");

      var side = document.getElementById("sidebar");
      var ds = document.getElementById("sideds");
      if (side.style.width == "150px") {
          side.style.width = "0px";
          ds.style.display = "none";
      }
      else {
          side.style.width = "150px";
          ds.style.display = "flex";
      }
  }
         
// API PART
// let url = "developer.json"

fetch('developer.json').then((res) =>{
return res.json();
}) .then( (data) =>{
const obj =  data;
console.log(obj);

// navigation portion
// document.querySelector("#navbar").innerHTML = obj.navItem_home;
document.querySelector("#logs-1").src = obj.logo;
document.querySelector("#nav_link_Home").innerHTML = obj.navItem_home;
document.querySelector("#nav_link_Service").innerHTML = obj.navItem_service;
document.querySelector("#nav_link_About").innerHTML = obj.navItem_about;
document.querySelector("#nav_link_Gallery").innerHTML = obj.navItem_gallery;
document.querySelector("#nav_link_Contact").innerHTML = obj.navItem_contact;

// SIDEBAR
document.querySelector("#nav_link_Home-1").innerHTML = obj.navItem_home;
document.querySelector("#nav_link_Service-2").innerHTML = obj.navItem_service;
document.querySelector("#nav_link_About-3").innerHTML = obj.navItem_about;
document.querySelector("#nav_link_Gallery-4").innerHTML = obj.navItem_gallery;
document.querySelector("#nav_link_Contact-5").innerHTML = obj.navItem_contact;


// Main section
document.querySelector("#secHeading").innerHTML = obj.mainHeading;
document.querySelector("#sec_SubPara").innerHTML = obj.mainSub_heading;
// document.querySelector("#callBtn").href = obj.call;

// Service Section
document.querySelector("#testimo").innerHTML = obj.service_Title;
// document.querySelector('#service_Heading').innerHTML = obj.service_Heading;

document.querySelector("#srv_grid_1").innerHTML = obj.srv_grid_1;
document.querySelector("#srv_grid_2").innerHTML = obj.srv_grid_2;
document.querySelector("#srv_grid_3").innerHTML = obj.srv_grid_3;
document.querySelector("#srv_grid_4").innerHTML = obj.srv_grid_4;
document.querySelector("#srv_grid_5").innerHTML = obj.srv_grid_5;
document.querySelector("#srv_grid_6").innerHTML = obj.srv_grid_6;


// about section
document.querySelector("#about_title").innerHTML = obj.about_title;
// document.querySelector("#about_heading").innerHTML = obj.about_heading;
document.querySelector("#about_subHeading").innerHTML = obj.about_subHeading;

// gallery section
document.querySelector("#GALAN").innerHTML = obj.gallery;
document.querySelector("#image_1").src = obj.gallery_img_1;
document.querySelector("#image2").src = obj.gallery_img_2;
document.querySelector("#image3").src = obj.gallery_img_3;
document.querySelector("#image4").src = obj.gallery_img_4;
document.querySelector("#image5").src = obj.gallery_img_5;
document.querySelector("#image6").src = obj.gallery_img_6;

// contact section
document.querySelector("#CONT").innerHTML = obj.contact_title;
document.querySelector("#gmap").src = obj.map;
// document.querySelector("#contact_heading").innerHTML = obj.contact_heading;
document.querySelector("#address-1").innerHTML = obj.address1;
document.querySelector("#address-2").innerHTML = obj.address2;
document.querySelector("#country-1").innerHTML = obj.country;
document.querySelector("#caller").href = obj.call_1;
document.querySelector("#mappp-1").src = obj.map_1;
});
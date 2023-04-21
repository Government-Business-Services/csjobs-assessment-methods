function getVals(div) {

  var new = siftArray;
  var tmp = window.sessionStorage.getItem("cheese")
  const target = document.getElementById(div).innerHTML = tmp;
  target.innerHTML = "dsfsd"+tmp;

  // <script>
  //             const fileUpload = document.getElementById('file-upload-1');
  //             var stamp = new Date();
  //             var localStamp = stamp.toLocaleDateString('en-us', { day:"numeric", month:"short", year:"numeric" }) ;
  //
  //             fileUpload.addEventListener('change', (event) => {
  //               const files = event.target.files;
  //               for (const file of files) {
  //                 const name = file.name;
  //                 const lastModified = file.lastModified;
  //                 const lmElement = document.getElementById('lastMod');
  //
  //                 var fileName = `${name}`;
  //                 var lastM = `Last modified on ${new Date(lastModified).toLocaleDateString('en-uk')}`;
  //                 lmElement.innerHTML = lastM;
  //               }
  //             });
  //           </script>
  //
  //
  //
  // var radios = document.getElementsByTagName('input');
  // for (i = 0; i < radios.length; i++) {
  //   if (radios[i].type == 'radio' && radios[i].checked) {
  //
  //     if (radios[i].value == "sift" || radios[i].value == "both"){
  //       siftArray.push(radios[i].id);
  //       window.sessionStorage.setItem('cheese','edam');
  //       sessionStorage.setItem(radios[i].name+"_"+radios[i].value,radios[i].id);
  //       console.log(siftArray);
  //     }
  //     if (radios[i].value == "interview" || radios[i].value == "both") {
  //       interviewArray.push(radios[i].id);
  //       sessionStorage.setItem(radios[i].name+"_"+radios[i].value,radios[i].id);
  //       console.log(interviewArray);
  //       console.log(window.sessionStorage.getItem("cheese"))
  //     }
  //   }
  // }
}


/* global $ */

// Warn about using the kit in production
// if (
//   window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
//   window.console && window.console.info
// ) {
//   window.console.info('GOV.UK Prototype Kit - do not use for production')
//   window.sessionStorage.setItem('prototypeWarning', true)
// }
//
// $(document).ready(function () {
//   window.GOVUKFrontend.initAll()
// })

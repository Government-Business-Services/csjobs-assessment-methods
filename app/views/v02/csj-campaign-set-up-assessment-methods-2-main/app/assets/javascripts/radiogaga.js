function checkRadio() {
console.log("onload")
  var sifta = [];
  var inta = [];

  var radios = document.getElementsByTagName('input');
  for (i = 0; i < radios.length; i++) {
    if (radios[i].type == 'radio' && radios[i].checked ) {

      if (radios[i].value == "sift" || radios[i].value == "both"){
        sifta.push(radios[i].value, radios[i].name, radios[i].id);
        window.sessionStorage.setItem("sift", JSON.stringify(sifta));

      }
}

if (radios[i].type == 'radio' && radios[i].checked ) {

  if (radios[i].value == "interview" || radios[i].value == "both"){
    inta.push(radios[i].value, radios[i].name, radios[i].id);
    window.sessionStorage.setItem("interview", JSON.stringify(inta));

  }
}
}
document.getElementById("outsput").innerHTML = sifta;
}

 //
 // aras = JSON.parse(sessionStorage.getItem("selections"));


    //
    //   }
    //   document.getElementById("here").innerHTML = newArr;
    // }
    // if (newArr)
    //
    // newArr = JSON.parse(sessionStorage.getItem("selections"));
    // document.getElementById("here").innerHTML = newArr;
    //   console.log(newArr);


  //
  //     if (radios[i].value == "sift" || radios[i].value == "both"){
  //       arrayTest.push("sift",radios[i].id,radios[i].name,radios[i].value);
  //       moiArray.push(arrayTest);
  //       window.sessionStorage.setItem("sift", JSON.stringify(siftArray));
  //       window.sessionStorage.setItem("exp", JSON.stringify(moiArray));
  //       // window.sessionStorage.setItem('cheese','edam');
  //       // sessionStorage.setItem(radios[i].name+"_"+radios[i].value,radios[i].id);
  //       console.log(siftArray);
  //     }
  //     if (radios[i].value == "interview" || radios[i].value == "both") {
  //       interviewArray.push(radios[i].id,radios[i].name);
  //       window.sessionStorage.setItem("interview", JSON.stringify(interviewArray));
  //       // sessionStorage.setItem(radios[i].name+"_"+radios[i].value,radios[i].id);
  //       console.log(interviewArray);
  //       // console.log(window.sessionStorage.getItem("cheese"))
  //     }
  //   }
  // }






//     for (var i = 0; i < storedArray.length; i++) {
//          alert(storedArray[i]);
// }



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

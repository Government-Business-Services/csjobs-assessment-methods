//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here


router.post("/tempo", function (req, res) {
    var te = req.session.data['template'];

    if (te == "temp"){
      res.redirect("/v04/varA/task-list");
    } else {

    }


})

router.get("/selection-handlerV5", function (req, res) {
  var list = req.session.data['selected'];

  for (var i=0;i<1;i++){
    res.redirect("/v05/select-"+list[i]);
  }
})

router.get("/selection-handler", function (req, res) {
  var list = req.session.data['selected'];

  for (var i=0;i<1;i++){
    res.redirect("/v03/select-"+list[i]);
  }
})

router.post("/check-next-stepV5", function (req, res) {
  var src = req.session.data['source'];

  var list = req.session.data['selected'];
  var num = list.length;

  for (var a=0;a<num;a++){
    if (src == list[num]) {
      res.redirect("/v05/select-criteria-stage");
    } else if (src == list[a]){
      a=a+1;
      res.redirect("/v05/select-"+list[a]);
      break;
    }
  }
  })


router.post("/check-next-step", function (req, res) {
  var src = req.session.data['source'];

  var list = req.session.data['selected'];
  var num = list.length;

  for (var a=0;a<num;a++){
    if (src == list[num]) {
      res.redirect("/v03/select-criteria-stage");
    } else if (src == list[a]){
      a=a+1;
      res.redirect("/v03/select-"+list[a]);
      break;
    }
  }
  })


  router.get("/v05/select-undefined", function (req, res) {
    res.redirect("/v05/select-criteria-stage");
  })

  router.get("/v03/select-undefined", function (req, res) {
    res.redirect("/v03/select-criteria-stage");
  })


router.post('/ass-handle', function (req, res){
  var choice = req.session.data['select-assess']
  var exp = req.session.data['exp1']

  switch (choice) {
    case 'Abilities':
    res.redirect('/v01/ability')
    break

    case 'Behaviours':
    res.redirect('/v01/behaviours')
    break

    case 'Experience':
    res.redirect("/v01/experience")
    break

    case 'Technical skills':
    res.redirect('/v01/experience')
    break

    case 'Strengths':
    res.redirect('/v01/strengths')
    break
  }
})


router.post('/list-handler', function (req, res){
  var choice = req.session.data['another-assess']

  switch (choice) {
    case 'Yes':
    res.redirect('/v01/what-do-you-want-to-assess')
    break

    case 'No':
    res.redirect('/v01/task-list')
    break
  }
})





router.get("/alt-route", function (req, res) {
  var src = req.session.data['source'];
  var list = req.session.data['selected'];
  res.redirect("/v03/select-"+list[0]);
})

router.post("/check-route", function (req, res) {
  var src = req.session.data['source'];
  var list = req.session.data['selected'].types;
  var num = list.length;

  for (var a=0;a<num;a++){
    if (src == list[num]) {
      res.redirect("/v02/selection-criteria-summary");
    } else if (src == list[a]){
      a=a+1;
      res.redirect("/v02/select-"+list[a]);
      break;
    }
  }
  })



router.get("/select-undefined", function (req, res) {
  res.redirect("/v03/select-criteria-stage");
})

/*1*/
db.Restaurant.find();
/*2*/
db.Restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
/*3*/
db.Restaurant.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
/*4*/
db.Restaurant.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode":1});
/*5*/
db.Restaurant.find({borough:"Bronx"},{});
/*6*/
db.Restaurant.find({borough:"Bronx"},{}).limit(5);
/*7*/
db.Restaurant.find({borough:"Bronx"},{}).limit(5).skip(5);
/*8*/
db.Restaurant.find({"grades.score": {$gt: 90}});
/*9*/
db.Restaurant.find({"grades.score": { $gt: 80,$lt: 100}},{});
/*10*/
db.Restaurant.find({"address.coord": { $lt: -95.754168}},{});
/*11*/
db.Restaurant.find({$and :[{"grades.score":{$gt:70}},{"address.coord":{$lt:-65.754168}},{cuisine:{$ne:"American "}}]});
/*12*/
db.Restaurant.find({cuisine:{$ne:"American "},"grades.score":{ $gt: 70 },"address.coord":{ $lt: -65.754168}},{});
/*13*/
db.Restaurant.find({cuisine:{$ne:"American "},"grades.grade":'A',borough:{$ne: "Brooklyn"}},{});
/*14*/
db.Restaurant.find( { name: {"$regex": "^Wil"}}, { restaurant_id:1, name:1, borough:1, cuisine: 1, _id:0 } );
/*15*/
db.Restaurant.find( { name: {"$regex": "ces$"}}, {restaurant_id:1, name:1, borough:1, cuisine:1});
/*16*/
db.Restaurant.find( { name: {"$regex": "Reg"}}, {restaurant_id:1, name:1, borough:1, cuisine:1});
/*17*/
db.Restaurant.find({borough:"Bronx",$or: [{cuisine:"American "},{cuisine:"Chinese"}]},{});
/*18*/
db.Restaurant.find({$or: [{borough:"Staten Island"},{borough:"Queens"},{borough:"Bronx"},{borough:"Brooklyn"}]},{restaurant_id:1,name:1,borough:1,cuisine:1});
/*19*/
db.Restaurant.find({$and: [{borough:{$ne:"Staten Island"}},{borough:{$ne:"Queens"}},{borough:{$ne:"Bronx"}},{borough:{$ne:"Brooklyn"}}]},{restaurant_id:1,name:1,borough:1,cuisine:1});
/*20*/
db.Restaurant.find({"grades.score":{$not:{$gt:10}}},{});
/*21*/
db.Restaurant.find({$or: [{ name: {"$regex": "^Wil"}}, {"$and": [{"cuisine" : {$ne :"American "}}, {"cuisine" : {$ne :"Chinese"}}]}]},{restaurant_id:1,name:1,borough:1,cuisine:1});
/*22*/
db.Restaurant.find(
  {grades: {
              "date": ISODate("2014-11-19T00:00:00Z"),
              "grade": "A",
              "score": 11,
           }

  },
  {
      restaurant_id: 1,
      name: 1,
      grades: 1
  });
/*23*/
db.Restaurant.find( {  "grades.1" :  { date :  ISODate("2014-08-11T00:00:00Z") , grade : "A", score : 9  } } ,
           {_id :0, restaurant_id:1, name: 1,  grades:1 }  );
/*24*/
db.Restaurant.find( { "address.coord.1": {$gt : 42, $lte : 52}},{"restaurant_id" : 1,"name":1,"address":1,"coord":1});
/*25*/
db.Restaurant.find().sort({"name":1});
/*26*/
db.Restaurant.find().sort({"name":-1});
/*27*/
db.Restaurant.find().sort({"cuisine":1,"borough" : -1,});
/*28*/
db.Restaurant.find({"address.street" : { $exists : false}},{});
/*29*/
db.Restaurant.find({"address.coord" : {$type : 1}},{});
/*30*/
db.Restaurant.find({"grades.score" :  {$mod : [7,0]}},{"restaurant_id" : 1,"name":1,"address":1,"grades.grade":1});
/*31*/
db.Restaurant.find({ name : { $regex : "mon.*", $options: "i" }  },{"name":1, "borough":1,"address.coord":1, "cuisine" :1});
/*32*/
db.Restaurant.find({ name : { $regex : "^Mad" } },{"name":1, "borough":1,"address.coord":1, "cuisine" :1});
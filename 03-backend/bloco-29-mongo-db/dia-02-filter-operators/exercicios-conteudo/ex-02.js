// 1) Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, 
// essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
db.restaurants.find( { rating: {$not: { $lte: 5 } } })
db.restaurants.countDocuments( { rating: {$not: { $lte: 5 } } })

// 2) Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
db.restaurants.find( { $or: [ {rating: {$gte: 6}}, {borough: 'Brooklyn'} ] } )
db.restaurants.count( { $or: [ {rating: {$gte: 6}}, {borough: 'Brooklyn'} ] } )

// 3) Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
db.restaurants.find( { $and: [ {rating: {$gt: 4}}, {borough: {$in: ['Queens', 'Staten Island', 'Brooklyn'] } } ] } )
db.restaurants.count( { $and: [ {rating: {$gt: 4}}, {borough: {$in: ['Queens', 'Staten Island', 'Brooklyn'] } } ] } )

// 4) Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
db.restaurants.find( { $nor: [ {rating: 1}, {cuisine: 'American'} ] } )
db.restaurants.countDocuments( { $nor: [ {rating: 1}, {cuisine: 'American'} ] } )

// 5) Selecione e faça a contagem dos restaurantes em que a avaliação seja maior que 6 ou menor que 10, 
// E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.
db.restaurants.find(
{ $or: [
    {cuisine: {$ne: 'Delicatessen'}},
{ $and: [
    {borough: 'Brooklyn'},
 { $or: [ 
     {rating: {$gt: 6}}, 
     {rating: {$lt: 10}} 
     ]
  }
  ] 
 }
]}
)

db.restaurants.count(
{ $or: [
    {cuisine: {$ne: 'Delicatessen'}},
{ $and: [
    {borough: 'Brooklyn'},
 { $or: [ 
     {rating: {$gt: 6}}, 
     {rating: {$lt: 10}} 
     ]
  }
  ] 
 }
]}
)



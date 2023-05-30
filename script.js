            // davaleba #1
function integerNumber ( number ){
    if( number % 3 === 0){
        return 'true' ;
    }
    else {
        return "false" ;
    }
}
console.log(integerNumber(7))
            // davaleba #2
function getCurrencySymbolFromCode ( currency ){
    switch ( currency ) {
        case 'USD' :
            return '$' ;
            break ;
        case 'EUR' :
            return '€' ;
            break ;
        case 'GEL' :
            return 'ლ' ;
            break ;
        default :
            return currency ;
    }
} ; 
console.log(getCurrencySymbolFromCode("EUR"))
console.log(getCurrencySymbolFromCode("ragaca"))

            // davaleba #3
function lowerCaseToUpperCase (sentence) {
    let upperCaseSentence = sentence.toUpperCase() ;
    return upperCaseSentence ;
}
console.log(lowerCaseToUpperCase('my name is joe'))

            // davaleba #4
function winningCounter ( a , b)  //b tavdapirveli fasia da a saboloo
{
    let x = a-b ;
    return  (x / a ) * 100
}
console.log(winningCounter( 70 , 35) + '%')

            // davaleba #5
function numbersArray ( anyArray ){
    let filteredArray = anyArray.filter( numbers => numbers % 2 === 0 )
    return filteredArray ;
}
let array = [ 1 , 3 , 4 , 6 , 8 , 26 , 89 , 74 , 103 , 200];
console.log ( numbersArray( array ));
            // davaleba #6(am davalebis pirobas kargad ver mivxvdi)
function operationsOnArray ( justArray ){
    let x = justArray.find( person => person.firstName === 'niko');
    return x;
}
let personsArray = [
    {
        firstName : 'niko' ,
        lastName : 'shamugia' ,
        age : 13
    },
    {
        firstName : 'lasha' ,
        lastName : 'gagua' ,
        age : 89
    }
]
console.log(operationsOnArray(personsArray))
const calculateCentury = requite ("./siglos.js")

test ( 'Calculate century', () => {

         expect (calculateCentury(1850)).toBe (19)

})
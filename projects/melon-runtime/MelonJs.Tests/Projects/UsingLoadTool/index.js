const vars = load(__basedir + "/vars.js")

console.log(vars.numberThree)
console.log(vars.emptyArray)
console.log(vars.emptyObject)
console.log(vars.emptyString)
console.log(vars.log)

vars.say("Hello!")
import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app'

// console.log(process.argv)

// console.log(yarg)


// Función anonima autoinvocada
// no se pueden ejecuar funciones asincronas en el app.js, para esto se
// usa funciones anonimas auto invocadas, para pode usar async
(async() => {
  await main()
})()

async function main(){
  const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination} = yarg
  ServerApp.run({ base, limit, showTable, fileName, fileDestination })
}
// Función anonima autoinvocada
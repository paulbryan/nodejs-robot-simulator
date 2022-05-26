import * as simulator from './types/robot'
const robot:simulator.RobotTableSimulator=new simulator.RobotTableSimulator({width:5,length:5});

console.log(`Type your command`);
process.stdin.on('data', input => {        
    try{
        const response:string=robot.processCommand(input.toString());
        if (response){console.log(response);}
    }catch(e){
        
        console.log((e as Error).message);}
  });
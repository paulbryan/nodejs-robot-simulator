export enum RobotCommand {
    PLACE='PLACE',
    MOVE='MOVE',
    LEFT='LEFT',
    RIGHT='RIGHT',
    REPORT='REPORT'  
}
export enum RobotDirectionDegrees {
    NORTH=0,
    EAST=90,
    SOUTH=180,
    WEST=270
}
export enum RobotDirection {
    NORTH='NORTH',
    EAST='EAST',
    SOUTH='SOUTH',
    WEST='WEST'
}
export enum RobotDirectionTableTarget {
    NORTH='y',
    EAST='x',
    SOUTH='y',
    WEST='x'
}
export enum RobotDirectionTableTargetAction {
    NORTH=1,
    EAST=1,
    SOUTH=-1,
    WEST=-1
}
export enum RobotRotationAction{
    LEFT='LEFT',
    RIGHT='RIGHT'
}
export enum RobotRotationActionDegrees{
    LEFT=-90,
    RIGHT=90
}
export type TableDimension={
    width:number,
    length:number
}
export type RobotPosition={
    x:number,y:number,facing:RobotDirection
}
export class RobotTableSimulator{
    private dimension:TableDimension;
    private robotPosition?:RobotPosition;
    constructor(dimension:TableDimension){
        this.dimension=dimension;        
    }
    private validatePosition(robotPosition:RobotPosition):boolean{
        return (robotPosition.x>=0 && robotPosition.x<=this.dimension.width-1)&&(robotPosition.y>=0 && robotPosition.y<=this.dimension.length-1);
    }
    processCommand(input:string):string{        
        const params:string[] = input.trim().toUpperCase().split(' ').map(param=>param.trim().replace(/\t/g, ''));
        try{
            switch(params[0]as RobotCommand){
                case RobotCommand.PLACE:                    
                    const position:string[] = params[1].split(',');                
                    this.place({x:Number(position[0]),y:Number(position[1]),facing:position[2] as RobotDirection})
                    break;
                case RobotCommand.LEFT:            
                    this.left();
                    break;
                case RobotCommand.RIGHT:            
                    this.right();
                    break;
                case RobotCommand.MOVE:            
                    this.move();
                    break;
                case RobotCommand.REPORT:                         
                    return this.report()                           
                    break;
                default:
                    throw new Error('invalid command')
            }
        }catch(e){
            return((e as Error).message);
        }
        return "";
    }
    place(robotPosition:RobotPosition):void{
        if (!this.validatePosition(robotPosition)){throw new Error('not a valid position');}
        this.robotPosition=robotPosition;        
    }
    move():void{
        if (!this.robotPosition)throw new Error('not placed');        
        let newPosition:RobotPosition={...this.robotPosition};

        newPosition[RobotDirectionTableTarget[this.robotPosition.facing]]+=RobotDirectionTableTargetAction[this.robotPosition.facing];
        if (!this.validatePosition(newPosition)){throw new Error('not a valid position');}        
        this.robotPosition=newPosition;
        
    }
    left():void{
        if (!this.robotPosition)throw new Error('not placed');
        this.rotate(RobotRotationAction.LEFT);
    }
    right():void{
        if (!this.robotPosition)throw new Error('not placed');
        this.rotate(RobotRotationAction.RIGHT);
    }
    rotate(direction:RobotRotationAction):void{
        if (!this.robotPosition)throw new Error('not placed');
        const rotateDegrees:RobotRotationActionDegrees=RobotRotationActionDegrees[direction];
        const robotDegrees:RobotDirectionDegrees=RobotDirectionDegrees[this.robotPosition.facing];
        let newRobotDegrees:number=rotateDegrees+robotDegrees;
        if (newRobotDegrees<0){newRobotDegrees=360+newRobotDegrees;}
        if (newRobotDegrees>=360){newRobotDegrees=-360+newRobotDegrees;}                
        this.robotPosition.facing=RobotDirectionDegrees[newRobotDegrees].toString() as RobotDirection;
    }
    report():string{
        if (this.robotPosition==undefined){throw new Error('not placed');}
        return `Output: \`${this.robotPosition?.x},${this.robotPosition?.y},${this.robotPosition?.facing}\``;
    }
    get position():RobotPosition|undefined{
        return this.robotPosition;
    }
}
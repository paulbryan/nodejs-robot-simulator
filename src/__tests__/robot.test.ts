//import supertest from 'supertest'
import { RobotTableSimulator, TableDimension, RobotPosition, RobotDirection } from "../types/robot";

let testRobot:RobotTableSimulator;
let testTableDimensions:TableDimension={width:5,length:5};
const goodRobotPosition:RobotPosition={x:1,y:1,facing:RobotDirection.NORTH};      

beforeAll(() => {
    testRobot=new RobotTableSimulator(testTableDimensions);
});
//afterAll(() => console.log('simulator cleanup'));



describe("Example tests",()=>{
    describe("Test input A",()=>{        
        it("should return correct position - 0,1,NORTH",()=>{                
            const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH};
            testRobot.place(robotPosition);
            testRobot.move();
            expect(testRobot.report()).toBe("Output: `0,1,NORTH`");
        })
    
    })

    describe("Test input B",()=>{
        it("should return correct position - 0,0,WEST",()=>{                
            const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH};
            testRobot.place(robotPosition);
            testRobot.left();
            expect(testRobot.report()).toBe("Output: `0,0,WEST`");
        })
    })

    describe("Test input C",()=>{
        it("should return correct position - 3,3,NORTH",()=>{                
            const robotPosition:RobotPosition={x:1,y:2,facing:RobotDirection.EAST};
            testRobot.place(robotPosition);
            testRobot.move();
            testRobot.move();        
            testRobot.left();
            testRobot.move();
            expect(testRobot.report()).toBe("Output: `3,3,NORTH`");
        })
    })
});

describe("Full Robot tests",()=>{
    //place 
        //with invalid params
        //with valid params
    //report
        //before place
        //valid place
    //rotate
        //left
        //right
    //move
        //valid
        //invalid

    describe("place",()=>{
        describe("with invalid coordinates",()=>{
            it("should throw error",()=>{     
                const badRobotPosition:RobotPosition={x:5,y:5,facing:RobotDirection.NORTH};           
                expect(()=>testRobot.place(badRobotPosition)).toThrow;                
            })
        })
        describe("with valid coordinates",()=>{            
            it("should not throw error",()=>{                          
                expect(()=>testRobot.place(goodRobotPosition)).not.toThrow
            })
            it("should have same position as parameter",()=>{
                testRobot.place(goodRobotPosition);
                expect(testRobot.position).toMatchObject(goodRobotPosition);
            })
        })
        
    })
    describe("report",()=>{

        describe("with unplaced robot",()=>{
            it("should return error",()=>{
                expect(()=>testRobot.report()).toThrow;
            })
        })
      
        describe("with valid coordinates",()=>{
            beforeAll(() => {
                const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH};
                testRobot.place(robotPosition);
            });
            it("should return robot coordinates",()=>{                
                expect(testRobot.report()).toBe("Output: `0,0,NORTH`");
            })
        })
        
    })
    describe("rotate left",()=>{
        describe("with unplaced robot",()=>{
            it("should return error",()=>{
                expect(testRobot.left()).toThrow;
            })
        })
        describe("with placed robot",()=>{
            beforeEach(() => {
                const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH};
                testRobot.place(robotPosition);                
            });
            it("should not return error",()=>{
                expect(testRobot.left()).not.toThrow;
            })
            it("should return correct direction",()=>{
                testRobot.left();
                expect(testRobot.position?.facing).toBe(RobotDirection.WEST)
            })
            it("should return correct direction after 2 rotations",()=>{
                testRobot.left();
                testRobot.left();
                expect(testRobot.position?.facing).toBe(RobotDirection.SOUTH)
            })
            it("should return correct direction after 3 rotations",()=>{
                testRobot.left();
                testRobot.left();
                testRobot.left();
                expect(testRobot.position?.facing).toBe(RobotDirection.EAST)
            })
            it("should return correct direction after 4 rotations",()=>{
                testRobot.left();
                testRobot.left();
                testRobot.left();
                testRobot.left();
                expect(testRobot.position?.facing).toBe(RobotDirection.NORTH)
            })
        })
        
    })
    describe("rotate right",()=>{
        describe("with unplaced robot",()=>{
            it("should return error",()=>{
                expect(testRobot.left()).toThrow;
            })
        })
        describe("with placed robot",()=>{
            beforeEach(() => {
                const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH};
                testRobot.place(robotPosition);                
            });
            it("should not return error",()=>{
                expect(testRobot.right()).not.toThrow;
            })
            it("should return correct direction",()=>{
                testRobot.right();
                expect(testRobot.position?.facing).toBe(RobotDirection.EAST)
            })
            it("should return correct direction after 2 rotations",()=>{
                testRobot.right();
                testRobot.right();
                expect(testRobot.position?.facing).toBe(RobotDirection.SOUTH)
            })
            it("should return correct direction after 3 rotations",()=>{
                testRobot.right();
                testRobot.right();
                testRobot.right();
                expect(testRobot.position?.facing).toBe(RobotDirection.WEST)
            })
            it("should return correct direction after 4 rotations",()=>{
                testRobot.right();
                testRobot.right();
                testRobot.right();
                testRobot.right();
                expect(testRobot.position?.facing).toBe(RobotDirection.NORTH)
            })
        })
        
    })
    describe("move",()=>{
        describe("with unplaced robot",()=>{
            it("should return error",()=>{
                expect(testRobot.move()).toThrow;
            })
        })
        describe("with placed robot",()=>{
            beforeEach(() => {
                const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH}as RobotPosition;
                testRobot.place(robotPosition);                
            });
            it("should return robot coordinates after move",()=>{
                const testRobotPosition:RobotPosition={x:0,y:1,facing:RobotDirection.NORTH}as RobotPosition;                
                testRobot.move();
                expect(testRobot.position).toMatchObject(testRobotPosition);        
            })
            it("should return robot coordinates after right and move",()=>{
                const testRobotPosition:RobotPosition={x:1,y:0,facing:RobotDirection.EAST}as RobotPosition;                
                testRobot.right();
                testRobot.move();
                expect(testRobot.position).toMatchObject(testRobotPosition);
            })
            it("should return robot coordinates after left and move",()=>{
                const robotPosition:RobotPosition={x:1,y:1,facing:RobotDirection.EAST}as RobotPosition;                
                const testRobotPosition:RobotPosition={x:1,y:2,facing:RobotDirection.NORTH}as RobotPosition;
                testRobot.place(robotPosition);      
                testRobot.left();
                testRobot.move();
                expect(testRobot.position).toMatchObject(testRobotPosition);
            })
            it("should return error if move is invalid",()=>{
                testRobot.left();                
                expect(()=>testRobot.move()).toThrowError;                                     
            })
            it("should return error if move is invalid2",()=>{                            
                testRobot.place({x:4,y:4,facing:RobotDirection.NORTH}as RobotPosition);                                   
                expect(()=>testRobot.move()).toThrowError;                 
            })
        })
        
    })


})

describe("Text commands",()=>{
    
    describe("PLACE 0,0 NORTH",()=>{
        it("should not fail",()=>{
            expect(()=>testRobot.processCommand("PLACE 0,0 NORTH")).not.toThrow
        })
    })
    beforeEach(() => {
        const robotPosition:RobotPosition={x:0,y:0,facing:RobotDirection.NORTH};
        testRobot.place(robotPosition);                
    });
    describe("LEFT",()=>{
        it("should not fail",()=>{
            expect(()=>testRobot.processCommand("LEFT")).not.toThrow
        })
    })
    describe("RIGHT",()=>{
        it("should not fail",()=>{
            expect(testRobot.processCommand("RIGHT")).not.toThrow
        })
    })    
    describe("REPORT",()=>{
        it("should not fail",()=>{
            expect(testRobot.processCommand("REPORT")).not.toThrow
        })       
    })
    describe("UNKNOWN COMMAND",()=>{
        it("should fail",()=>{
            expect(testRobot.processCommand("UNKNOWN COMMAND")).toThrow
        })
    })
});
nodejs-robot-simulator
=


## Description:
- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units
- There are no other obstructions on the table surface
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid	movement commands must still be allowed
- Create an application that can read in commands of the following form:
  ```
  PLACE X,Y,F
  MOVE
  LEFT
  RIGHT
  REPORT
  ```
- PLACE will put the toy robot on the table in position X,Y and facing NORTH,SOUTH, EAST or WEST
- The origin (0,0) can be considered to be the SOUTH WEST most cornerThe first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed
- MOVE will move the toy robot one unit forward in the direction it is currently Facing
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot
- REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient
- Input can be from a file, or from standard input, as the developer chooses

## Constraints
- The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any move that would cause the robot to fall must be ignored.

## Example Input and Output
 
 a)
 
 PLACE 0,0,NORTH  
  MOVE  
  REPORT
 
  Output: \`0,1,NORTH`
 
 b)
 
  PLACE 0,0,NORTH  
  LEFT  
  REPORT  
  
  Output: \`0,0,WEST`
 
 c)
 
  PLACE 1,2,EAST  
  MOVE  
  MOVE  
  LEFT  
  MOVE  
  REPORT 
  
  Output: \`3,3,NORTH`


## Installation
#### Make sure you have the latest git, Node.js and Yarn installed on your machine

```bash
$ git --version

$ yarn --version

$ node --version
```


#### Clone this repository

```bash
$ git clone https://github.com/paulbryan/nodejs-robot-simulator.git
```

#### Install node packages

```bash
$ cd nodejs-robot-simulator && yarn
```

#### Run tests

```bash
$ yarn test
```

#### Run simulator

```bash
$ yarn start
```


<!-- yarn init
yarn tsc --init --rootDir src --outDir build
yarn create react-app robot-1 --template typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest supertest jest ts-jest @types/supertest
mkdir src
yarn ts-jest config:init
yarn test --watchAll -->


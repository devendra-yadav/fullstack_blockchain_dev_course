
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract ArrayRemove{

    uint[] data = [1,2,3,4,5,6];
 
    function remove(uint _index) public {
        require(_index >= 0 && _index < data.length , "Invalid index");

        for(uint i = _index ; i<data.length-1 ; i++){
            data[i] = data[i+1];
        }
        data.pop(); 
    }

    function getData() public view returns(uint[] memory output){
        return data;
    } 

    //Adding this just for practice.
    //Not asked in assignment.
    function addElement(uint _num) public {
        data.push(_num);
    }

}
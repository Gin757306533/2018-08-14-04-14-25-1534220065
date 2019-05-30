"use strict";
module.exports = function main(nums) {
    var array_s = [
     ["._.", "|.|", "|_|"],
     ["...", "..|", "..|"],
     ["._.", "._|", "|_."],
     ["._.", "._|", "._|"],
     ["...", "|_|", "..|"],
     ["._.", "|_.", "._|"],
     ["._.", "|_.", "|_|"],
     ["._.", "..|", "..|"],
     ["._.", "|_|", "|_|"],
     ["._.", "|_|", "..|"]

    ];
    let ret_s = "";
    for (var i = 0; i < 3;i++)
    {
    	for(var j = 0; j < nums.length; j++){
    	    var n = parseInt(nums[j]);
    	    ret_s += array_s[n][i];
    	    if(j != nums.length - 1){
    	    	ret_s += ' ';
    	    }
        }
        ret_s +='\n';
    }
    return ret_s;
};
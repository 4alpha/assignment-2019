/**Here we are going to handle data using functions*/

    var fs=require("fs");
    var filename="sample.txt";

    var errHandler=err => console.log("Error details "+err);
    
    var dataHandler= data =>console.log("The data present in file is \n"+data.toString());

    /**Here we've created two different function, errHandler handles error while datahandler prints data in the file
     * Both functions use Arrow Function style
     */
    fs.readFile(filename, (err,data) =>
    {
            if(err)
            errHandler;
            dataHandler(data);
    }
    );

    console.log("Trying asynchronous programming using functional approach");
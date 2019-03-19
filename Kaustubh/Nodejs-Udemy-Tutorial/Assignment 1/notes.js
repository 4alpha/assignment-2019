const fs=require('fs');

var fileData=function()
{
	fs.readFile('notes.txt',(err,data)=>
		{
			if(err)
			{
				console.log('Error occured ',err);
			}
			else
			{				
				return data.toString();								
			}
		}
	);
}

exports.fd=fileData;

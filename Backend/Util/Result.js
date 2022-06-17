const Results = [];

 function SetResult(GameId,ClientName,Avatar,Result)
{
    const OutResult =  Results.find(result=> result.GameId ===GameId);
   
    if(OutResult)
    {
        const result = {
            ClientName : ClientName,
            Avatar:Avatar,
            Result:Result

        }
        OutResult.Result.push(result);
     
        return OutResult;
    }
    else
    {
        const result = {
            ClientName : ClientName,
            Avatar:Avatar,
            Result:Result
        }
        const  GameResult = 
        {
            GameId:GameId,
            Result:[result]
        }
       Results.push(GameResult);
    
       return GameResult;
    }
}


 function GetResult(GameId)
{
    const Result = Results.find(result=> result.GameId === GameId);
   
    return Result;
}

function SortResult(Result)
{
  
  const finalResult = Result.Result.sort((a,b)=>{ return(a.Result.Time-b.Result.Time && b.Result.Correct-a.Result.Correct)})
    
    return finalResult;
}

function DeleteResult(GameId)
{
    Results.find((Result,index)=>{
        if(Result.GameId === GameId)
        {
           const DeleteItem =  Results.splice(index,1);
           return DeleteItem;
        }
        })
        return null;
}

module.exports={
    SetResult,
    GetResult,
    SortResult,
    DeleteResult
}
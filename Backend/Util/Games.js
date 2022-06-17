const nanoID  = require('nanoid');
const Games=[];


function CreateGame(UserName,UserId,Room,GameDetails)
{
   const Game = {
       UserName,
       UserId:UserId,
       Room:Room,
       GameId:getGameID(),
       GameDetails:GameDetails
   }
   Games.push(Game);

   //console.log('Games',Games);
   return Game;
}



function GetGame(GameId)
{
   const Game =  Games.find(game=> game.GameId===GameId);
   if(Game)
   {
       return Game;
   }
}

function DeleteGame(GameId)
{
   
    Games.filter((Game,index)=>
    {
        if(Game.GameId===GameId)
        {
          const Game =Games.splice(index,1);
           //break;
           return Game;
           
        }
    })
    return null;
}



function getGameID()
{
    return nanoID.nanoid(5);
}


module.exports={
    CreateGame,
    GetGame,
    DeleteGame
}
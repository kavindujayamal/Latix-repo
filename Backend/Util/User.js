const { DeleteGame } = require("./Games");
const { DeleteResult } = require("./Result");
const Users = [];

function JoinUser(GameId, ClientId, UserName, Avatar, IsOwner) {
  const User = Users.find((GameUser) => GameUser.GameId === GameId);
  if (User) {
    const UserDetails = {
      User: UserName,
      UserId: ClientId,
      Avatar: Avatar,
      Owner: IsOwner,
      Isfinished: false,
    };

    User.User.push(UserDetails);
    return UserDetails;
  } else {
    return null;
  }
}

function CreateGameUser(GameId, ClientId, UserName, Avatar, IsOwner) {
  const User = {
    User: UserName,
    UserId: ClientId,
    Avatar: Avatar,
    Owner: IsOwner,
    Isfinished: false,
  };
  const Game = {
    GameId: GameId,
    User: [User],
  };
  Users.push(Game);
  // console.log('Game Users',Users);
  return Game;
}

function LeaveUser(ClientId) {
  let GameId;
  Users.filter((Game) => {
    Game.User.filter((user, index) => {
      if (user.UserId === ClientId) {
        // console.log('disconnect user', Game.User[index]);
        GameId = Game.GameId;
        // console.log('Game ID',Game.GameId)
        if (Game.User[index].Owner === true) {
          const Remove = Game.User.splice(index, 1);
          if (Game.User.length > 0) {
            Game.User[Game.User.length - 1].Owner = true;
            return GameId;
          } else {
            DeleteUsers(Game.GameId);
            DeleteGame(Game.GameId);
            DeleteResult(Game.GameId);
            return null;
          }
          // console.log('User Remove from list',Remove[0].User);
          // return Remove[0].User;
        } else {
          const Remove = Game.User.splice(index, 1);
          // console.log('User Remove from list',Remove[0].User);
          return GameId;
        }
      }
      return GameId;
    });
    return GameId;
  });
  return GameId;
}

function GetUsers(GameId) {
  const User = Users.find((Game) => Game.GameId === GameId);
  if (User) {
    return User;
  }
}

function DeleteUsers(GameId) {
  Users.find((user, index) => {
    if (user.GameId === GameId) {
      const item = Users.splice(index, 1);
      return item;
    }
  });
  return null;
}

function SetFinished(ClientId, GameId) {
  const Game = Users.find((Game) => Game.GameId === GameId);

  // console.log('Game In SetFinishe Fuction',Game);
  if (Game) {
    const User = Game.User.find((user) => user.UserId === ClientId);
    //  console.log('User In SetFinishe Fuction',User);
    User.Isfinished = true;
    return User;
  }
  return Game;
}

function GetFinished(GameId) {
  const User = Users.find((user) => user.GameId === GameId);
  // console.log('The User GetFinished Fuction ',User );
  if (User) {
    const Finished = User.User.filter((user) => user.Isfinished === true);

    // console.log('The GetFinished Fuction ',Finished );
    return Finished;
  } else {
    return null;
  }
}

function RestoreFinished(GameId) {
  const User = Users.find((user) => user.GameId === GameId);
  // console.log('The User GetFinished Fuction ',User );
  if (User) {
    const Finished = User.User.map((user) => (user.Isfinished = false));

    // console.log('The GetFinished Fuction ',Finished );
    return Finished;
  } else {
    return null;
  }
}

function UserFilter(User) {
  const newUser = User.map(selectFewerProps);
  return newUser;
}
function selectFewerProps(show) {
  const { User, Avatar, Owner, UserId } = show;
  return { User, Avatar, Owner, UserId};
}

function GetUser(ClientId,GameId)
{
  const User = Users.find((user) => user.GameId === GameId);
  const single = User.User.find((user) => (user.UserId === ClientId));
  return single;

}

module.exports = {
  JoinUser,
  CreateGameUser,
  LeaveUser,
  GetUsers,
  DeleteUsers,
  SetFinished,
  GetFinished,
  UserFilter,
  RestoreFinished,
  GetUser
};

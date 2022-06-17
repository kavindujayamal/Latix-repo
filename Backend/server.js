const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { CreateGame, GetGame, DeleteGame } = require("./Util/Games");
const {
  JoinUser,
  LeaveUser,
  GetUsers,
  CreateGameUser,
  DeleteUsers,
  UserFilter,
  RestoreFinished,
  GetUser,
} = require("./Util/User");
const { SetFinished, GetFinished } = require("./Util/User");
const {
  GetResult,
  SetResult,
  SortResult,
  DeleteResult,
} = require("./Util/Result");
const { log } = require("console");
const app = express();
const httpServer = http.createServer(app);

app.get("/", cors(), (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  // console.log('socket is actively connect');

  socket.on(
    "CreateGame",
    ({ GameName, UserName, Avatar, GameDetails, GameId }, callback) => {
      try {
        const Game = GetGame(GameId);
        if (Game) {
          Game.GameDetails = GameDetails;

          DeleteResult(Game.GameId);
          RestoreFinished(Game.GameId);
          callback({
            GameId: Game.GameId,
          });
          const User = GetUsers(GameId);
          const FilterUser = UserFilter(User.User);
          io.to(Game.Room).emit("UpdateGame", { IsUpdate: true });
          io.to(Game.Room).emit("GetUser", FilterUser);
        } else {
          socket.join(GameName);
          const Game = CreateGame(UserName, socket.id, GameName, GameDetails);
          const User = CreateGameUser(
            Game.GameId,
            socket.id,
            UserName,
            Avatar,
            true
          );
          //socket.emit('CreateGame',{GameId: Game.GameId});
          callback({
            GameId: Game.GameId,
          });
          const FilterUser = UserFilter(User.User);
          io.to(Game.Room).emit("GetUser", FilterUser);
          io.to(Game.Room).emit("UpdateGame", { IsUpdate: false });
        }
      } catch {
        socket.emit("Error", "Server Error or Invalid Details");
      }
    }
  );

  socket.on("JoinGame", ({ GameId, UserName, Avatar }, callback) => {
    try {
      const Game = GetGame(GameId);
      if (Game) {
        JoinUser(Game.GameId, socket.id, UserName, Avatar, false);
        socket.join(Game.Room);
        const Users = GetUsers(Game.GameId);
        // log('join game user',Users);
        callback({
          Status: 1,
          Message: "join to the Game",
        });
        const FilterUser = UserFilter(Users.User);
        io.to(Game.Room).emit("GetUser", FilterUser);
      } else {
        callback({
          Status: 0,
          Message: "Invaid GameCode!",
        });
        //socket.emit('JoinGame','Invaid GameCode!');
      }
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });

  socket.on("GetUser", ({ GameId }) => {
    try {
      const Game = GetGame(GameId);
      const Users = GetUsers(GameId);
      if (Game && Users) {
        const FilterUser = UserFilter(Users.User);
        io.to(Game.Room).emit("GetUser", FilterUser);
      } else {
        socket.emit("GetUser", "Invalid GameCode");
      }
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });

  socket.on("GetGame", ({ GameId }, callback) => {
    try {
      const Game = GetGame(GameId);
      //  const User =  DeleteUsers(GameId);
      if (Game) {
        //socket.emit('GetGame',{User,Game});
        callback({
          Status: 1,
          Message: "Game Is Pass",
        });
        io.to(Game.Room).emit("GetGame", Game.GameDetails);
      } else {
        callback({
          Status: 0,
          Message: "invalid GameId",
        });
      } //socket.emit('RemoveGame','invalid GameId');
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });

  socket.on("SetResult", ({ GameId, Results }, callback) => {
    //const Game = GetGame(GameId);
    try {
      const User = GetUser(socket.id, GameId);

      if (User.Isfinished === false) {
        const Finished = SetFinished(socket.id, GameId);
        if (Finished) {
          // console.log('SetResult user',Finished);
          //  console.log("Finishe",Finished);
          const result = SetResult(
            GameId,
            Finished.User,
            Finished.Avatar,
            Results
          );
          callback({
            Status: 1,
            Message: "result are recorded",
          });
          const Game = GetGame(GameId);
          const FinishedUser = GetFinished(GameId);
          const FilterUser = UserFilter(FinishedUser);
          io.to(Game.Room).emit("GetFinished", FilterUser);
        } else {
          //socket.emit('SetResult','Somthing Wrong!');
          callback({
            Status: 0,
            Message: "invalid GameId",
          });
        }
      } else {
        //socket.emit('SetResult','Somthing Wrong!');
        callback({
          Status: 0,
          Message: "invalid GameId",
        });
      }
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });

  socket.on("GetResult", ({ GameId }, callback) => {
    try {
      const Game = GetGame(GameId);
      if (Game) {
        const Result = GetResult(GameId);
        if (Result) {
          callback({
            Status: 1,
            Message: "results are on the way",
          });
          const FianalResult = SortResult(Result);
          io.to(Game.Room).emit("GetResult", FianalResult);
        } else {
          callback({
            Status: 0,
            Message: "Doesn't have any result to show",
          });
        }
      } else {
        callback({
          Status: 0,
          Message: "invalid GameId",
        });
        //socket.emit("GetResult","Invalid GameCode!");
      }
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });

  socket.on("GetFinished", ({ GameId }) => {
    try {
      const Game = GetGame(GameId);
      if (Game) {
        const Finished = GetFinished(GameId);
        io.to(Game.Room).emit("GetFinished", Finished);
      } else {
        socket.emit("GetFinished", "Invalid GameCode!");
      }
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });

  socket.on("disconnect", () => {
    try {
      const result = LeaveUser(socket.id);
      //log('result of disconnect',result)
      if (result) {
        const Users = GetUsers(result);
        const Game = GetGame(result);
        //console.log("users of disconnect",Users);
        if (Game) {
          const FilterUser = UserFilter(Users.User);
          io.to(Game.Room).emit("GetUser", FilterUser);
        }
      }
    } catch {
      socket.emit("Error", "Server Error or Invalid Details");
    }
  });
});

httpServer.listen(process.env.PORT || 5000, () => {
  console.log("server is running at 5000 port ....");
});

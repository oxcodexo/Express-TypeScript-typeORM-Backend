import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

const getUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.json(await userRepository.find());
};

const register = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { firstName, lastName } = request.body;
  const user = Object.assign(new User(), {
    firstName,
    lastName,
  });

  const newUser = await userRepository.save(user);
  response.json({ newUser });
};

export { getUsers, register };

// async one(request: Request, response: Response, next: NextFunction) {
//   const id = parseInt(request.params.id);

//   const user = await this.userRepository.findOne({
//     where: { id },
//   });

//   if (!user) {
//     return "unregistered user";
//   }
//   return user;
// }

// async remove(request: Request, response: Response, next: NextFunction) {
//   const id = parseInt(request.params.id);

//   let userToRemove = await this.userRepository.findOneBy({ id });

//   if (!userToRemove) {
//     return "this user not exist";
//   }

//   await this.userRepository.remove(userToRemove);

//   return "user has been removed";
// }

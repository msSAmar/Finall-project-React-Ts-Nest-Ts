import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from '../classes/student';
import { User } from '../schemas/user.schema';
import { max } from 'rxjs';

@Injectable()
export class StudentService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(createUser: Student): Promise<User> {
    console.log(createUser);
    const createdUser = await this.userModel.create(createUser);
    return createdUser;
  }


  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByEmail(mail: string): Promise<User> {
    return this.userModel.findOne({ email: mail }).exec();
  }
  async findByPassword(Userpassword: string): Promise<User> {
    return this.userModel.findOne({ password: Userpassword }).exec();
  }
  async findById(UserId: string): Promise<User> {
    return this.userModel.findOne({_Id : UserId }).exec();
  }


  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
  async updateLevel(id: string, level: number) {
    console.log(level,id);
    const user=await this.userModel.findById(id);
    user.stars = 0;
    this.userModel.updateOne({
      _id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      password: user.password,
      stars: 3
    });
   console.log(user.stars);
  
    return user;
  }
}

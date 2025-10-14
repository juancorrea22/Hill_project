import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserRepository, IUserService, User, UserDocument } from "types/UsersTypes";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async findUserByGmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ email });
  }

  async findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUsersById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUser(id: string, user: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }

  async userLogin(name: string, password: string): Promise<{ user: User; token: string } | null> {
  const user = await this.userRepository.findOne({ name }) as UserDocument;
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  const token = jwt.sign(
    { id: user._id, name: user.name },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  const safeUser = user.toObject();
  delete safeUser.password;

  return { user: safeUser, token };
}
}

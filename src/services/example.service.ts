import { User } from 'src/entities/user.entity';
import { Inject, Service } from 'typedi';
import { Repository } from 'typeorm';

@Service()
export class ExampleService {
  constructor(
    @Inject('User')
    private userRepository: Repository<User>,
  ) {}

  async someMethod(userId: string | undefined) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    return `Hello ${user?.name}!`;
  }
}

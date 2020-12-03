import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';
import { JwtService } from '../jwt/jwt.service';
import { MailService } from '../mail/mail.service';
import { Repository } from 'typeorm/index';
import mock = jest.mock;

const mockRepository = () => ({
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
  delete: jest.fn(),
});

const mockJwtService = {
  sign: jest.fn(() => 'signed-token'),
  verify: jest.fn(),
};

const mockMailService = {
  sendVerificationEmail: jest.fn(),
};

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: MockRepository<User>;
  let verificationRepository: MockRepository<Verification>;
  let jwtService: JwtService;
  let mailService: MailService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository(),
        },
        {
          provide: getRepositoryToken(Verification),
          useValue: mockRepository(),
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: MailService,
          useValue: mockMailService,
        },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
    usersRepository = module.get(getRepositoryToken(User));
    verificationRepository = module.get(getRepositoryToken(Verification));
    jwtService = module.get<JwtService>(JwtService);
    mailService = module.get<MailService>(MailService);
  });

  it('be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAccount', () => {
    const createAccountArgs = {
      email: 'lloyd@gmail.com',
      password: '1234',
      role: 0,
    };
    it('should fail if user exists', async () => {
      usersRepository.findOne.mockResolvedValue({
        id: 1,
        email: 'lloyd@gmail.com',
      });
      const user = await service.createAccount(createAccountArgs);
      expect(user).toMatchObject({
        ok: false,
        error: 'There is a user with that email already',
      });
    });

    it('should create an account', async () => {
      usersRepository.findOne.mockResolvedValue(undefined);
      usersRepository.create.mockReturnValue(createAccountArgs);
      usersRepository.save.mockResolvedValue(createAccountArgs);
      verificationRepository.create.mockReturnValue({
        user: createAccountArgs,
      });
      verificationRepository.save.mockResolvedValue({
        code: '123123',
      });
      const user = await service.createAccount(createAccountArgs);

      expect(usersRepository.create).toHaveBeenCalledTimes(1);
      expect(usersRepository.create).toHaveBeenCalledWith(createAccountArgs);

      expect(usersRepository.save).toHaveBeenCalledTimes(1);
      expect(usersRepository.save).toHaveBeenCalledWith(createAccountArgs);

      expect(verificationRepository.create).toHaveBeenCalledTimes(1);
      expect(verificationRepository.create).toHaveBeenCalledWith({
        user: createAccountArgs,
      });

      expect(verificationRepository.save).toHaveBeenCalledTimes(1);
      expect(verificationRepository.save).toHaveBeenCalledWith({
        user: createAccountArgs,
      });

      expect(mailService.sendVerificationEmail).toBeCalled();
      expect(mailService.sendVerificationEmail).toBeCalledWith(
        expect.any(String),
        expect.any(String),
        expect.any(String),
      );
      expect(user).toEqual({ ok: true });
    });

    it('should fail on exception', async () => {
      usersRepository.findOne.mockRejectedValue({
        ok: false,
        error: "Couldn't create an account",
      });
      const result = await service.createAccount(createAccountArgs);
      expect(result).toEqual({
        ok: false,
        error: "Couldn't create an account",
      });
    });
  });

  describe('login', () => {
    const loginArgs = {
      email: 'lloyd@gmail.com',
      password: '121212',
    };
    it('should failed if user is not found with provided email', async () => {
      usersRepository.findOne.mockResolvedValue(null);
      const result = await service.login(loginArgs);
      expect(usersRepository.findOne).toHaveBeenCalledTimes(1);
      expect(usersRepository.findOne).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
      );
      expect(result).toEqual({
        ok: false,
        error: 'User not found',
      });
    });

    it('should failed if the password is wrong', async () => {
      const mockedUser = {
        checkPassword: jest.fn(() => Promise.resolve(false)),
      };
      usersRepository.findOne.mockResolvedValue(mockedUser);
      const result = await service.login(loginArgs);
      expect(result).toEqual({
        ok: false,
        error: 'Wrong password',
      });
    });

    it('should return token if login success', async () => {
      const mockedUser = {
        id: 1,
        checkPassword: jest.fn(() => Promise.resolve(true)),
      };
      usersRepository.findOne.mockResolvedValue(mockedUser);
      const result = await service.login(loginArgs);
      expect(jwtService.sign).toHaveReturnedWith('signed-token');
      expect(jwtService.sign).toHaveBeenCalledTimes(1);
      expect(jwtService.sign).toHaveBeenCalledWith(mockedUser.id);
      expect(result).toEqual({
        ok: true,
        token: 'signed-token',
      });
    });

    it('should failed when error thrown', async () => {
      usersRepository.findOne.mockRejectedValue(null);
      const result = await service.login(loginArgs);
      expect(result).toEqual({
        ok: false,
        error: null,
      });
    });
  });

  describe('findById', () => {
    it('should return user if user found', async () => {
      const mockedUser = {
        id: 1,
      };
      usersRepository.findOne.mockResolvedValue(mockedUser);
      const result = await service.findById(1);
      expect(result).toEqual({
        ok: true,
        user: mockedUser,
      });
    });
    it('should failed when user is not found', async () => {
      usersRepository.findOne.mockRejectedValue({
        ok: false,
        error: 'User not Found',
      });
      const result = await service.findById(1);
      expect(result).toEqual({
        ok: false,
        error: 'User not Found',
      });
    });
  });

  describe('editProfile', () => {
    it('should change email', async () => {
      const oldUser = {
        userId: 1,
        email: 'bs@gmail.com',
        verified: true,
      };
      const editProfileArgs = {
        userId: 1,
        input: { email: 'bs@new.com' },
      };
      const newVerification = {
        code: 'code',
      };
      const newUser = {
        verified: false,
        userId: 1,
        email: editProfileArgs.input.email,
      };

      usersRepository.findOne.mockResolvedValue(oldUser);
      verificationRepository.create.mockReturnValue(newVerification);
      verificationRepository.save.mockResolvedValue(newVerification);

      await service.editProfile(editProfileArgs.userId, editProfileArgs.input);

      expect(usersRepository.findOne).toHaveBeenCalled();
      expect(usersRepository.findOne).toHaveBeenCalledWith(oldUser.userId);
      expect(verificationRepository.create).toHaveBeenCalledWith({
        user: newUser,
      });
      expect(verificationRepository.save).toHaveBeenCalledWith(newVerification);

      expect(mailService.sendVerificationEmail).toHaveBeenCalledWith(
        newUser.email,
        'lloyd.park88@gmail.com',
        newVerification.code,
      );
    });

    it('should change password', async () => {
      const editProfileArgs = {
        userId: 1,
        input: { password: 'new.password' },
      };
      usersRepository.findOne.mockResolvedValue({ password: 'old' });
      const result = await service.editProfile(
        editProfileArgs.userId,
        editProfileArgs.input,
      );
      expect(usersRepository.save).toHaveBeenCalledTimes(1);
      expect(usersRepository.save).toHaveBeenCalledWith(editProfileArgs.input);
      expect(result).toEqual({ ok: true });
    });

    it('should failed and return error when user is not found', async () => {
      const mockedUser = {
        id: 1,
        password: '121212',
      };
      usersRepository.findOne.mockRejectedValue('User not Found');

      const result = await service.editProfile(mockedUser.id, {
        email: undefined,
      });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('should fail on exception', async () => {
      usersRepository.findOne.mockRejectedValue('Could not update profile.');
      const result = await service.editProfile(1, { email: '12' });
      expect(result).toEqual({ ok: false, error: 'Could not update profile.' });
    });
  });

  describe('verifyEmail', () => {
    it('should send verification email', async () => {
      const mockedUser = {
        id: 1,
        email: 'lloyd@gmail.com',
        password: '121212',
        verified: false,
      };
      const mockVerification = {
        code: '123123123',
        user: mockedUser,
      };
      verificationRepository.findOne.mockResolvedValue(mockVerification);
      const result = await service.verifyEmail(mockVerification.code);
      expect(result).toEqual({
        ok: true,
      });
    });

    it('should failed if verification is null', async () => {
      const mockVerification = {
        code: '123123123',
      };
      verificationRepository.findOne.mockReturnValue(null);
      const result = await service.verifyEmail(mockVerification.code);
      expect(result).toEqual({
        ok: false,
        error: 'Verification not found.',
      });
    });

    it('should failed and return error when something went wrong', async () => {
      const mockVerification = {
        code: '123123123',
      };
      verificationRepository.findOne.mockRejectedValue('Error');
      const result = await service.verifyEmail(mockVerification.code);
      expect(result).toEqual({
        ok: false,
        error: expect.any(String),
      });
    });
  });
});

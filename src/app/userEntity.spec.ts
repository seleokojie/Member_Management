import { UserEntity } from './userEntity';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserEntity()).toBeTruthy();
  });
});

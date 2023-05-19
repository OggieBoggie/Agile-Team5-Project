const {
    getUserByEmailIdAndPassword,
    getUserById,
  } = require('../controller/userController');
  
  const userModel = require('../models/userModel').userModel;
  jest.mock('../models/userModel', () => ({
    userModel: {
      findOne: jest.fn(),
      findById: jest.fn(),
    },
  }));
  
  describe('Get User', () => {
    beforeEach(() => {
      userModel.findOne.mockClear();
      userModel.findById.mockClear();
    });
  
    describe('getUserByEmailIdAndPassword', () => {
      it('returns correct user with correct ID', () => {
        const email = 'johndoe@gmail.com';
        const password = '123';

        const ea = "14"
        const ps = "12"

        // create mockUser data
        const mockUser = {
          ea,
          ps,
        };

        // try to find mockUser data
        userModel.findOne.mockReturnValueOnce(mockUser);
        
        // call email function and pass in the email and password
        const result = getUserByEmailIdAndPassword(email, password);

        // assertions, expect the function to return the mockUser, and called with email
        expect(result).toEqual(mockUser);
        expect(userModel.findOne).toHaveBeenCalledWith(email);
      });
  
      it('does not return anything (null) if incorrect user is provided', () => {
        const email = 'johndoe@gmail.com';
        const password = 'xd';

        userModel.findOne.mockReturnValueOnce(null);
  
        const result = getUserByEmailIdAndPassword(email, password);

        // assertions, expect the function to return null, and called with email function
        expect(result).toBeNull();
        expect(userModel.findOne).toHaveBeenCalledWith(email);
      });
    });
  
    describe('getUserById', () => {
      it('returns the correct user if correct ID is given', () => {
        const id = '12345';

        const mockUser = {
          id,
          name: 'Mary Sue',
        };

        userModel.findById.mockReturnValueOnce(mockUser);
        
        // create instance of function
        const result = getUserById(id);
  
        // assertions, expect the function to return the mockUser, and called with id function
        expect(result).toEqual(mockUser);
        expect(userModel.findById).toHaveBeenCalledWith(id);
      });
  
      it('does not return anything (null) if ID is invalid', () => {
        const id = 'xd';
        userModel.findById.mockReturnValueOnce(null);
        
        // create instance of function
        const result = getUserById(id);

        // assertions, expect the function to return null, and called with id function
        expect(result).toBeNull();
        expect(userModel.findById).toHaveBeenCalledWith(id);
      });
    });
  });
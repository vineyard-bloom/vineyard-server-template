import { requestTypes, responseTypes } from './api-types';
export declare const userRequestHandler: {
    loginUser: (req: requestTypes.LoginUserRequest) => Promise<responseTypes.LoginUserResponse>;
};
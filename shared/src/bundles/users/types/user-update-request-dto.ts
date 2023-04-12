import { type Gender } from '../enums/enums';

type UserUpdateRequestDto = {
    email: string;
    firstName: string;
    lastName: string;
    sex: Gender;
    dateOfBirth: string;
    language: string;
    currency: string;
};

export { type UserUpdateRequestDto };

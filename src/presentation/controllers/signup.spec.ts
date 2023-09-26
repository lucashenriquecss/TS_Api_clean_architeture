import { SignUpController } from "./signup";
import  {MissingParamError} from '../errors/missing-param-error'
import { InvalidParamError } from "../errors/invalid-param-error";
import {EmailValidator} from "../protocols/emailValidator"


interface SutTypes{
    sut:SignUpController
    emailValidatorSub:EmailValidator
}
const makeSut = (): SutTypes =>{
    class EmailValidatorStub implements EmailValidator { 
        isValid(email: string): boolean{
            return true
        }
    }
    const  emailValidatorSub = new EmailValidatorStub();
    const sut =  new SignUpController(emailValidatorSub)
    return {
        sut,
        emailValidatorSub
    }
}


describe('SignUp Controller' ,()=> {
    test('Should return 400 if no name is provided', ()=> {
        const {sut} = makeSut();
        const httpRequest = {
            body:{
                email:'email@example.com',
                password :'password',
                passwordConfirmation:'password'
            }
        }
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError('name'));
    });
});


describe('SignUp Controller' ,()=> {
    test('Should return 400 if no email is provided', ()=> {
        const {sut} = makeSut();
        const httpRequest = {
            body:{
                name: 'name',
                password :'password',
                passwordConfirmation:'password'
            }
        }
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError('email'));
    });
})


describe('SignUp Controller' ,()=> {
    test('Should return 400 if no password is provided', ()=> {
        const {sut} = makeSut();
        const httpRequest = {
            body:{
                name: 'name',
                email:'email@example.com',
                passwordConfirmation:'password'
            }
        }
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError('password'));
    });
})
describe('SignUp Controller' ,()=> {
    test('Should return 400 if no passwordConfirmation is provided', ()=> {
        const {sut} = makeSut();
        const httpRequest = {
            body:{
                name: 'name',
                email:'email@example.com',
                password :'password',
               
            }
        }
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'));
    });
})


describe('SignUp Controller' ,()=> {
    test('Should return 400 if an invalid email is provided', ()=> {
        const {sut, emailValidatorSub} = makeSut()
        jest.spyOn(emailValidatorSub,'isValid').mockReturnValueOnce(false)
        const httpRequest = {
            body:{
                name: 'name',
                email:'invalid@mail.com',
                password :'password',
                passwordConfirmation:'password'
            }
        }
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new InvalidParamError('email'));
    });
})
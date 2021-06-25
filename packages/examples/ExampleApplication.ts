import Core from "@node-spring/core";
import UserController from './controllers/UserController';
import 'reflect-metadata';

const {
  ExpressApplication,
  InjectArgument
} = Core;

console.log(InjectArgument);

@ExpressApplication()
class Application  {

    @InjectArgument('NodeSpringApplication') nodeSpringApplication: any;

    // todo scan all the controllers automatically so we dont need to inject it manually
    @InjectArgument('UserController') userController: UserController;

    constructor(){
        // this.nodeSpringApplication.init();
        this.nodeSpringApplication.run();
    }

}


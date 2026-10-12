import {test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

test('login test' , async ({page})=>{
const loginPage = new LoginPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('standard_user','secret_sauce');


});
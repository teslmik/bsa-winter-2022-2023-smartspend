import { AppRoute } from '../../enums/enums.js';

const getText = (pathname: string, type: string): string => {
    type Propertys = Record<string, string>;

    const titles: Propertys = {
        [AppRoute.SIGN_IN]: 'Log In',
        [AppRoute.SIGN_UP]: 'Sign Up',
    };

    const headerText: Propertys = {
        [AppRoute.SIGN_IN]: 'No account?',
        [AppRoute.SIGN_UP]: 'Have an account?',
    };

    const headers: Propertys = {
        [AppRoute.SIGN_IN]: 'Sign Up',
        [AppRoute.SIGN_UP]: 'Log In',
    };

    const footers: Propertys = {
        [AppRoute.SIGN_IN]: 'Or Log In with',
        [AppRoute.SIGN_UP]: 'Or Sign Up with',
    };

    switch (type) {
        case 'title': {
            return titles[pathname] || '';
        }
        case 'header': {
            return headers[pathname] || '';
        }
        case 'headerText': {
            return headerText[pathname] || '';
        }
        case 'footer': {
            return footers[pathname] || '';
        }
        default: {
            return '';
        }
    }
};

export { getText };

import React from 'react';
import renderer from 'react-test-renderer';
import { MainMenu } from '../MainMenu';
import { MainMenuButton } from '../MainMenuButton';
import { BurgerButton } from '../Burger';
import ReactDOM from "react-dom";

describe('MainMenu', () => {
    const oldPortal = ReactDOM.createPortal;

    beforeAll(() => {
        ReactDOM.createPortal = node => node as any;
    });

    afterAll(() => {
        ReactDOM.createPortal = oldPortal;
    });

    it('should be rendered correctly', () => {
        const tree = renderer
            .create(<MainMenu>
                <MainMenuButton />
            </MainMenu>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        const tree = renderer
            .create(<MainMenu
                renderBurger={ () => <BurgerButton /> }
                logoLink={ { pathname: '/' } }
                appLogoUrl=''
                logoWidth={ 120 }
                isTransparent
                serverBadge='Dev'
                tooltipTechInfo='Tech Info'
            >
                <MainMenuButton />
            </MainMenu>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});



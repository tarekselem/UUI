import * as React from 'react';
import { EditableDocContent, DocExample, BaseDocsBlock, UUI3, UUI4 } from '../common';

export class MainMenuDoc extends BaseDocsBlock {
    title = 'Main Menu';

    getPropsDocPath() {
        return {
            [UUI3]: './loveship/components/navigation/docs/mainMenu.doc.tsx',
            [UUI4]: './epam-promo/components/navigation/docs/mainMenu.doc.tsx',
        };
    }

    renderContent() {
        return (
            <>
                <EditableDocContent fileName='mainMenu-descriptions' />
                { this.renderSectionTitle('Examples') }
                <DocExample
                    title='Basic'
                    path='./examples/mainMenu/Basic.example.tsx'
                    width='auto'
                />

                <DocExample
                    title='Responsive'
                    path='./examples/mainMenu/Responsive.example.tsx'
                    width='auto'
                />
            </>
        );
    }
}
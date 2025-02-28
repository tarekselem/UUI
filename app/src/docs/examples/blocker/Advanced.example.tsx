import React from 'react';
import { Blocker, Button, DatePicker, FlexCell, FlexRow, FlexSpacer, LabeledInput, NumericInput, TextInput } from '@epam/promo';
import css from './BasicExample.scss';

export default function AdvancedExample() {
    const isLoading = true;

    const renderForm = () => {
        return (
            <FlexCell minWidth={ 520 } cx={ css.form } >
                <FlexRow spacing='12' padding='24' vPadding='24'>
                    <LabeledInput label='Name' >
                        <TextInput value={ 'Alex' }  onValueChange={ undefined }/>
                    </LabeledInput>
                    <LabeledInput label='Country' >
                        <TextInput value={ 'Belarus' }  onValueChange={ null }/>
                    </LabeledInput>
                </FlexRow>
                <FlexRow spacing='12' padding='24' vPadding='24'>
                    <LabeledInput label='Age' >
                        <NumericInput max={ 100 } min={ 0 } value={ 20 } onValueChange={ null }/>
                    </LabeledInput>
                    <LabeledInput label='Country' >
                        <DatePicker format={ 'DD/MM/YYYY' } value={ '2042-11-20' }  onValueChange={ null }/>
                    </LabeledInput>
                </FlexRow>
                <FlexRow spacing='12' padding='24' vPadding='24'>
                    <FlexSpacer/>
                    <Button color='green' caption='Submit'/>
                    <Button color='blue' fill='none'  caption='Cancel'/>
                </FlexRow>
            </FlexCell>
        );
    };

    return (
        <div className={ css.root } >
            { renderForm() }
            { isLoading && <Blocker isEnabled={ isLoading } hideSpinner={ true } spacerHeight={ 350 } /> }
        </div>
    );
}
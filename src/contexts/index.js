import React from 'react';
import {AppProvider } from './appcontext'
import { KitchenProvider } from './kitchencontext'

const ApplicationProvider = props => {
    return (
        <KitchenProvider>
            <AppProvider>
                {props.children}
            </AppProvider>
        </KitchenProvider>
    )
}

export default ApplicationProvider

/**
 * Created by dilunika on 11/04/17.
 */
import * as React from 'react';

export = ReactDtl;
export as namespace ReactDtl;

declare namespace ReactDtl {

    interface DisplayProps {
        text: string;
    }

    class Display extends React.Component<DisplayProps, any> {}

    class RandomNumberDisplay extends React.Component<void, void> {}
}

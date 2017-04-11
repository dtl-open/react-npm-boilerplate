/**
 * Created by dilunika on 11/04/17.
 */
import * as React from 'react';

export = RandomNumberDisplay;
export as namespace RandomNumberDisplay;

declare namespace RandomNumberDisplay {

    interface DisplayProps {
        text: string;
    }

    type RandomNumberDisplay = React.ClassicComponent<{},{}>;
    var RandomNumberDisplay: React.ClassicComponentClass<void>;

    type Display = React.ClassicComponent<DisplayProps,{}>;
    var Display: React.ClassicComponentClass<DisplayProps>;

}

import { FC, MutableRefObject } from 'react';
import { IOptions } from '../Types';
import { ISaveForm } from '@palmyralabs/rt-forms';
interface IFormInput {
    options: IOptions;
    id: string;
    FORMLET: FC;
    storeFactory: any;
    handleKeyPress: (event: any) => void;
    setValid: (s: any) => void;
    formRef: MutableRefObject<ISaveForm>;
}
declare function EditForm(props: IFormInput): import("react/jsx-runtime").JSX.Element;
export { EditForm };

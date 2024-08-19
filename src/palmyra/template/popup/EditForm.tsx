import { FC, MutableRefObject, useContext } from "react";
import { IOptions } from "../Types";
import { ISaveForm, PalmyraEditForm, StoreFactoryContext } from "@palmyralabs/rt-forms";


interface IFormInput {
    options: IOptions,
    id: string,
    FORMLET: FC
    storeFactory: any
    handleKeyPress: (event: any) => void,
    setValid: (s: any) => void,
    formRef: MutableRefObject<ISaveForm>
}

function EditForm(props: IFormInput) {
    const storeFactory = props.storeFactory || useContext(StoreFactoryContext);
    const id = props.id;
    const { handleKeyPress, setValid, formRef } = props;
    const Children = props.FORMLET;
    return (
        <form onKeyDown={handleKeyPress}>
            <PalmyraEditForm onValidChange={setValid} ref={formRef} storeFactory={storeFactory}
                {...props.options} id={id}>
                <Children />
            </PalmyraEditForm>
        </form>
    );
}

export { EditForm };
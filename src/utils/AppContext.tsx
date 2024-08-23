import { createContext, FC, PropsWithChildren, SetStateAction, useState } from "react";

interface ICustomer {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
}

export const Context = createContext<ICustomer>({
    name: "",
    setName: () => {}
})

export const AppContext:FC<PropsWithChildren> = (props) => {
    const [name, setName] = useState('');
    const sendObj = {name, setName}

    return (
        <Context.Provider value={sendObj}>
            {props.children}
        </Context.Provider>
    )
}
import { createContext, FC, PropsWithChildren, SetStateAction, useEffect, useState } from "react";

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

    const [lang, setLang] = useState('');
    
    useEffect(() => {
        // localstrage bak icinde language ne gelirse onu dondur tr veya en falan
        // eger ki yoksa default olarak bir dil belirleyip defaultu bastirmak lazim
    }, [lang]);

    return (
        <Context.Provider value={sendObj}>
            {props.children}
        </Context.Provider>
    )
}
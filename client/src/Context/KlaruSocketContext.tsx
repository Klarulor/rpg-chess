import React, {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {KlaruSocketClient, MyRequestMessage, MyResponseMessage} from "klarusocket";

type KlaruSocketContext = {
    subscribe: (key: string, callback: ((message: MyRequestMessage) => any)) => void
    get: (keyword: string, content: any) => Promise<MyResponseMessage | null>
}

export const KlaruSocketContext = React.createContext({} as KlaruSocketContext);

export const KlaruSocketProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [client, setClient] = useState<KlaruSocketClient>();

    useEffect(() => {
        setClient(new KlaruSocketClient(''+(Math.random() * Date.now())));
    }, [])

    useEffect(() => {
        client?.connect(4000, 'localhost')
    }, [client])

    const subscribe = useCallback((key: string, callback: ((message: MyRequestMessage) => any)) => {
        if(!client) return null;
        return client.subscribe(key, callback);
    }, [client])

    const get = useCallback(async (keyword: string, content: any) => {
        if(!client) return null;
        return client.get(keyword, content);
    }, [client])

    return <KlaruSocketContext.Provider value={{subscribe, get}}>
        {children}
    </KlaruSocketContext.Provider>
}
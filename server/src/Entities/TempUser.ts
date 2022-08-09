import {KlaruClient} from "klarusocket";

export class TempUser{
    public readonly client: KlaruClient;
    public readonly nickname: string;
    constructor(client: KlaruClient, nickname?: string) {
        this.client = client;
        this.nickname = nickname ?? "OWNER";
    }

}
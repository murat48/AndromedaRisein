import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Murat Example Project",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-10-27T19:01:01.148Z",
    id: "andromeda",
    collections: [

        {
            marketplace: "andr1wcpaymvxj4yzxusv6rv0z9nmsk552wuz4mswudd25kr6k9mq2taqqk58yu",
            cw721: "andr17suqy798h2frdu0j40e3u8tmymy7fkevlup5e89nfwmr3lhr3gvqxm2vuz",
            name: "Hotel Collection",
            id: "embeddables-marketplace-1",
            type: ICollectionType.MARKETPLACE,
            featured: "HTL"
        },
        {
            marketplace: "andr1kzzweguv8sd7n6wg4vkv2f2pghc0kjgzl8tp2d4f6mfy9v0asyxqul73rx",
            cw721: "andr1azewa9ck2kzahmnuhh39jywjrueaxc7rwtssawpn6l8uhy7vdl0qqjjc32",
            name: "Yacht Collection",
            id: "embeddables-marketplace-2",
            type: ICollectionType.MARKETPLACE,
            featured: "YCHT"
        },

        {
            auction: "andr1tte6c8qysg3eaqumd6gfts8fzn0gq6l5tu0xlg9egxzsa88ckgfsxhac9g",
            cw721: "andr1gqux9hz74ua5ar825t5avgqmka0y8f7c6z6vu5uzgpdxtspjle6sup6gwa",
            name: "Car Collection",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "PRSC"
        },
        {
            exchange:
                "andr1unpc20fwl86hze3jhhwm48kk64l3zyvt5u2wt874nutaunhrcnqs2xmyus",
            cw20: "andr1ycya6l6mtfm6tk9ntwv7nrg8cqvdqq5q44u5xxtehddmyu8rj6dq2c25z5",
            name: "MURAT TOKEN EXCHANGE",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },


    ],
};

export default CONFIG;

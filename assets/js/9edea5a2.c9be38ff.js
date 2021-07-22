(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[820],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3313:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={},s="Exchange Guide",c={unversionedId:"guides/exchange_guide",id:"guides/exchange_guide",isDocsHomePage:!1,title:"Exchange Guide",description:"The IOTA Wallet Library",source:"@site/docs/guides/exchange_guide.md",sourceDirName:"guides",slug:"/guides/exchange_guide",permalink:"/guides/exchange_guide",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/guides/exchange_guide.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Developer Guide to Chrysalis",permalink:"/guides/dev_guide"},next:{title:"Chrysalis Migration",permalink:"/guides/token_guide"}},d=[{value:"The IOTA Wallet Library",id:"the-iota-wallet-library",children:[]},{value:"How Do I Implement It to My Exchange?",id:"how-do-i-implement-it-to-my-exchange",children:[{value:"Multi Account Approach",id:"multi-account-approach",children:[]},{value:"Single Account Approach",id:"single-account-approach",children:[]}]},{value:"Implementation Guide",id:"implementation-guide",children:[]},{value:"How Does it Work?",id:"how-does-it-work",children:[{value:"1. Set up the Wallet Library",id:"1-set-up-the-wallet-library",children:[]},{value:"2. Create an Account For a User",id:"2-create-an-account-for-a-user",children:[]},{value:"3. Generate a User Address to Deposit Funds",id:"3-generate-a-user-address-to-deposit-funds",children:[]},{value:"4. Listen to Events",id:"4-listen-to-events",children:[]},{value:"5. Check the Account Balance",id:"5-check-the-account-balance",children:[]},{value:"6. Enable Withdrawals",id:"6-enable-withdrawals",children:[]}]}],u={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exchange-guide"},"Exchange Guide"),(0,i.kt)("h2",{id:"the-iota-wallet-library"},"The IOTA Wallet Library"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Easily integrate IOTA with your exchange, custody solution, or product.")),(0,i.kt)("p",null,"IOTA is built on an architecture that was designed to be the backbone of the Internet of Things (IoT) environment of the future. But this architecture has made it more challenging for service providers like exchanges to integrate IOTA compared to traditional blockchain-based distributed ledgers."),(0,i.kt)("p",null,"Within the Chrysalis update (also known as IOTA 1.5), some building blocks were changed to be more approachable and more aligned with currently leveraged standards. We also ship many ",(0,i.kt)("a",{parentName:"p",href:"/libraries/"},"client libraries")," to help developers implement IOTA into their applications:\n",(0,i.kt)("img",{alt:"layers",src:n(2354).Z})),(0,i.kt)("h2",{id:"how-do-i-implement-it-to-my-exchange"},"How Do I Implement It to My Exchange?"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/libraries/wallet"},"wallet.rs"),", we use an account model so you can create an account for each of your users. Another approach would be to use one account and generate multiple addresses, which you can then link to the users in your database. The wallet library is designed to be as flexible as possible to back up any of your use cases."),(0,i.kt)("p",null,"Since IOTA addresses in the Chrysalis network are perfectly reusable, they can be mapped to your users in a clear and concise way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an account for every user -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Multi Account")," approach."),(0,i.kt)("li",{parentName:"ul"},"Create one account with many addresses -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Single account")," approach.")),(0,i.kt)("p",null,"The library supports derivation for multiple accounts from a single seed. An account is simply a deterministic identifier from which multiple addresses can be further derived. "),(0,i.kt)("p",null,"The library also allows consumers to assign a meaningful alias to each account. In addition to this, generated individual accounts can be also searched via generated addresses. This means it does not matter whether aliases or addresses are known as the search for the related account is very straightforward using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library."),(0,i.kt)("p",null,"It also leaves the choice to users if they want to segregate their funds across multiple accounts or multiple addresses. The following illustration outlines the relationships between seed, accounts, and addresses: "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"accounts",src:n(6923).Z})),(0,i.kt)("h3",{id:"multi-account-approach"},"Multi Account Approach"),(0,i.kt)("p",null,"The multi account approach is used to create an account for each individual user. The created accounts can then be linked to the internal user IDs as an account alias, which are distinctly separated."),(0,i.kt)("h3",{id:"single-account-approach"},"Single Account Approach"),(0,i.kt)("p",null,"The single account approach allows for just one account and creates addresses for each individual user. The associated addresses are then linked to the internal user IDs and store who owns which address in the database. Most exchanges are more familiar with the single account approach and find it easier to use, implement, and backup."),(0,i.kt)("h2",{id:"implementation-guide"},"Implementation Guide"),(0,i.kt)("p",null,"This guide explains how to use the IOTA Wallet Library to successfully implement IOTA into an exchange. If you already implemented the IOTA Hub, please visit the ",(0,i.kt)("a",{parentName:"p",href:"/guides/hub_guide"},"Hub Migration Guide"),"."),(0,i.kt)("p",null,"Features of the Wallet Library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secure seed management."),(0,i.kt)("li",{parentName:"ul"},"Account management (with multiple accounts and multiple addresses)."),(0,i.kt)("li",{parentName:"ul"},"Confirmation monitoring."),(0,i.kt)("li",{parentName:"ul"},"Deposit address monitoring."),(0,i.kt)("li",{parentName:"ul"},"Backup and restore functionality.")),(0,i.kt)("h2",{id:"how-does-it-work"},"How Does it Work?"),(0,i.kt)("p",null,"The Wallet Library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions. It offers abstractions to handle IOTA payments and can optionally interact with the IOTA Stronghold for seed handling, seed storage, and state backup. Alternatively, you can use a SQLite database; however, using the Stronghold component is highly recommended due to the most advanced level of security being applied."),(0,i.kt)("p",null,"For further reference, you can see the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org"},"full documentation here"),"."),(0,i.kt)("p",null,"The following examples cover the ",(0,i.kt)("em",{parentName:"p"},"multi account approach")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeJS")," binding:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up the Wallet Library."),(0,i.kt)("li",{parentName:"ol"},"Create an account for each user."),(0,i.kt)("li",{parentName:"ol"},"Generate a user address for deposits."),(0,i.kt)("li",{parentName:"ol"},"Listen to events."),(0,i.kt)("li",{parentName:"ol"},"Check the user balance."),(0,i.kt)("li",{parentName:"ol"},"Enable withdrawals.")),(0,i.kt)("p",null,":::Note"),(0,i.kt)("p",null,"If you are looking for other languages, please read the ",(0,i.kt)("a",{parentName:"p",href:"/libraries/wallet"},"wallet library overview"),"."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"Since all ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," bindings are based on core principles provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, the outlined approach is very similar regardless of the programming language of your choice."),(0,i.kt)("h3",{id:"1-set-up-the-wallet-library"},"1. Set up the Wallet Library"),(0,i.kt)("p",null,"First, let's install the components that are needed to use ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," and the binding of your choice; it may vary a bit from language to language. In the case of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeJs")," binding, it is quite straightforward since it is distributed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," package manager. We also recommend you use ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv")," for password management."),(0,i.kt)("p",null,"For further reference, read more about ",(0,i.kt)("a",{parentName:"p",href:"/guides/backup_security"},"backup and security here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/wallet dotenv\ntouch .env\n")),(0,i.kt)("p",null,"Then, input your password to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\n')),(0,i.kt)("p",null,"Once you have everything needed to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, it is necessary to initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountManager")," instance which creates (opens) a secure storage for individual accounts (backed up by ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold")," by default)."),(0,i.kt)("p",null,"The storage is encrypted at rest, so you need a strong password and location where to put your storage. "),(0,i.kt)("p",null,":::Note"),(0,i.kt)("p",null,"Manage your password with the utmost care."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,'Technically speaking, "storage" means a single file called ',(0,i.kt)("inlineCode",{parentName:"p"},"wallet.stronghold"),". It is also needed to generate a seed (mnemonic) that serves as a cryptographic key from which all accounts and related addresses are generated."),(0,i.kt)("p",null,"One of the key principles behind the ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold"),"-based storage is that no one can get a seed from the storage. You deal with all the accounts purely via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Account_Manager")," instance where all complexities are hidden under the hood and are dealt with securely. In case you would also like to store a seed somewhere else, there is another method, ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountManager.generateMnemonic()"),", that generates random seeds. This method can be leveraged before the actual account initialization."),(0,i.kt)("p",null,":::Note"),(0,i.kt)("p",null,"It is highly recommended to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold")," password and the ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold")," database on separate devices. For reference, see the ",(0,i.kt)("a",{parentName:"p",href:"/guides/backup_security"},"backup and security guide")," for more information"),(0,i.kt)("p",null,":::Note\nIt is highly recommended to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold")," password and the ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold")," database on separate devices. For reference, see the ",(0,i.kt)("a",{parentName:"p",href:"/guides/backup_security"},"backup and security guide")," for more information"),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"Import the Wallet Library and create an account manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { AccountManager, SignerType } = require('@iota/wallet')\n\n    // Setup IOTA Wallet Library\n    const manager = new AccountManager({\n        storagePath: './storage'\n    })\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n    manager.storeMnemonic(SignerType.Stronghold, manager.generateMnemonic()) // seed generation\n")),(0,i.kt)("p",null,"Once the stronghold storage is created, it is not needed to generate the seed any longer (",(0,i.kt)("inlineCode",{parentName:"p"},"manager.storeMnemonic(SignerType.Stronghold, manager.generateMnemonic())"),"). It has been already saved in the storage together with all account information."),(0,i.kt)("h3",{id:"2-create-an-account-for-a-user"},"2. Create an Account For a User"),(0,i.kt)("p",null,"Once the backend storage is created, individual accounts for individual users can be created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    let account = await manager.createAccount({\n        alias: user_id,  // an unique id from your existing user\n        clientOptions: { node: 'http://api.lb-0.testnet.chrysalis2.com', localPow: false }\n    })\n")),(0,i.kt)("p",null,"Each account is related to a specific IOTA network (mainnet/devnet) which is referenced by a node property, such as node url (in this example, the Chrysalis testnet balancer)."),(0,i.kt)("p",null,"For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"clientOptions"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/libraries/nodejs/api_reference.html"},"Wallet NodeJs API Reference"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias")," can be whatever fits to the given use case and should be unique. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias")," is usually used to identify the given account later on. Each account is also represented by an ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," which is incremented (by 1) every time a new account is created. Any account can be then referred to via ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"alias"),", or one of its generated ",(0,i.kt)("inlineCode",{parentName:"p"},"addresses"),"."),(0,i.kt)("p",null,"Once an account has been created, you get an instance of it using the following methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccountByAlias(alias)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccounts()"),"."),(0,i.kt)("p",null,"The most common methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," instance include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account.alias()")," - returns an alias of the given account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account.listAddresses()")," - returns list of addresses related to the account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account.getUnusedAddress()")," - returns a first unused address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," - generate a new address for the address index incremented by 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account.balance()")," - returns the balance for the given account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account.sync()")," - sync the account information with the tangle.")),(0,i.kt)("h3",{id:"3-generate-a-user-address-to-deposit-funds"},"3. Generate a User Address to Deposit Funds"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," is a stateful library which means it caches all relevant information in storage to provide performance benefits while dealing with, potentially, many accounts/addresses."),(0,i.kt)("p",null,":::Note "),(0,i.kt)("p",null,"Sync the account info with the network during the wallet manipulation to be sure the storage reflects an actual state of the ledger (network)."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"Every account can own multiple addresses. Addresses are represented by an ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," which is incremented (by 1) every time a new address is created. The latest address is accessible via ",(0,i.kt)("inlineCode",{parentName:"p"},"account.latestAddress()"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before account interactions\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('synced!')\n\n    // By design, the last address of each account is an unused address which can be used as deposit address\n    const latestAddress = account.latestAddress()\n\n    console.log('Need a refill? Send it to this address:', latestAddress)\n")),(0,i.kt)("p",null,"Feel free to fill the address with Testnet Tokens with the ",(0,i.kt)("a",{parentName:"p",href:"https://faucet.testnet.chrysalis2.com/"},"IOTA Faucet")," to test it."),(0,i.kt)("p",null,"Addresses are of two types, ",(0,i.kt)("inlineCode",{parentName:"p"},"internal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," (external):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each set of addresses are independent from each other and has an independent ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," id."),(0,i.kt)("li",{parentName:"ul"},"Addresses that are created by ",(0,i.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," are indicated as ",(0,i.kt)("inlineCode",{parentName:"li"},"internal=false")," (public)."),(0,i.kt)("li",{parentName:"ul"},"Internal addresses (",(0,i.kt)("inlineCode",{parentName:"li"},"internal=true"),") are called ",(0,i.kt)("inlineCode",{parentName:"li"},"change")," addresses and are used to send the excess funds to them."),(0,i.kt)("li",{parentName:"ul"},"The approach is also known as a ",(0,i.kt)("em",{parentName:"li"},"BIP32 Hierarchical Deterministic wallet (HD Wallet)"),".")),(0,i.kt)("p",null,":::Note"),(0,i.kt)("p",null,"You may remember IOTA 1.0 network in which addresses were not reusable. It is no longer true and addresses can be reused multiple times in the Chrysalis network."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,":::"),(0,i.kt)("h3",{id:"4-listen-to-events"},"4. Listen to Events"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library supports several events for listening. As soon as the given event occurs, a provided callback is triggered."),(0,i.kt)("p",null,"Below is an example of fetching existing accounts and listening to transaction events coming into the account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'    const { addEventListener } = require(\'@iota/wallet\')\n\n    const callback = function(err, data) {\n        if(err) console.log("err:", err)\n        console.log("data:", data)\n    }\n\n    //Adds a new event listener with a callback in the form of (err, data) => {}. Supported event names:\n    addEventListener("BalanceChange", callback)\n\n    // Possible Event Types:\n    //\n    // ErrorThrown\n    // BalanceChange\n    // NewTransaction\n    // ConfirmationStateChange\n    // Reattachment\n    // Broadcast\n\n')),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"data: {\n  accountId: 'wallet-account://1666fc60fc95534090728a345cc5a861301428f68a237bea2b5ba0c844988566',\n  address: {\n    address: 'atoi1q9c6r2ek5w2yz54en78m8dxwl4qmwd7gmh9u0krm45p8txxyhtfry6apvwj',\n    balance: 20000000,\n    keyIndex: 0,\n    internal: false,\n    outputs: [ [Object], [Object] ]\n  },\n  balance: 20000000\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"accountId")," can then be used to identify the given account via ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),"."),(0,i.kt)("p",null,"For further reference, you can read more about events in the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/libraries/nodejs/api_reference.html#addeventlistenerevent-cb"},"API reference"),"."),(0,i.kt)("h3",{id:"5-check-the-account-balance"},"5. Check the Account Balance"),(0,i.kt)("p",null,"Get the available account balance across all addresses of the given account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before account interactions\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('synced!')\n    let balance = account.balance().available\n    console.log('available balance', balance)\n")),(0,i.kt)("h3",{id:"6-enable-withdrawals"},"6. Enable Withdrawals"),(0,i.kt)("p",null,"Sending tokens is performed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"SyncedAccount")," instance that is a result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"account.sync()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('available balance', account.balance().available)\n\n    const address = 'atoi1qykf7rrdjzhgynfkw6z7360avhaaywf5a4vtyvvk6a06gcv5y7sksu7n5cs'\n\n    // TODO: Check if address is valid.\n\n    const amount = 1000000 // Amount in IOTA: 1000000 == 1 MIOTA\n\n    const node_response = await synced.send(\n        address,\n        amount\n    )\n\n    console.log(\"Check your message on https://explorer.iota.org/chrysalis/message/\", node_response.id)\n")),(0,i.kt)("p",null,"The full function signature is ",(0,i.kt)("inlineCode",{parentName:"p"},"SyncedAccount.send(address, amount[, options])"),"."),(0,i.kt)("p",null,"Default options are perfectly fine and are successful; however, additional options can be provided, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"remainderValueStrategy"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changeAddress"),": Send the remainder value to an internal address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reuseAddress"),": Send the remainder value back to its original address.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SyncedAccount.send()")," function returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet message")," that fully describes the given transaction. The ",(0,i.kt)("inlineCode",{parentName:"p"},"messageId")," can be used later for checking a confirmation status. Individual messages related to the given account can be obtained via ",(0,i.kt)("inlineCode",{parentName:"p"},"account.listMessages()")," function."),(0,i.kt)("p",null,"Please note that when sending tokens, a ",(0,i.kt)("a",{parentName:"p",href:"/guides/dev_guide#dust-protection"},"dust protection")," mechanism should be considered."))}p.isMDXComponent=!0},6923:function(e,t,n){"use strict";t.Z=n.p+"assets/images/accounts-140efc62931d4e7b4a306fcb5c1f0d3c.svg"},2354:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wallet_rs_layers-2583696a3719e4047249a70726b3ea48.svg"}}]);
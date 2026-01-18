// Lesson Content and Resources from Blockchain Academy Links
// Based on provided resources: Binance Academy, Base, Optimism, Ethereum, Bitcoin, Arbitrum, etc.

const LESSON_CONTENT = {
    // Beginner Path Content
    '1-1': {
        title: 'What is Blockchain?',
        storyTitle: 'Miner protest',
        storyDialogue: `
            <p>Moments later, your Hover Screen activates.</p>
            <p class="dialogue">—Deborah Chunk: "Thomas Vanderpoole. As the well-dressed CEO of BitRey, you run, by far, the largest bitcoin mining pool in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?"</p>
            <p class="dialogue">—Vanderpoole: "Let's start from the top. Yes, I am, Deborah, and yes, I do. The Vanderpooles—my well-dressed daddy and his well-dressed daddy before him—have been mining since block 21,000. That's why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. Miners cannot survive on fees alone."</p>
        `,
        story: `
            <div class="story-paragraph">
                <p>Blockchain is a shared digital record that stores transactions securely across many computer, instead of one company controlling it, everyone on the network helps keep it running. Information is saved in blocks that are linked together, making it very hard to change or fake. This system is secure because it uses cryptography and rules that everyone follows.</p>
                
                <p>Bitcoin was the first use of blockchain, allowing people to send money without banks. Ethereum later added smart contracts, which are programs that run automatically on the blockchain. Overall, blockchain helps people exchange value online in a safe, open, and trusted way.</p>
            </div>
        `,
        resources: [
            {
                title: 'Bitcoin.org - How it Works',
                url: 'https://bitcoin.org/en/how-it-works',
                description: 'Learn the fundamentals of how Bitcoin and blockchain technology work',
                source: 'Bitcoin.org'
            },
            {
                title: 'Binance Academy - What is Blockchain?',
                url: 'https://academy.binance.com/en/articles/what-is-blockchain',
                description: 'Comprehensive guide to blockchain technology from Binance Academy',
                source: 'Binance Academy'
            },
            {
                title: 'Ethereum.org - What is Ethereum?',
                url: 'https://ethereum.org/en/what-is-ethereum/',
                description: 'Understanding Ethereum and its role in the blockchain ecosystem',
                source: 'Ethereum Foundation'
            }
        ],
        quiz: [
            {
                question: 'What is the primary characteristic of blockchain that prevents data tampering?',
                options: ['Decentralization', 'Immutability', 'Transparency', 'Speed'],
                correct: 1,
                explanation: 'Immutability means once data is recorded in a block, it cannot be altered without invalidating all subsequent blocks, making the blockchain resistant to tampering.'
            },
            {
                question: 'What links each block to the previous one in a blockchain?',
                options: ['A timestamp', 'A cryptographic hash', 'A transaction ID', 'A random number'],
                correct: 1,
                explanation: 'Each block contains a cryptographic hash of the previous block, creating a chain that links all blocks together.'
            }
        ]
    },
    '1-2': {
        title: 'Distributed Ledgers Explained',
        story: `
            <div class="story-paragraph">
                <p>A distributed ledger is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies. Unlike traditional centralized databases, distributed ledgers have no central data store or administration functionality. This architecture ensures that no single point of failure can compromise the entire system, and participants can verify transactions independently without relying on a trusted third party. The distributed nature means that even if many nodes fail or are compromised, the network continues to operate reliably as long as a sufficient number of nodes remain active.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Distributed ledgers represent a fundamental shift from traditional centralized database architectures, offering a new paradigm for how data can be stored, synchronized, and maintained across multiple locations. Unlike centralized systems where a single entity controls and manages the database, distributed ledgers operate on a network of nodes, each maintaining an identical copy of the ledger. This architecture ensures that no single point of failure can compromise the entire system, and participants can verify transactions independently without relying on a trusted third party.</p>
                
                <p>Base, as explained in its documentation, demonstrates how Layer 2 solutions leverage distributed ledger principles to scale blockchain networks while maintaining security. Base operates as an Ethereum Layer 2 blockchain built using Optimism's OP Stack, which means it processes transactions off the main Ethereum network but posts compressed transaction data back to Ethereum's base layer. This approach allows Base to inherit Ethereum's security guarantees while providing significantly lower transaction fees and faster confirmation times, showcasing how distributed ledger technology can be optimized for specific use cases.</p>
                
                <p>The synchronization mechanism of distributed ledgers is crucial to their operation. When a new transaction occurs, it's broadcast to all nodes in the network, and each node independently validates the transaction according to the network's consensus rules. Once validated, nodes add the transaction to their local copy of the ledger. Through consensus mechanisms like Proof of Work or Proof of Stake, the network agrees on the canonical version of the ledger, ensuring all nodes eventually converge on the same state even in the presence of network delays or malicious actors.</p>
                
                <p>Arbitrum's approach to distributed ledgers introduces sophisticated fraud-proof mechanisms that enhance the security and efficiency of Layer 2 scaling. Arbitrum uses optimistic rollups, where transactions are assumed to be valid unless challenged during a dispute window. The distributed nature of Arbitrum's validator network allows anyone to challenge fraudulent transactions, creating a decentralized security model where the network's integrity is maintained through economic incentives rather than requiring all nodes to process every transaction.</p>
                
                <p>Consensus in distributed ledgers is achieved through various mechanisms designed to ensure all participants agree on the ledger's state despite the absence of a central coordinator. In proof-based systems like Bitcoin, consensus emerges from the computational work required to add blocks. In validator-based systems like Ethereum's Proof of Stake or Arbitrum's optimistic rollups, selected validators propose and validate blocks, with economic penalties discouraging dishonest behavior. These mechanisms ensure that the distributed network converges on a single, agreed-upon history of transactions.</p>
                
                <p>One of the primary benefits of distributed ledgers is their resilience to censorship and single points of failure. In traditional centralized systems, if the central server goes down or is compromised, the entire system fails. However, in a distributed ledger network, even if multiple nodes fail or are taken offline, the network continues to operate as long as a sufficient number of nodes remain active. This resilience makes distributed ledgers particularly valuable for critical applications where uptime and availability are paramount.</p>
                
                <p>Transparency and auditability are inherent features of distributed ledgers. Since all nodes maintain copies of the ledger, the entire transaction history is publicly verifiable. This transparency allows participants to independently audit the network's operations, verify transactions, and detect any inconsistencies or attempts at manipulation. Unlike centralized systems where audit logs might be modified or hidden, the distributed nature of the ledger makes such tampering practically impossible due to cryptographic verification and consensus requirements.</p>
                
                <p>Scalability remains a challenge for distributed ledger systems, which is why Layer 2 solutions like Base and Arbitrum have emerged. These solutions maintain the security and decentralization benefits of distributed ledgers while addressing the throughput limitations of base-layer networks. By processing transactions in a distributed manner off-chain and then posting cryptographic proofs or compressed data to the main chain, Layer 2 networks can handle thousands of transactions per second while still benefiting from the security guarantees of the underlying distributed ledger.</p>
                
                <p>The programmable nature of modern distributed ledgers, as seen in Ethereum and its Layer 2 networks, enables complex applications to be built on top of the ledger. Smart contracts can automate business logic and enforce agreements without intermediaries, while the distributed nature ensures these contracts execute reliably across all network nodes. This combination of distribution and programmability has enabled entirely new categories of applications, from decentralized exchanges to automated lending protocols to complex governance systems.</p>
                
                <p>As distributed ledger technology continues to evolve, we're seeing innovations in how these systems can be structured and optimized. Networks like Base and Arbitrum demonstrate that distributed ledgers don't need to be limited to a single, monolithic chain. Instead, they can form layered architectures where different layers serve different purposes—base layers providing security and finality, while upper layers optimize for speed and cost. This evolution suggests that distributed ledgers will continue to become more efficient and capable, potentially transforming how we build and interact with digital systems across industries.</p>
            </div>
        `,
        resources: [
            {
                title: 'Base Learn - Welcome Guide',
                url: 'https://docs.base.org/learn/welcome',
                description: 'Learn about Base and Layer 2 blockchain technology',
                source: 'Base'
            },
            {
                title: 'Arbitrum Learn - Overview',
                url: 'https://portal.arbitrum.io/learn',
                description: 'Introduction to Arbitrum and Layer 2 scaling solutions',
                source: 'Arbitrum'
            }
        ],
        quiz: [
            {
                question: 'What is the main difference between a centralized and distributed ledger?',
                options: ['Distributed ledgers are faster', 'Distributed ledgers have no central authority', 'Centralized ledgers are more secure', 'There is no difference'],
                correct: 1,
                explanation: 'Distributed ledgers operate without a central authority, with data shared and synchronized across multiple nodes in the network.'
            }
        ]
    },
    '2-1': {
        title: 'Bitcoin Whitepaper Overview',
        story: `
            <div class="story-paragraph">
                <p>The Bitcoin whitepaper, titled "Bitcoin: A Peer-to-Peer Electronic Cash System," was published by Satoshi Nakamoto in 2008. It introduced the first successful implementation of blockchain technology and solved the double-spending problem without requiring a trusted authority. This breakthrough was achieved through a combination of cryptographic proof, timestamped blocks, and a distributed consensus mechanism that allows network participants to agree on the validity of transactions without needing to trust each other. The whitepaper proposed key innovations including Proof of Work consensus mechanism, Merkle trees for efficient verification, the UTXO model, and using cryptographic proof instead of trust.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>The Bitcoin whitepaper, published in 2008 by the pseudonymous Satoshi Nakamoto, introduced the world's first successful implementation of a decentralized digital currency and fundamentally changed how we think about money, trust, and digital transactions. Titled "Bitcoin: A Peer-to-Peer Electronic Cash System," the whitepaper solved the long-standing double-spending problem in digital currencies without requiring a trusted central authority. This breakthrough was achieved through a combination of cryptographic proof, timestamped blocks, and a distributed consensus mechanism that allows network participants to agree on the validity of transactions without needing to trust each other.</p>
                
                <p>According to Bitcoin.org's developer documentation, the Bitcoin network operates on a Proof of Work consensus mechanism where miners compete to solve computationally intensive cryptographic puzzles. The miner who successfully solves the puzzle first gets to create the next block in the blockchain and is rewarded with newly minted bitcoins and transaction fees. This process, known as mining, serves dual purposes: it secures the network by making it economically infeasible to attack, and it serves as the mechanism for distributing new bitcoins into circulation in a predictable, decentralized manner.</p>
                
                <p>Binance Academy explains that Bitcoin introduced several key innovations that distinguish it from previous attempts at digital currency. The UTXO (Unspent Transaction Output) model tracks bitcoin ownership by recording outputs from previous transactions that haven't been spent yet, rather than maintaining account balances like traditional banking systems. This model enables Bitcoin to function as a purely peer-to-peer system where transactions can be verified independently by any node on the network, without requiring a central authority to maintain account records.</p>
                
                <p>The whitepaper's solution to the double-spending problem relies on a timestamp server implemented as a distributed system. Each block contains a timestamp and a cryptographic hash of the previous block, creating an immutable chain. If someone attempts to spend the same bitcoin twice, they would need to modify the blockchain at the point where the bitcoin was first spent, which would require recalculating all subsequent blocks' hashes. Since new blocks are continuously being added to the chain, this becomes computationally infeasible, effectively preventing double-spending attacks.</p>
                
                <p>Merkle trees, another innovation described in the Bitcoin whitepaper, enable efficient verification of transactions without requiring nodes to store or process every transaction. A Merkle tree organizes transactions in a binary tree structure where each leaf node is a transaction hash, and each non-leaf node is the hash of its children. This structure allows nodes to verify that a specific transaction is included in a block by checking just a small path through the tree, significantly reducing the computational and storage requirements for verification.</p>
                
                <p>The Bitcoin network's incentive structure is carefully designed to align the interests of miners with the network's security. Miners invest computational resources (and electricity costs) to compete for block rewards, making it economically irrational for them to attack the network they're invested in protecting. Additionally, the protocol adjusts mining difficulty approximately every two weeks to ensure that new blocks are created roughly every 10 minutes, regardless of how much computational power is added to the network. This adjustment maintains the network's security and predictability over time.</p>
                
                <p>Bitcoin's approach to network consensus relies on the longest valid chain rule, where nodes always accept the chain with the most cumulative Proof of Work as the valid version of the blockchain. This rule, combined with the probabilistic nature of block creation, means that the network can handle temporary forks when two miners solve blocks simultaneously, eventually converging on a single chain as new blocks are added. This mechanism ensures eventual consistency across all network nodes without requiring real-time communication or coordination.</p>
                
                <p>The whitepaper's vision of a permissionless, borderless, and censorship-resistant payment system has proven remarkably resilient. Bitcoin has operated continuously since its launch in 2009, processing billions of dollars in transactions without relying on any central authority. The network's security model has proven effective against numerous attacks, and its decentralized nature means no single entity can control, shut down, or censor the network. This resilience has made Bitcoin attractive as both a payment system and a store of value.</p>
                
                <p>Privacy in Bitcoin is achieved through pseudonymity rather than anonymity. While transactions are publicly visible on the blockchain, users are identified only by their Bitcoin addresses (public keys), not their real-world identities. However, the public nature of the blockchain means that transaction patterns can be analyzed, which has led to ongoing research into improving privacy through techniques like CoinJoin, Confidential Transactions, and other privacy-enhancing technologies. The balance between transparency for security and privacy for users remains an active area of development.</p>
                
                <p>The Bitcoin whitepaper's impact extends far beyond the creation of a single cryptocurrency. It inspired an entire industry of blockchain technologies, cryptocurrencies, and decentralized applications. The concepts introduced—decentralized consensus, cryptographic proof of work, and peer-to-peer networks—have been adapted and evolved in countless projects. As the foundation of the cryptocurrency and blockchain movement, understanding the Bitcoin whitepaper provides essential context for anyone seeking to understand the current state and future potential of decentralized technologies.</p>
            </div>
        `,
        resources: [
            {
                title: 'Bitcoin Developer Guide',
                url: 'https://developer.bitcoin.org/',
                description: 'Complete developer documentation for Bitcoin',
                source: 'Bitcoin.org'
            },
            {
                title: 'Binance Academy - Bitcoin',
                url: 'https://academy.binance.com/en/articles/what-is-bitcoin',
                description: 'Learn about Bitcoin, the first cryptocurrency',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'Who published the Bitcoin whitepaper?',
                options: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Charlie Lee', 'Brian Armstrong'],
                correct: 1,
                explanation: 'Satoshi Nakamoto published the Bitcoin whitepaper in 2008, introducing the world\'s first cryptocurrency.'
            },
            {
                question: 'What problem did Bitcoin solve?',
                options: ['Slow transactions', 'Double-spending', 'High fees', 'Lack of privacy'],
                correct: 1,
                explanation: 'Bitcoin solved the double-spending problem without requiring a trusted central authority, enabling peer-to-peer digital cash.'
            }
        ]
    },
    '4-1': {
        title: 'What is Ethereum?',
        story: `
            <div class="story-paragraph">
                <p>Ethereum is a decentralized platform that enables smart contracts and decentralized applications (dApps) to be built and run without any downtime, fraud, control, or interference from a third party. It features its own cryptocurrency, Ether (ETH), which is used to power applications on the network. Ethereum introduced the concept of smart contracts—self-executing programs that automatically enforce agreements when predefined conditions are met. This programmability transforms blockchain from a simple ledger into a global, decentralized computer capable of running applications without downtime, censorship, or third-party interference, enabling new services like DeFi and NFTs.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Ethereum represents a revolutionary evolution of blockchain technology, transforming it from a simple distributed ledger for digital currency into a programmable platform for building decentralized applications. Launched in 2015 by Vitalik Buterin and others, Ethereum introduced the concept of a Turing-complete virtual machine—the Ethereum Virtual Machine (EVM)—that can execute arbitrary code written in smart contracts. This programmability enables developers to build applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interference.</p>
                
                <p>According to Ethereum.org's developer documentation, Ethereum's architecture consists of several key components that work together to create a decentralized computing platform. The EVM executes smart contracts written in high-level programming languages like Solidity, which are compiled into bytecode that the EVM can interpret and execute. Each node in the Ethereum network runs an instance of the EVM, ensuring that smart contracts execute consistently across all network participants. This distributed execution model ensures that applications built on Ethereum are truly decentralized, with no single point of failure or control.</p>
                
                <p>Binance Academy explains that Ethereum's native cryptocurrency, Ether (ETH), serves multiple critical functions within the network. First, it acts as a medium of exchange and store of value, similar to Bitcoin. Second, and more uniquely, Ether is used to pay for computational resources through a mechanism called "gas." Every operation in a smart contract consumes gas, and users must pay for this gas in Ether to execute transactions or interact with smart contracts. This gas model prevents malicious actors from flooding the network with computationally expensive operations and ensures that resources are allocated efficiently.</p>
                
                <p>Smart contracts are self-executing programs that automatically enforce the terms of an agreement when predefined conditions are met. Unlike traditional contracts that require intermediaries to ensure compliance, smart contracts run autonomously on the blockchain, executing their code exactly as written. This automation eliminates the need for trusted third parties in many scenarios, reducing costs and increasing efficiency. Smart contracts have enabled entirely new categories of applications, from decentralized exchanges and lending protocols to non-fungible tokens and decentralized autonomous organizations (DAOs).</p>
                
                <p>Ethereum's consensus mechanism has evolved significantly over its history. Originally using Proof of Work like Bitcoin, Ethereum transitioned to Proof of Stake in 2022 through an upgrade known as "The Merge." In Proof of Stake, validators are chosen to create and validate blocks based on the amount of Ether they've staked (locked up) as collateral. This transition dramatically reduced Ethereum's energy consumption while maintaining security through economic penalties for dishonest behavior. Validators who attempt to attack the network risk losing their staked Ether, making attacks economically unfeasible.</p>
                
                <p>The Ethereum developer ecosystem has grown into one of the largest and most active in the blockchain space, with extensive tooling and resources available for developers. Development frameworks like Hardhat and Truffle simplify smart contract development, testing, and deployment. Standards like ERC-20 for fungible tokens and ERC-721 for non-fungible tokens have created interoperability between different applications, enabling tokens and NFTs to work seamlessly across the Ethereum ecosystem. This standardization has been crucial for the growth of decentralized finance and other blockchain applications.</p>
                
                <p>Decentralized applications (dApps) built on Ethereum operate differently from traditional web applications. While traditional apps rely on centralized servers and databases, dApps interact directly with smart contracts deployed on the Ethereum blockchain. Users interact with dApps through Web3 wallets like MetaMask, which manage their private keys and sign transactions. This architecture gives users direct control over their data and assets, eliminating the need to trust application operators with sensitive information or funds.</p>
                
                <p>Ethereum's programmability has enabled the emergence of decentralized finance (DeFi), a parallel financial system built entirely on blockchain technology. DeFi applications recreate traditional financial services like lending, borrowing, trading, and insurance, but operate without intermediaries like banks or insurance companies. Users interact directly with smart contracts, which execute automatically based on predefined rules. This has created opportunities for financial inclusion, as anyone with an internet connection can access these services without traditional banking relationships.</p>
                
                <p>Challenges facing Ethereum include scalability limitations, high transaction fees during periods of network congestion, and the complexity of smart contract development. The network processes approximately 15 transactions per second on its base layer, which can lead to congestion and high fees during peak usage. Layer 2 scaling solutions like Optimistic Rollups and Zero-Knowledge Rollups address these issues by processing transactions off-chain and posting compressed data or proofs to Ethereum, dramatically increasing throughput while maintaining security guarantees.</p>
                
                <p>Ethereum's continued evolution through upgrades and improvements demonstrates the platform's commitment to addressing its limitations while maintaining its core values of decentralization and security. As the most widely used programmable blockchain, Ethereum serves as the foundation for much of the Web3 ecosystem, hosting thousands of dApps and billions of dollars in value. Understanding Ethereum's architecture, capabilities, and role in the broader blockchain ecosystem is essential for anyone looking to build, invest in, or use decentralized applications, as it represents the current state-of-the-art in programmable blockchain technology.</p>
            </div>
        `,
        resources: [
            {
                title: 'Ethereum Developers Portal',
                url: 'https://ethereum.org/en/developers/',
                description: 'Comprehensive guides for Ethereum developers',
                source: 'Ethereum Foundation'
            },
            {
                title: 'Binance Academy - Ethereum',
                url: 'https://academy.binance.com/en/articles/what-is-ethereum',
                description: 'Learn about Ethereum and smart contracts',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'What makes Ethereum different from Bitcoin?',
                options: ['It has lower fees', 'It supports smart contracts and dApps', 'It is faster', 'It has more coins'],
                correct: 1,
                explanation: 'Ethereum was designed as a programmable blockchain, enabling developers to build and deploy smart contracts and decentralized applications, unlike Bitcoin which is primarily a digital currency.'
            },
            {
                question: 'What is the native cryptocurrency of Ethereum?',
                options: ['Bitcoin', 'Ether (ETH)', 'Ethereum Token', 'ETH Coin'],
                correct: 1,
                explanation: 'Ether (ETH) is the native cryptocurrency of the Ethereum network, used to pay for transaction fees and computational services.'
            }
        ]
    },
    '5-2': {
        title: 'Base: Coinbase\'s L2',
        story: `
            <div class="story-paragraph">
                <p>Base is an Ethereum Layer 2 (L2) solution built by Coinbase that aims to bring the next billion users on-chain. It's designed to be secure, low-cost, and developer-friendly, using Optimism's OP Stack technology. Base operates as an optimistic rollup that processes transactions off the Ethereum mainnet while posting transaction data back to Ethereum Layer 1, allowing it to handle thousands of transactions per second at a fraction of the cost while still benefiting from Ethereum's security guarantees.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Base is an Ethereum Layer 2 (L2) blockchain solution built by Coinbase that aims to bring the next billion users on-chain by providing a secure, low-cost, and developer-friendly platform. Launched in 2023, Base leverages Optimism's OP Stack technology to create a scalable Layer 2 solution that maintains Ethereum's security guarantees while dramatically reducing transaction costs and improving throughput. Base's mission is to serve as a bridge between traditional web applications and decentralized blockchain technology, making it easier for developers and users to adopt Web3 technologies.</p>
                
                <p>According to Base's official documentation, the network operates as an optimistic rollup that processes transactions off the Ethereum mainnet while posting transaction data back to Ethereum Layer 1 (L1). This architecture allows Base to handle thousands of transactions per second at a fraction of the cost of Ethereum mainnet, while still benefiting from Ethereum's security and decentralization. Transactions on Base are significantly cheaper than on Ethereum, making it economically feasible for users to interact with decentralized applications without worrying about high gas fees.</p>
                
                <p>Base's use of Optimism's OP Stack provides several key advantages for developers and users. The OP Stack is an open-source, modular framework that enables developers to build custom Layer 2 solutions with shared infrastructure and tooling. By building on this proven technology stack, Base benefits from ongoing improvements and optimizations developed by the broader Optimism ecosystem. This shared infrastructure means that tools, bridges, and protocols built for Optimism can often work seamlessly on Base, creating interoperability between the two networks.</p>
                
                <p>One of Base's most significant advantages is its integration with Coinbase, one of the world's largest cryptocurrency exchanges. This integration provides easy fiat on-ramps, allowing users to purchase cryptocurrencies directly from Coinbase and seamlessly transfer them to Base. The Coinbase integration also includes Base in Coinbase Wallet and other Coinbase products, providing a familiar user experience for Coinbase's millions of users. This bridge between traditional finance and decentralized applications is crucial for mainstream adoption of blockchain technology.</p>
                
                <p>Base's security model relies on Ethereum's base layer for finality and dispute resolution. As an optimistic rollup, Base assumes transactions are valid unless challenged during a seven-day challenge period. If a validator posts fraudulent state transitions, anyone can submit a fraud proof, and the incorrect state will be rejected. This model provides strong security guarantees while keeping transaction costs low, as it only requires posting minimal data to Ethereum L1 rather than executing every transaction on the expensive mainnet.</p>
                
                <p>The developer experience on Base is designed to be as familiar as possible for Web2 developers transitioning to Web3. Base supports the same development tools and standards as Ethereum, including Solidity for smart contract development, Hardhat and Foundry for development frameworks, and MetaMask and other standard wallets for user interactions. Developers can deploy Ethereum-compatible smart contracts to Base with minimal modifications, and users can interact with Base dApps using the same wallets and tools they use on Ethereum mainnet. This compatibility reduces friction for both developers and users.</p>
                
                <p>Base's commitment to decentralization extends beyond just its technical architecture. While initially launched with some centralized components for security and reliability, Base has a roadmap toward increasing decentralization over time. The network plans to progressively decentralize its sequencer (the component that orders transactions) and other critical infrastructure, eventually achieving full decentralization. This progressive approach allows Base to launch quickly and reliably while working toward the decentralization ideals that make blockchain technology valuable.</p>
                
                <p>Ecosystem development on Base is supported by comprehensive documentation, developer grants, and integration support. Base provides extensive guides covering everything from getting started with development to deploying production applications. The Base team actively supports developers building on the platform, offering technical assistance and potentially funding for promising projects. This support has led to rapid ecosystem growth, with hundreds of applications already deployed on Base across categories including DeFi, NFTs, gaming, and social applications.</p>
                
                <p>Base's transaction costs are dramatically lower than Ethereum mainnet, often costing less than $0.01 per transaction compared to several dollars or more on Ethereum during high congestion periods. This cost reduction makes new use cases economically viable that wouldn't be feasible on Ethereum L1. Microtransactions, gaming, and high-frequency trading applications can now operate profitably on Base, opening up new categories of decentralized applications. Users can interact with dApps extensively without worrying about accumulating significant gas costs.</p>
                
                <p>As Layer 2 scaling solutions become increasingly important for Ethereum's growth, Base represents an important step toward making blockchain technology accessible to mainstream users and developers. By combining Coinbase's user base and infrastructure with proven Layer 2 scaling technology, Base is well-positioned to serve as a gateway for the next wave of Web3 adoption. The platform's focus on security, low costs, developer experience, and progressive decentralization makes it an attractive option for both developers building decentralized applications and users looking for a more accessible entry point into the Ethereum ecosystem.</p>
            </div>
        `,
        resources: [
            {
                title: 'Base Official Documentation',
                url: 'https://docs.base.org/',
                description: 'Complete documentation for Base blockchain',
                source: 'Base'
            },
            {
                title: 'Base Learn Guide',
                url: 'https://docs.base.org/learn/welcome',
                description: 'Learn how to build on Base',
                source: 'Base'
            }
        ],
        quiz: [
            {
                question: 'What technology does Base use?',
                options: ['Arbitrum Nitro', 'OP Stack', 'Polygon SDK', 'ZK-Rollups'],
                correct: 1,
                explanation: 'Base is built using Optimism\'s OP Stack technology, which provides a secure and scalable Layer 2 solution.'
            }
        ]
    },
    '5-3': {
        title: 'Optimism: Optimistic Rollups',
        story: `
            <div class="story-paragraph">
                <p>Optimism is an Ethereum Layer 2 scaling solution that uses optimistic rollups to achieve faster and cheaper transactions while maintaining Ethereum's security guarantees. It processes transactions off-chain and posts compressed data back to Ethereum, reducing costs while maintaining security. The name "optimistic rollups" comes from the optimistic assumption that all state transitions posted to Ethereum are valid unless proven otherwise, allowing the system to scale efficiently while maintaining strong security properties through a seven-day challenge period where anyone can dispute fraudulent transactions.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Optimism is an Ethereum Layer 2 scaling solution that uses optimistic rollups to achieve faster and cheaper transactions while maintaining Ethereum's security guarantees. Launched in 2021, Optimism represents a significant advancement in blockchain scaling technology, enabling applications to process thousands of transactions per second at a fraction of Ethereum mainnet costs. The name "optimistic rollups" comes from the optimistic assumption that all state transitions posted to Ethereum are valid unless proven otherwise, which allows the system to scale efficiently while maintaining strong security properties.</p>
                
                <p>According to Optimism's developer documentation, optimistic rollups work by executing transactions off-chain on Layer 2 and then posting compressed transaction data back to Ethereum Layer 1. This approach dramatically reduces the amount of data that needs to be stored on Ethereum, which is the primary source of transaction costs. Instead of executing every transaction on the expensive Ethereum mainnet, Optimism batches thousands of transactions together, executes them off-chain, and posts a summary to Ethereum. This batching enables Optimism to achieve transaction costs that are up to 100 times lower than Ethereum mainnet.</p>
                
                <p>The security model of optimistic rollups relies on a challenge period during which anyone can dispute fraudulent state transitions. When a validator posts transaction results to Ethereum, there's typically a seven-day window where anyone can submit a fraud proof if they detect invalid transactions. If a fraud proof is submitted and validated, the incorrect state transition is rejected, and the validator who posted it loses their staked collateral. This mechanism ensures that validators have strong economic incentives to be honest, as posting fraudulent transactions would result in the loss of their stake.</p>
                
                <p>Optimism's implementation of optimistic rollups includes several technical innovations that improve upon earlier designs. The system uses a specialized virtual machine (OVM, Optimistic Virtual Machine) that's compatible with Ethereum's EVM, allowing existing Ethereum smart contracts to run on Optimism with minimal modifications. This compatibility means that developers can deploy their Ethereum applications to Optimism with relatively little effort, and users can interact with Optimism applications using the same tools and wallets they use on Ethereum mainnet. This seamless compatibility has been crucial for adoption.</p>
                
                <p>The Optimism Foundation has developed the OP Stack, an open-source, modular framework that enables developers to build custom Layer 2 solutions. The OP Stack provides the core infrastructure needed for optimistic rollups, including transaction sequencing, state management, and data availability. By open-sourcing this technology, Optimism has enabled other projects like Base to build their own Layer 2 solutions using proven technology. This shared infrastructure creates network effects, as improvements to the OP Stack benefit all networks built on it.</p>
                
                <p>Transaction finality on Optimism differs from Ethereum mainnet due to the challenge period. While transactions appear to be finalized immediately on Optimism, there's technically a seven-day window during which they could be challenged. In practice, this means that withdrawals from Optimism back to Ethereum mainnet require waiting for the challenge period to expire. However, for most use cases like trading, gaming, or social interactions, users don't need to wait for full finality, as the probability of a successful challenge after initial confirmation is extremely low. This trade-off enables much faster user experiences while maintaining security.</p>
                
                <p>Optimism's token, OP, plays multiple roles in the network's ecosystem. It's used for governance, allowing token holders to vote on protocol upgrades and parameter changes. The token is also distributed through a program called the "OP Airdrop" to users and developers who contribute to the Optimism ecosystem. Additionally, OP is used to fund grants and other incentives for developers building on Optimism. This token distribution model aligns incentives between users, developers, and the protocol, encouraging ecosystem growth and participation.</p>
                
                <p>The network's commitment to retroactive public goods funding represents an innovative approach to ecosystem development. Optimism allocates a portion of its revenue to fund projects that provide value to the broader Ethereum and Optimism ecosystems, even if those projects don't directly generate revenue. This model recognizes that many valuable contributions to the ecosystem aren't easily monetizable but are crucial for its long-term success. By funding these public goods, Optimism helps ensure the sustainability of the decentralized infrastructure that supports its network.</p>
                
                <p>Developer experience on Optimism is designed to be as seamless as possible, with comprehensive documentation, development tools, and support resources. The network provides detailed guides for deploying contracts, integrating wallets, and handling cross-layer interactions. Optimism's compatibility with Ethereum development tools means that developers already familiar with Ethereum can quickly start building on Optimism. The network also provides testnet environments where developers can test their applications before deploying to mainnet, reducing the risk of costly errors.</p>
                
                <p>As Ethereum continues to grow and face scalability challenges, Layer 2 solutions like Optimism become increasingly important for the ecosystem's future. Optimism's focus on maintaining Ethereum compatibility while dramatically improving scalability and reducing costs has made it one of the most widely adopted Layer 2 solutions. With billions of dollars in value locked in Optimism applications and thousands of transactions processed daily, the network has proven that optimistic rollups can successfully scale Ethereum while maintaining its security and decentralization properties. Understanding Optimism's architecture and capabilities is essential for anyone looking to build or use applications that require the scalability that Layer 2 solutions provide.</p>
            </div>
        `,
        resources: [
            {
                title: 'Optimism Developers Docs',
                url: 'https://www.optimism.io/developers/docs/',
                description: 'Developer documentation for Optimism',
                source: 'Optimism'
            },
            {
                title: 'Optimistic Academy',
                url: 'https://app.optimistic.academy/',
                description: 'Learn about Optimism and optimistic rollups',
                source: 'Optimism'
            }
        ],
        quiz: [
            {
                question: 'What is the challenge period for Optimism transactions?',
                options: ['1 day', '7 days', '14 days', '30 days'],
                correct: 1,
                explanation: 'Optimism uses a 7-day challenge period where anyone can dispute fraudulent transactions through fraud proofs.'
            }
        ]
    },
    '5-4': {
        title: 'Arbitrum: Advanced Optimistic Rollups',
        story: `
            <div class="story-paragraph">
                <p>Arbitrum is a leading Ethereum Layer 2 scaling solution that uses optimistic rollups with unique fraud-proof mechanisms. It offers low transaction costs while maintaining Ethereum's security and compatibility with existing Ethereum tools. The network's architecture uses sophisticated fraud-proof mechanisms that enable it to achieve the security of Ethereum Layer 1 while processing transactions at a fraction of the cost, making it economically feasible for a wide range of applications including decentralized exchanges, lending protocols, and NFT marketplaces.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Arbitrum is a leading Ethereum Layer 2 scaling solution that uses advanced optimistic rollups to provide low-cost, fast transactions while maintaining Ethereum's security and compatibility. Launched in 2021 by Offchain Labs, Arbitrum has grown to become one of the most widely adopted Layer 2 solutions, with billions of dollars in value locked and millions of transactions processed. The network's architecture uses sophisticated fraud-proof mechanisms that enable it to achieve the security of Ethereum Layer 1 while processing transactions at a fraction of the cost, making it economically feasible for a wide range of applications.</p>
                
                <p>According to Arbitrum's documentation, the network operates as an optimistic rollup that executes transactions off-chain and posts compressed transaction data back to Ethereum Layer 1. However, Arbitrum's implementation differs from other optimistic rollups in its fraud-proof mechanism. Instead of using single-round fraud proofs, Arbitrum uses a multi-round interactive dispute resolution system. When a state transition is challenged, the dispute is resolved through a series of rounds where the challenger and validator narrow down the point of disagreement, eventually identifying the specific transaction or operation that's in dispute. This interactive system is more efficient than single-round proofs, reducing gas costs and enabling faster dispute resolution.</p>
                
                <p>The Arbitrum Virtual Machine (AVM) is a specialized execution environment that's fully compatible with Ethereum's EVM, allowing developers to deploy Ethereum smart contracts to Arbitrum with no modifications required. The AVM executes transactions deterministically, ensuring that the same transaction produces the same result when executed on Arbitrum and when verified on Ethereum Layer 1. This compatibility means that developers can use the same development tools, programming languages (primarily Solidity), and testing frameworks they use for Ethereum development, making it easy to port existing applications to Arbitrum.</p>
                
                <p>Binance Academy explains that Arbitrum's transaction costs are significantly lower than Ethereum mainnet, often costing less than $0.01 per transaction compared to several dollars or more on Ethereum during periods of high congestion. This cost reduction makes Arbitrum attractive for applications that require frequent transactions, such as gaming, DeFi trading, and social applications. Users can interact extensively with Arbitrum dApps without accumulating significant gas costs, enabling new use cases that wouldn't be economically viable on Ethereum Layer 1.</p>
                
                <p>Arbitrum's security model relies on Ethereum Layer 1 for finality and dispute resolution, but uses sophisticated off-chain execution to minimize the data posted to Ethereum. The network's validators execute transactions off-chain and post compressed state updates to Ethereum. If a validator posts a fraudulent state transition, anyone can challenge it by submitting a fraud proof. The dispute resolution system then determines whether the state transition was valid, and if invalid, the validator loses their staked collateral. This mechanism ensures that validators have strong economic incentives to be honest.</p>
                
                <p>The network's challenge period is seven days, during which time anyone can dispute state transitions posted to Ethereum. After the challenge period expires, state transitions are considered final, and users can withdraw funds from Arbitrum to Ethereum mainnet. While this means withdrawals require a seven-day wait, deposits to Arbitrum are instant, and most user interactions don't require waiting for full finality. For the vast majority of use cases, users don't need to wait for the challenge period to expire, as the probability of a successful challenge after initial confirmation is extremely low.</p>
                
                <p>Arbitrum's ecosystem has grown rapidly, with hundreds of applications deployed across categories including decentralized exchanges, lending protocols, NFT marketplaces, gaming platforms, and more. The network's low costs and high compatibility with Ethereum have made it attractive for both established projects migrating from Ethereum and new projects launching on Arbitrum. Popular Ethereum applications like Uniswap, Aave, and OpenSea have deployed versions on Arbitrum, allowing users to access the same applications with lower costs and faster transaction confirmation times.</p>
                
                <p>The network supports multiple chains within its ecosystem, including Arbitrum One (the main network), Arbitrum Nova (optimized for low-cost transactions with alternative data availability), and Arbitrum Nitro (the upgraded architecture with improved performance and efficiency). This multi-chain approach allows Arbitrum to serve different use cases, from high-value DeFi applications to low-cost gaming and social applications. Each chain maintains compatibility with Ethereum while optimizing for specific use cases.</p>
                
                <p>Arbitrum's developer tools and infrastructure make it easy for developers to build and deploy applications. The network provides comprehensive documentation, development frameworks, and testing tools that are compatible with Ethereum development workflows. Developers can use familiar tools like Hardhat, Foundry, and Remix to develop and deploy smart contracts to Arbitrum. The network also provides testnet environments for testing applications before deploying to mainnet, reducing the risk of costly errors.</p>
                
                <p>As Ethereum continues to face scalability challenges and Layer 2 solutions become increasingly important, Arbitrum represents a proven approach to scaling Ethereum while maintaining its security and decentralization properties. With billions of dollars in value locked and millions of users, Arbitrum has demonstrated that Layer 2 scaling can successfully address Ethereum's limitations. The network's focus on Ethereum compatibility, low costs, and strong security make it an attractive option for developers building scalable applications and users seeking affordable access to decentralized applications. Understanding Arbitrum's architecture and capabilities is essential for anyone looking to build or use applications that require the scalability and cost efficiency that Layer 2 solutions provide.</p>
            </div>
        `,
        resources: [
            {
                title: 'Arbitrum Get Started Guide',
                url: 'https://docs.arbitrum.io/get-started/overview',
                description: 'Get started with Arbitrum development',
                source: 'Arbitrum'
            },
            {
                title: 'Arbitrum Learn Portal',
                url: 'https://portal.arbitrum.io/learn',
                description: 'Learn about Arbitrum and Layer 2 scaling',
                source: 'Arbitrum'
            },
            {
                title: 'Binance Academy - Layer 2',
                url: 'https://academy.binance.com/en/articles/what-are-layer-2-scaling-solutions',
                description: 'Understanding Layer 2 scaling solutions',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'What is Arbitrum\'s main advantage over Ethereum mainnet?',
                options: ['Higher security', 'Lower transaction fees', 'More tokens', 'Different consensus'],
                correct: 1,
                explanation: 'Arbitrum provides significantly lower transaction fees compared to Ethereum mainnet while maintaining security through optimistic rollups.'
            }
        ]
    },
    // Intermediate Path Content
    '6-1': {
        title: 'Introduction to DeFi',
        story: `
            <div class="story-paragraph">
                <p>Decentralized Finance (DeFi) is a financial system built on blockchain networks that enables financial services without intermediaries. DeFi applications use smart contracts to automate financial operations, making them transparent, accessible, and programmable. This trustless model enables entirely new categories of financial products and services that weren't possible with traditional finance infrastructure, including decentralized exchanges, lending and borrowing protocols, yield farming, stablecoins, and derivatives.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Decentralized Finance (DeFi) represents a revolutionary paradigm shift in the financial services industry, replacing traditional intermediaries like banks, brokers, and insurance companies with programmable smart contracts running on blockchain networks. DeFi applications use blockchain technology to recreate and improve upon traditional financial services, from lending and borrowing to trading and insurance, all without requiring users to trust centralized institutions. This trustless model, combined with programmability and transparency, has enabled entirely new categories of financial products and services that weren't possible with traditional finance infrastructure.</p>
                
                <p>According to Binance Academy, DeFi applications operate on smart contracts, self-executing programs that automatically enforce the terms of financial agreements when predefined conditions are met. These smart contracts run on decentralized blockchain networks, primarily Ethereum and its Layer 2 solutions, ensuring that financial operations execute exactly as programmed without the possibility of manipulation or interference from third parties. The code governing these contracts is publicly visible and auditable, allowing users to verify the rules and mechanisms themselves rather than relying on statements from financial institutions.</p>
                
                <p>Ethereum.org explains that DeFi's core innovation lies in its ability to create "money legos"—composable financial primitives that can be combined and stacked to create complex financial products. Just as developers can combine simple programming functions to build complex applications, DeFi protocols can be combined to create sophisticated financial instruments. For example, a user might deposit tokens into a lending protocol to earn interest, then use those tokens as collateral in a borrowing protocol to take out a loan, and finally use the borrowed funds in a liquidity pool to earn trading fees. This composability enables endless combinations and innovations.</p>
                
                <p>Decentralized Exchanges (DEXs) are among the most popular DeFi applications, enabling users to trade cryptocurrencies directly with each other without requiring a centralized exchange to hold their funds. DEXs use automated market makers (AMMs) instead of traditional order books, allowing anyone to provide liquidity by depositing tokens into pools and earning fees from traders. This model eliminates the need for market makers and enables 24/7 trading with global accessibility, as DEXs operate continuously without closing for business hours or holidays.</p>
                
                <p>Lending and borrowing protocols represent another major category of DeFi applications, allowing users to lend their cryptocurrencies to earn interest or borrow against their crypto holdings without requiring credit checks or traditional banking relationships. These protocols use smart contracts to automatically match lenders and borrowers, with interest rates determined algorithmically based on supply and demand. Borrowers must typically over-collateralize their loans, meaning they must provide more value in collateral than they borrow, which eliminates credit risk and enables permissionless borrowing for anyone with crypto assets.</p>
                
                <p>Yield farming, also known as liquidity mining, is a DeFi mechanism where users earn rewards by providing liquidity to various protocols. Users can earn rewards in multiple forms: trading fees from providing liquidity to DEXs, interest from lending protocols, and governance tokens from protocols incentivizing liquidity provision. Yield farmers often move their funds between different protocols to maximize returns, creating a dynamic ecosystem where protocols compete for liquidity by offering attractive rewards. While yield farming can generate significant returns, it also involves risks including smart contract vulnerabilities and impermanent loss.</p>
                
                <p>Stablecoins are cryptocurrencies designed to maintain a stable value relative to a reference asset, typically the U.S. dollar. They're essential infrastructure for DeFi, as users need a stable medium of exchange to avoid the volatility risks associated with cryptocurrencies like Bitcoin and Ethereum. DeFi stablecoins use various mechanisms to maintain their peg, from backing by fiat reserves to algorithmic stabilization to over-collateralization with volatile crypto assets. These stablecoins enable users to transact and save value in DeFi without exposure to crypto volatility.</p>
                
                <p>Derivatives protocols enable users to create and trade financial derivatives like futures, options, and synthetic assets on blockchain networks. These protocols allow users to gain exposure to traditional assets like stocks, commodities, and fiat currencies without actually owning them, or to hedge their crypto positions. Decentralized derivatives markets operate 24/7 without intermediaries, enabling sophisticated financial strategies previously only available to institutional investors. These protocols use various mechanisms to track asset prices, from oracle networks that feed external price data to synthetic asset designs that maintain price parity.</p>
                
                <p>DeFi's accessibility is one of its most transformative aspects, as it eliminates many barriers present in traditional finance. Users can access DeFi services from anywhere in the world with an internet connection, without requiring bank accounts, credit checks, or government identification in many cases. This financial inclusion aspect is particularly powerful for users in countries with limited access to traditional banking services or where financial systems are unstable or subject to government manipulation. DeFi's permissionless nature means anyone can participate, regardless of their geographic location or financial status.</p>
                
                <p>Despite its revolutionary potential, DeFi faces significant challenges including smart contract risks, regulatory uncertainty, scalability limitations, and user experience barriers. Smart contract bugs have resulted in hundreds of millions of dollars in losses, highlighting the importance of thorough auditing and security practices. Regulatory frameworks are still developing, creating uncertainty about the legal status of various DeFi activities. Scalability issues on Ethereum have led to high gas fees during periods of congestion, though Layer 2 solutions are addressing this. User experience remains complex for non-technical users, though improvements are being made through better interfaces and educational resources. As DeFi continues to evolve and mature, addressing these challenges will be crucial for achieving mainstream adoption and fulfilling its promise of democratizing access to financial services.</p>
            </div>
        `,
        resources: [
            {
                title: 'Binance Academy - DeFi',
                url: 'https://academy.binance.com/en/articles/what-is-defi',
                description: 'Complete guide to Decentralized Finance',
                source: 'Binance Academy'
            },
            {
                title: 'Ethereum DeFi Resources',
                url: 'https://ethereum.org/en/defi/',
                description: 'Learn about DeFi on Ethereum',
                source: 'Ethereum Foundation'
            }
        ],
        quiz: [
            {
                question: 'What technology powers DeFi applications?',
                options: ['Traditional banking systems', 'Smart contracts', 'Centralized exchanges', 'Credit cards'],
                correct: 1,
                explanation: 'DeFi applications are powered by smart contracts, which are self-executing contracts with terms written in code.'
            }
        ]
    },
    '7-1': {
        title: 'Solidity Basics and Syntax',
        story: `
            <div class="story-paragraph">
                <p>Solidity is an object-oriented programming language designed for implementing smart contracts on the Ethereum blockchain. It's statically typed, supports inheritance, libraries, and complex user-defined types. As a contract-oriented language, contracts are the fundamental building blocks of Solidity programs, similar to classes in object-oriented programming languages, containing state variables, functions, and events that execute exactly as programmed when deployed to the blockchain.</p>
            </div>
        `,
        resourceSummary: `
            <div class="resource-summary">
                <p>Solidity is an object-oriented, statically-typed programming language specifically designed for implementing smart contracts on Ethereum and other EVM-compatible blockchains. Developed by the Ethereum Foundation and first proposed in 2014, Solidity has become the most widely used language for smart contract development, powering the vast majority of decentralized applications on Ethereum. The language draws inspiration from JavaScript, Python, and C++, making it relatively accessible to developers with experience in these languages while providing features specifically tailored for blockchain development.</p>
                
                <p>According to Ethereum.org's developer documentation, Solidity is a contract-oriented language, meaning that contracts are the fundamental building blocks of Solidity programs. Contracts are similar to classes in object-oriented programming languages, containing state variables (data), functions (behavior), and events (communication). When deployed to the blockchain, a contract becomes an account with its own address, able to hold Ether and tokens, execute code, and interact with other contracts. This contract-centric design aligns with blockchain's model of autonomous, self-executing agreements.</p>
                
                <p>Solidity's type system includes both value types and reference types, providing developers with precise control over data storage and gas costs. Value types like uint (unsigned integer), int (signed integer), bool, address, and bytes are stored directly in variables, while reference types like arrays, structs, and mappings are stored as references to locations in storage or memory. Understanding the difference between storage (persistent on blockchain), memory (temporary during execution), and calldata (function parameters) is crucial for writing efficient and secure Solidity code, as incorrect usage can lead to high gas costs or security vulnerabilities.</p>
                
                <p>Binance Academy explains that smart contracts written in Solidity are compiled into EVM bytecode, which is then deployed to the Ethereum blockchain where it becomes immutable and publicly visible. Once deployed, anyone can read the contract's code and call its public functions, enabling trustless interactions without requiring intermediaries. The immutability of deployed contracts means that bugs cannot be easily fixed, making thorough testing, auditing, and secure coding practices absolutely essential. Many projects implement upgradeable contracts using proxy patterns to allow for improvements and bug fixes after deployment.</p>
                
                <p>Solidity supports inheritance, allowing contracts to inherit functions and state variables from other contracts, promoting code reuse and modularity. Multiple inheritance is supported, enabling complex contract hierarchies where a contract can inherit from multiple parent contracts. Libraries in Solidity provide another mechanism for code reuse, allowing common functionality to be deployed once and reused by multiple contracts, reducing deployment costs and improving maintainability. These features enable developers to build sophisticated, modular smart contract systems.</p>
                
                <p>Security considerations are paramount in Solidity development, as smart contracts often handle significant value and vulnerabilities can result in substantial losses. Common vulnerabilities include reentrancy attacks, where malicious contracts can repeatedly call functions during execution; integer overflow/underflow, though now protected by Solidity 0.8+; and access control issues where functions lack proper permission checks. Solidity provides various security features and best practices, including the use of modifiers for access control, checks-effects-interactions pattern for preventing reentrancy, and SafeMath libraries for arithmetic operations in older versions.</p>
                
                <p>Solidity's function visibility modifiers (public, private, internal, external) control who can call functions and how, providing important security and gas optimization opportunities. Public functions can be called both internally and externally, while external functions can only be called from outside the contract. Private functions can only be called from within the contract, and internal functions can be called from within the contract or from inheriting contracts. Understanding these visibility modifiers is crucial for designing secure and efficient contracts, as incorrect usage can lead to unintended access or unnecessary gas costs.</p>
                
                <p>Events in Solidity provide a mechanism for contracts to communicate with external applications, emitting logs that can be indexed and queried by off-chain services. Events are particularly useful for creating user interfaces that react to on-chain events, enabling real-time updates when contract state changes. Gas-efficient storage of historical data is another use case for events, as they cost significantly less than storing data in contract storage. Events have been used to create sophisticated indexing systems that enable efficient querying of blockchain data.</p>
                
                <p>The Solidity development ecosystem includes comprehensive tooling and frameworks that streamline the development, testing, and deployment process. Hardhat and Truffle are popular development frameworks that provide testing environments, deployment scripts, and debugging tools. Remix is a browser-based IDE that allows developers to write, compile, and deploy contracts without local setup. OpenZeppelin provides battle-tested, audited contract libraries for common patterns like ERC-20 tokens, access control, and upgradeable contracts, helping developers build secure applications more efficiently.</p>
                
                <p>As the primary language for Ethereum smart contract development, Solidity continues to evolve with regular updates that introduce new features, improve security, and optimize gas costs. Understanding Solidity is essential for anyone looking to build decentralized applications, as it provides the foundation for creating the smart contracts that power DeFi protocols, NFT marketplaces, DAOs, and countless other blockchain applications. While learning Solidity requires understanding both general programming concepts and blockchain-specific considerations like gas optimization and security patterns, the language's syntax and tooling make it accessible to developers willing to invest the time to learn its nuances and best practices.</p>
            </div>
        `,
        resources: [
            {
                title: 'Ethereum Developers - Solidity',
                url: 'https://ethereum.org/en/developers/docs/smart-contracts/',
                description: 'Learn Solidity and smart contract development',
                source: 'Ethereum Foundation'
            },
            {
                title: 'Binance Academy - Smart Contracts',
                url: 'https://academy.binance.com/en/articles/what-are-smart-contracts',
                description: 'Understanding smart contracts',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'What is Solidity primarily used for?',
                options: ['Web development', 'Smart contract development', 'Mobile apps', 'Data analysis'],
                correct: 1,
                explanation: 'Solidity is specifically designed for writing smart contracts on the Ethereum blockchain.'
            }
        ]
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.LESSON_CONTENT = LESSON_CONTENT;
}


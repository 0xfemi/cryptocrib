// Comprehensive Cryptocrib Curriculum
// Based on industry-leading blockchain education platforms

const CURRICULUM = {
    beginner: {
        id: 'beginner',
        title: 'Beginner Path: Web3 Foundations',
        description: 'Master the fundamentals of blockchain technology, Bitcoin, wallets, Ethereum basics, and Layer 2 solutions.',
        totalLessons: 45,
        totalXP: 2000,
        chapters: [
            {
                id: 'ch1-blockchain-basics',
                title: 'Chapter 1: The Evolution of Value and the Birth of Bitcoin',
                description: 'Explore the history of money, from pre-monetary systems to fiat currency, the 2008 financial crisis, and how Bitcoin emerged as a revolutionary solution to create decentralized digital money.',
                lessons: [
                    { id: '1-1', title: 'The Pre-Monetary Era and the Problem of Coincidence', type: 'reading', duration: 15, xp: 50 },
                    { id: '1-2', title: 'The Shift to Fiat and the Trust Gap', type: 'reading', duration: 20, xp: 50 },
                    { id: '1-3', title: 'The 2008 Global Financial Crisis', type: 'interactive', duration: 25, xp: 75 },
                    { id: '1-4', title: 'Satoshi Nakamoto and the Whitepaper', type: 'reading', duration: 20, xp: 50 },
                    { id: '1-5', title: 'The Genesis Block', type: 'code', duration: 30, xp: 100 },
                    { id: '1-6', title: 'Solving the Double Spend Problem', type: 'challenge', duration: 45, xp: 150 }
                ]
            },
            {
                id: 'ch2-bitcoin',
                title: 'Chapter 2: Understanding Bitcoin',
                description: 'Deep dive into Bitcoin, transactions, mining, and the genesis block.',
                lessons: [
                    { id: '2-1', title: 'Bitcoin Whitepaper Overview', type: 'reading', duration: 30, xp: 75 },
                    { id: '2-2', title: 'Bitcoin Transactions and UTXOs', type: 'interactive', duration: 25, xp: 75 },
                    { id: '2-3', title: 'Mining and Proof of Work', type: 'reading', duration: 20, xp: 50 },
                    { id: '2-4', title: 'The Genesis Block Secret', type: 'code', duration: 30, xp: 100 },
                    { id: '2-5', title: 'OP_RETURN and Scripts', type: 'interactive', duration: 25, xp: 75 },
                    { id: '2-6', title: 'Challenge: Decode Genesis Block Message', type: 'challenge', duration: 45, xp: 150 },
                    { id: '2-7', title: 'Bitcoin Addresses and Keys', type: 'reading', duration: 25, xp: 75 },
                    { id: '2-8', title: 'Public Key Cryptography', type: 'code', duration: 35, xp: 100 }
                ]
            },
            {
                id: 'ch3-wallets',
                title: 'Chapter 3: Crypto Wallets',
                description: 'Learn about wallets, key management, seed phrases, and wallet security.',
                lessons: [
                    { id: '3-1', title: 'Types of Wallets: Hot vs Cold', type: 'reading', duration: 20, xp: 50 },
                    { id: '3-2', title: 'Seed Phrases and BIP39', type: 'reading', duration: 25, xp: 75 },
                    { id: '3-3', title: 'HD Wallets and Derivation Paths', type: 'interactive', duration: 30, xp: 75 },
                    { id: '3-4', title: 'Wallet Security Best Practices', type: 'reading', duration: 20, xp: 50 },
                    { id: '3-5', title: 'Connecting MetaMask', type: 'code', duration: 25, xp: 75 },
                    { id: '3-6', title: 'Challenge: Create and Secure a Wallet', type: 'challenge', duration: 40, xp: 150 }
                ]
            },
            {
                id: 'ch4-ethereum-basics',
                title: 'Chapter 4: Ethereum Basics',
                description: 'Introduction to Ethereum, accounts, gas, and the EVM.',
                lessons: [
                    { id: '4-1', title: 'What is Ethereum?', type: 'reading', duration: 25, xp: 75 },
                    { id: '4-2', title: 'Ethereum Accounts: EOA vs Contracts', type: 'reading', duration: 20, xp: 50 },
                    { id: '4-3', title: 'Gas and Transaction Fees', type: 'interactive', duration: 25, xp: 75 },
                    { id: '4-4', title: 'The Ethereum Virtual Machine (EVM)', type: 'reading', duration: 30, xp: 75 },
                    { id: '4-5', title: 'Ethereum Transactions', type: 'interactive', duration: 25, xp: 75 },
                    { id: '4-6', title: 'Introduction to Smart Contracts', type: 'reading', duration: 30, xp: 75 },
                    { id: '4-7', title: 'Challenge: Send Your First Transaction', type: 'challenge', duration: 45, xp: 150 }
                ]
            },
            {
                id: 'ch5-layer2',
                title: 'Chapter 5: Layer 2 Solutions',
                description: 'Exploring Base, Optimism, Arbitrum, and other scaling solutions.',
                lessons: [
                    { id: '5-1', title: 'The Scaling Problem', type: 'reading', duration: 20, xp: 50 },
                    { id: '5-2', title: 'Base: Coinbase\'s L2', type: 'reading', duration: 25, xp: 75 },
                    { id: '5-3', title: 'Optimism: Optimistic Rollups', type: 'reading', duration: 30, xp: 75 },
                    { id: '5-4', title: 'Arbitrum: Advanced Optimistic Rollups', type: 'reading', duration: 30, xp: 75 },
                    { id: '5-5', title: 'ZK-Rollups Overview', type: 'reading', duration: 25, xp: 75 },
                    { id: '5-6', title: 'Bridging Assets to L2', type: 'interactive', duration: 35, xp: 100 },
                    { id: '5-7', title: 'Challenge: Bridge Tokens to Base', type: 'challenge', duration: 50, xp: 150 }
                ]
            }
        ]
    },
    intermediate: {
        id: 'intermediate',
        title: 'Intermediate Path: DeFi & Smart Contracts',
        description: 'Dive into DeFi, Solidity, token development, and building dApps.',
        totalLessons: 35,
        totalXP: 3000,
        unlockedBy: 'beginner',
        chapters: [
            {
                id: 'ch6-defi',
                title: 'Chapter 6: DeFi Fundamentals',
                description: 'Decentralized Finance, AMMs, lending protocols, and yield farming.',
                lessons: [
                    { id: '6-1', title: 'Introduction to DeFi', type: 'reading', duration: 25, xp: 75 },
                    { id: '6-2', title: 'Automated Market Makers (AMMs)', type: 'reading', duration: 30, xp: 100 },
                    { id: '6-3', title: 'Understanding Uniswap', type: 'interactive', duration: 35, xp: 100 },
                    { id: '6-4', title: 'Liquidity Pools and Impermanent Loss', type: 'reading', duration: 30, xp: 100 },
                    { id: '6-5', title: 'Lending Protocols: Aave and Compound', type: 'reading', duration: 35, xp: 100 },
                    { id: '6-6', title: 'Yield Farming Strategies', type: 'interactive', duration: 40, xp: 150 },
                    { id: '6-7', title: 'Challenge: Provide Liquidity', type: 'challenge', duration: 50, xp: 200 }
                ]
            },
            {
                id: 'ch7-solidity',
                title: 'Chapter 7: Introduction to Solidity',
                description: 'Learn Solidity programming, variables, functions, and contract structure.',
                lessons: [
                    { id: '7-1', title: 'Solidity Basics and Syntax', type: 'reading', duration: 30, xp: 100 },
                    { id: '7-2', title: 'Variables and Data Types', type: 'code', duration: 35, xp: 100 },
                    { id: '7-3', title: 'Functions and Modifiers', type: 'code', duration: 40, xp: 150 },
                    { id: '7-4', title: 'Events and Logs', type: 'code', duration: 30, xp: 100 },
                    { id: '7-5', title: 'Error Handling: require, revert, assert', type: 'code', duration: 35, xp: 100 },
                    { id: '7-6', title: 'Contract Inheritance', type: 'code', duration: 40, xp: 150 },
                    { id: '7-7', title: 'Challenge: Build Your First Contract', type: 'challenge', duration: 60, xp: 200 }
                ]
            },
            {
                id: 'ch8-tokens',
                title: 'Chapter 8: Token Development',
                description: 'ERC-20, ERC-721, ERC-1155 standards and token economics.',
                lessons: [
                    { id: '8-1', title: 'ERC-20 Token Standard', type: 'reading', duration: 30, xp: 100 },
                    { id: '8-2', title: 'Building an ERC-20 Token', type: 'code', duration: 45, xp: 150 },
                    { id: '8-3', title: 'ERC-721 NFTs Explained', type: 'reading', duration: 30, xp: 100 },
                    { id: '8-4', title: 'Creating an NFT Collection', type: 'code', duration: 50, xp: 150 },
                    { id: '8-5', title: 'ERC-1155 Multi-Token Standard', type: 'reading', duration: 30, xp: 100 },
                    { id: '8-6', title: 'Tokenomics and Distribution', type: 'reading', duration: 35, xp: 100 },
                    { id: '8-7', title: 'Challenge: Launch Your Token', type: 'challenge', duration: 75, xp: 250 }
                ]
            },
            {
                id: 'ch9-dapps',
                title: 'Chapter 9: Building dApps',
                description: 'Full-stack dApp development with React, Web3.js, and smart contract integration.',
                lessons: [
                    { id: '9-1', title: 'dApp Architecture Overview', type: 'reading', duration: 25, xp: 75 },
                    { id: '9-2', title: 'Web3.js and Ethers.js', type: 'code', duration: 40, xp: 150 },
                    { id: '9-3', title: 'Connecting Frontend to Contracts', type: 'code', duration: 45, xp: 150 },
                    { id: '9-4', title: 'Wallet Integration in dApps', type: 'code', duration: 40, xp: 150 },
                    { id: '9-5', title: 'Reading On-Chain Data', type: 'code', duration: 35, xp: 100 },
                    { id: '9-6', title: 'Transaction Handling and UX', type: 'code', duration: 40, xp: 150 },
                    { id: '9-7', title: 'Challenge: Build a Full dApp', type: 'challenge', duration: 120, xp: 300 }
                ]
            }
        ]
    },
    advanced: {
        id: 'advanced',
        title: 'Advanced Path: Security & Protocols',
        description: 'Master smart contract security, auditing, and advanced protocol development.',
        totalLessons: 25,
        totalXP: 5000,
        unlockedBy: 'intermediate',
        chapters: [
            {
                id: 'ch10-security',
                title: 'Chapter 10: Smart Contract Security',
                description: 'Common vulnerabilities, best practices, and security patterns.',
                lessons: [
                    { id: '10-1', title: 'Common Vulnerabilities Overview', type: 'reading', duration: 30, xp: 100 },
                    { id: '10-2', title: 'Reentrancy Attacks', type: 'code', duration: 45, xp: 200 },
                    { id: '10-3', title: 'Integer Overflow and Underflow', type: 'code', duration: 35, xp: 150 },
                    { id: '10-4', title: 'Access Control Patterns', type: 'code', duration: 40, xp: 150 },
                    { id: '10-5', title: 'Oracle Manipulation Risks', type: 'reading', duration: 35, xp: 150 },
                    { id: '10-6', title: 'Challenge: Find and Fix Vulnerabilities', type: 'challenge', duration: 90, xp: 300 }
                ]
            },
            {
                id: 'ch11-auditing',
                title: 'Chapter 11: Security Auditing',
                description: 'Audit methodologies, tools, and best practices for secure contracts.',
                lessons: [
                    { id: '11-1', title: 'Audit Methodology', type: 'reading', duration: 30, xp: 100 },
                    { id: '11-2', title: 'Static Analysis Tools: Slither, MythX', type: 'code', duration: 50, xp: 200 },
                    { id: '11-3', title: 'Fuzzing and Dynamic Testing', type: 'code', duration: 45, xp: 200 },
                    { id: '11-4', title: 'Formal Verification Basics', type: 'reading', duration: 40, xp: 150 },
                    { id: '11-5', title: 'Code Review Checklist', type: 'reading', duration: 35, xp: 100 },
                    { id: '11-6', title: 'Challenge: Audit a Smart Contract', type: 'challenge', duration: 120, xp: 400 }
                ]
            },
            {
                id: 'ch12-protocols',
                title: 'Chapter 12: Advanced Protocols',
                description: 'Zero-knowledge proofs, cross-chain protocols, and advanced DeFi mechanisms.',
                lessons: [
                    { id: '12-1', title: 'Zero-Knowledge Proofs: zk-SNARKs', type: 'reading', duration: 45, xp: 200 },
                    { id: '12-2', title: 'ZK-Rollups Deep Dive', type: 'reading', duration: 40, xp: 200 },
                    { id: '12-3', title: 'Cross-Chain Bridges', type: 'reading', duration: 35, xp: 150 },
                    { id: '12-4', title: 'DAO Governance Mechanisms', type: 'reading', duration: 35, xp: 150 },
                    { id: '12-5', title: 'MEV and Flash Loans', type: 'reading', duration: 40, xp: 200 },
                    { id: '12-6', title: 'Challenge: Design a Protocol', type: 'challenge', duration: 150, xp: 500 },
                    { id: '12-7', title: 'Capstone: Build an Audited Protocol', type: 'challenge', duration: 240, xp: 750 }
                ]
            }
        ]
    }
};

// User ranks based on total XP
const USER_RANKS = [
    { rank: 1, name: 'Crypto Curious', xp: 0, color: '#6B7280' },
    { rank: 2, name: 'Blockchain Beginner', xp: 100, color: '#3B82F6' },
    { rank: 3, name: 'Web3 Explorer', xp: 300, color: '#8B5CF6' },
    { rank: 4, name: 'DeFi Learner', xp: 600, color: '#EC4899' },
    { rank: 5, name: 'Smart Contract Student', xp: 1000, color: '#F59E0B' },
    { rank: 6, name: 'Solidity Developer', xp: 1500, color: '#EF4444' },
    { rank: 7, name: 'dApp Builder', xp: 2200, color: '#10B981' },
    { rank: 8, name: 'DeFi Architect', xp: 3000, color: '#06B6D4' },
    { rank: 9, name: 'Security Analyst', xp: 4000, color: '#8B5CF6' },
    { rank: 10, name: 'Protocol Developer', xp: 5200, color: '#F59E0B' },
    { rank: 11, name: 'Blockchain Auditor', xp: 6600, color: '#EF4444' },
    { rank: 12, name: 'ZK Researcher', xp: 8200, color: '#10B981' },
    { rank: 13, name: 'DeFi Master', xp: 10000, color: '#06B6D4' },
    { rank: 14, name: 'Web3 Architect', xp: 12000, color: '#8B5CF6' },
    { rank: 15, name: 'Web3 Master', xp: 15000, color: '#FCD34D' }
];

// Achievements/Badges
const ACHIEVEMENTS = [
    { id: 'first-lesson', name: 'First Steps', description: 'Complete your first lesson', icon: '🌟', xp: 25 },
    { id: 'first-chapter', name: 'Chapter Complete', description: 'Finish your first chapter', icon: '📚', xp: 100 },
    { id: 'path-beginner', name: 'Foundations Master', description: 'Complete Beginner Path', icon: '🏆', xp: 500 },
    { id: 'path-intermediate', name: 'DeFi Expert', description: 'Complete Intermediate Path', icon: '💎', xp: 750 },
    { id: 'path-advanced', name: 'Security Master', description: 'Complete Advanced Path', icon: '🛡️', xp: 1000 },
    { id: 'streak-7', name: 'Week Warrior', description: 'Maintain a 7-day streak', icon: '🔥', xp: 200 },
    { id: 'streak-30', name: 'Monthly Champion', description: 'Maintain a 30-day streak', icon: '⭐', xp: 500 },
    { id: 'perfect-score', name: 'Perfectionist', description: 'Score 100% on 10 quizzes', icon: '✨', xp: 300 },
    { id: 'code-master', name: 'Code Master', description: 'Complete 20 coding challenges', icon: '💻', xp: 400 },
    { id: 'community-help', name: 'Community Helper', description: 'Help 10 community members', icon: '🤝', xp: 250 }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CURRICULUM, USER_RANKS, ACHIEVEMENTS };
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.CURRICULUM = CURRICULUM;
    window.USER_RANKS = USER_RANKS;
    window.ACHIEVEMENTS = ACHIEVEMENTS;
}


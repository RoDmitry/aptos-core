/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // defaultSidebar: [{type: 'autogenerated', dirName: '.', }],
  aptosSidebar: [
    "index",
    "whats-new-in-docs",
    "guides/getting-started",
    {
      type: "category",
      label: "Developer Tutorials",
      link: { type: "doc", id: "tutorials/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "tutorials/first-transaction",
        "tutorials/your-first-nft",
        "tutorials/first-move-module",
        "tutorials/first-dapp",
        "tutorials/first-coin",
      ],
    },

    {
      type: "category",
      label: "Concepts",
      link: { type: "doc", id: "concepts/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "concepts/basics-txns-states",
        "concepts/basics-accounts",
        "concepts/basics-events",
        "concepts/basics-gas-txn-fee",
        "concepts/base-gas",
        {
          type: "category",
          label: "Coin and Token",
          link: { type: "doc", id: "concepts/coin-and-token/index" },
          collapsible: true,
          collapsed: true,
          items: ["concepts/coin-and-token/aptos-coin", "concepts/coin-and-token/aptos-token"],
        },
        "concepts/basics-fullnodes",
        "concepts/basics-validator-nodes",
        "concepts/basics-node-networks-sync",
        "concepts/staking",
        "concepts/governance",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: { type: "doc", id: "guides/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "guides/basics-life-of-txn",
        "guides/sign-a-transaction",
        "guides/interacting-with-the-blockchain",
        "guides/state-sync",
        "guides/data-pruning",
        "guides/indexing",
        "guides/building-your-own-wallet",
        "guides/install-petra-wallet",
        "guides/building-wallet-extension",
        "guides/system-integrators-guide",
        "guides/local-testnet-dev-flow",
        "guides/running-a-local-multi-node-network",
        "guides/handle-aptos-errors",
        {
          type: "category",
          label: "Move Guides",
          link: { type: "doc", id: "guides/move-guides/index" },
          collapsible: true,
          collapsed: true,
          items: ["guides/move-guides/move-on-aptos", "guides/move-guides/upgrading-move-code"],
        },
      ],
    },
    {
      type: "html",
      value: "Nodes",
      className: "sidebar-title",
    },
    "nodes/aptos-deployments",
    "nodes/leaderboard-metrics",
    "nodes/node-files",
    "nodes/keys-and-identities",
    /** Delete during clean up
    {
      type: "category",
      label: "AIT-3",
      link: { type: "doc", id: "nodes/ait/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "nodes/ait/whats-new-in-ait3",
        "nodes/ait/steps-in-ait3",
        
      ],
    },  */

    {
      type: "category",
      label: "Validators",
      link: { type: "doc", id: "nodes/validator-node/index" },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Owner",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "nodes/validator-node/owner/index" },
          items: [],
        },
        {
          type: "category",
          label: "Operator",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "nodes/validator-node/operator/index" },
          items: [
            "nodes/validator-node/operator/node-requirements",
            {
              type: "category",
              label: "Running Validator Node",
              collapsible: true,
              collapsed: true,
              link: { type: "doc", id: "nodes/validator-node/operator/running-validator-node/index" },
              items: [
                "nodes/validator-node/operator/running-validator-node/using-aws",
                "nodes/validator-node/operator/running-validator-node/using-azure",
                "nodes/validator-node/operator/running-validator-node/using-gcp",
                "nodes/validator-node/operator/running-validator-node/using-docker",
                "nodes/validator-node/operator/running-validator-node/using-source-code",
              ],
            },
            "nodes/validator-node/operator/node-liveness-criteria",
            "nodes/validator-node/operator/connect-to-aptos-network",
            "nodes/validator-node/operator/staking-pool-operations",
            "nodes/validator-node/operator/shutting-down-nodes",
          ],
        },
        {
          type: "category",
          label: "Voter",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "nodes/validator-node/voter/index" },
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "Public Fullnode",
      link: { type: "doc", id: "nodes/full-node/index" },
      collapsible: true,
      collapsed: true,
      items: [
        "nodes/full-node/fullnode-source-code-or-docker",
        "nodes/full-node/update-fullnode-with-new-releases",
        "nodes/full-node/network-identity-fullnode",
        "nodes/full-node/fullnode-network-connections",
        "nodes/full-node/run-a-fullnode-on-gcp",
        "nodes/full-node/bootstrap-fullnode",
      ],
    },
    "nodes/indexer-fullnode",
    {
      type: "category",
      label: "Local Testnet",
      link: { type: "doc", id: "nodes/local-testnet/index" },
      collapsible: true,
      collapsed: true,
      items: ["nodes/local-testnet/using-cli-to-run-a-local-testnet", "nodes/local-testnet/run-a-local-testnet"],
    },
    {
      type: "category",
      label: "Node Health Checker",
      link: { type: "doc", id: "nodes/node-health-checker/index" },
      collapsible: true,
      collapsed: true,
      items: ["nodes/node-health-checker/node-health-checker-faq"],
    },
    "nodes/leaderboard-metrics",
    "reference/telemetry",
    {
      type: "html",
      value: "Tools",
      className: "sidebar-title",
    },
    "guides/use-aptos-explorer",
    {
      type: "category",
      label: "SDKs",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "sdks/index" },
      items: [
        {
          type: "category",
          label: "TypeScript SDK",
          link: { type: "doc", id: "sdks/ts-sdk/index" },
          collapsible: true,
          collapsed: true,
          items: ["sdks/ts-sdk/typescript-sdk", "sdks/ts-sdk/typescript-sdk-overview"],
        },
        "sdks/python-sdk",
        "sdks/rust-sdk",
      ],
    },
    {
      type: "category",
      label: "Aptos CLI",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "cli-tools/aptos-cli-tool/index" },
      items: ["cli-tools/aptos-cli-tool/install-aptos-cli", "cli-tools/aptos-cli-tool/use-aptos-cli"],
    },
    {
      type: "html",
      value: "White Paper",
      className: "sidebar-title",
    },

    {
      type: "category",
      label: "Aptos White Paper",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "aptos-white-paper/index" },
      items: ["aptos-white-paper/in-korean"],
    },
    {
      type: "html",
      value: "Misc",
      className: "sidebar-title",
    },
    "issues-and-workarounds",
    "reference/glossary",
  ],
};

module.exports = sidebars;

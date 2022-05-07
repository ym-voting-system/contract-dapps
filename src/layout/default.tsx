import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import {
    AppShell,
    Navbar,
    Footer,
    Text,
    useMantineTheme,
    Paper,
} from "@mantine/core";

import { hideNotification, useNotifications } from "@mantine/notifications";

import HeaderLayout from "@layout/header";

/*
 * * Wallet && Blockchain interaction
 */
import { useWeb3React } from "@web3-react/core";
import useVoting from "@hooks/useVoting";

export default function Layout() {
    const theme = useMantineTheme();
    const [opened] = useState(false);

    const notifications = useNotifications();

    // Connect to wallet
    const context = useWeb3React();
    const { library: provider, account, active } = context;

    /* Contract Value */
    const [owner, setOwner] = useState(null);
    const [contract, , read] = useVoting();

    useEffect(() => {
        getOwners();
        return () => setOwner(null);
    }, [contract]);

    //Get Owners of Votings contract
    async function getOwners() {
        if (active) {
            //Create a new instance of contract (adress contract, abi contract && provider)
            try {
                const owner = await read(
                    contract?.owner(),
                    "Retrieving Owner",
                    "Retrieving the Voting.sol smart contract Owners",
                    "Unable to call the owner of the Voting contract"
                );
                setOwner(owner);
                hideNotification("erorrFetchOwner");
            } catch (e) {
                //const message =
                notifications.showNotification({
                    id: "erorrFetchOwner",
                    title: "Erorr fetching Owner ",
                    color: "red",
                    message: `Unable to call the owner of the Voting contract, try "npx hardhat node or npx hardhat run scripts/deploy.ts --network localhost" : ${e}`,
                    autoClose: false,
                });
            }
        }
    }

    return (
        <Paper>
            <AppShell
                styles={{
                    main: {
                        background:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed
                header={<HeaderLayout />}
                navbar={
                    <Navbar
                        p="md"
                        hiddenBreakpoint="sm"
                        hidden={!opened}
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Navbar.Section>
                            <b>Navigation</b>
                        </Navbar.Section>
                        {/* Grow section will take all available space that is not taken by first and last sections */}
                        <Navbar.Section grow mt="lg">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/accounts/manage-voters"
                                >
                                    1 - Manage Voters
                                </Text>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/accounts/workflow"
                                >
                                    2 - Manage Workflow
                                </Text>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/accounts/proposals"
                                >
                                    3 - Proposals
                                </Text>
                            </div>
                        </Navbar.Section>
                        {/* Last section with normal height (depends on section content) */}
                        <Navbar.Section>Footer section</Navbar.Section>
                    </Navbar>
                }
                footer={
                    <Footer
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                        height={60}
                        p="md"
                    >
                        <Text size="md" transform="capitalize">
                            <b>Account: </b>
                            {account}
                        </Text>

                        <Text size="md" transform="capitalize">
                            <b>Administrator: </b>
                            {owner}
                        </Text>
                    </Footer>
                }
            >
                <Outlet />
            </AppShell>
        </Paper>
    );
}

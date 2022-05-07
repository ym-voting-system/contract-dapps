import { Button, Grid, Paper, SimpleGrid, Title } from "@mantine/core";

/*
 * Wallet && Blockchain interaction */
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import Voting from "@contract/Voting.sol/Voting.json";
import { useNotifications } from "@mantine/notifications";
const VotingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function SessionManagement() {
    const { active, library: provider } = useWeb3React();
    const notifications = useNotifications();

    async function startsRecordingProposals() {
        if (active) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                VotingAddress,
                Voting.abi,
                signer
            );
            try {
                const startRecording =
                    await contract.startsRecordingProposals();
                const color = startRecording ? "green" : "orange";
                notifications.showNotification({
                    id: "startRecording",
                    title: "startRecording",
                    color: color,
                    message: `Launch of the registration of proposals`,
                });
            } catch (e) {
                const error: any = e as Error;
                const message = error.data ? error.data.message : error;
                notifications.showNotification({
                    id: "ErorrRecordingSession",
                    title: "Erorr Recording Session",
                    color: "red",
                    message: `${message}`,
                });
            }
        }
    }

    async function stopRecordingProposals() {
        if (active) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                VotingAddress,
                Voting.abi,
                signer
            );
            try {
                const stopRecording = await contract.stopRecordingProposals();
                // const { isRegistered } = startVote;
                const color = stopRecording ? "green" : "orange";
                notifications.showNotification({
                    id: "stopRecording",
                    title: "Stop Recording",
                    color: color,
                    message: `The proposal registration session is over`,
                });
            } catch (e) {
                const error: any = e as Error;
                const message = error.data ? error.data.message : error;
                notifications.showNotification({
                    id: "errorStopRecording",
                    title: "Erorr Stop Recording ",
                    color: "red",
                    message: `${message}`,
                });
            }
        }
    }

    async function startsVotingSession() {
        if (active) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                VotingAddress,
                Voting.abi,
                signer
            );
            try {
                const startVote = await contract.startsVotingSession();
                // const { isRegistered } = startVote;
                const color = startVote ? "green" : "orange";
                notifications.showNotification({
                    id: "startVote",
                    title: "StartVote",
                    color: color,
                    message: `Launch of the voting session`,
                });
            } catch (e) {
                const error: any = e as Error;
                const message = error.data ? error.data.message : error;
                notifications.showNotification({
                    id: "ErorrStartVote",
                    title: "Erorr Voter Start Vote",
                    color: "red",
                    message: `${message}`,
                });
            }
        }
    }

    async function stopVotingSession() {
        if (active) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                VotingAddress,
                Voting.abi,
                signer
            );
            try {
                const stopVote = await contract.stopVotingSession();
                // const { isRegistered } = startVote;
                const color = stopVote ? "green" : "orange";
                notifications.showNotification({
                    id: "stopVote",
                    title: "Stop Vote",
                    color: color,
                    message: `End of the voting session`,
                });
            } catch (e) {
                const error: any = e as Error;
                const message = error.data ? error.data.message : error;
                notifications.showNotification({
                    id: "stopVotingSession",
                    title: "Erorr Stop Voting Session",
                    color: "red",
                    message: `${message}`,
                });
            }
        }
    }

    async function voteTallying() {
        if (active) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                VotingAddress,
                Voting.abi,
                signer
            );
            try {
                const vote = await contract.voteTallying();

                const color = vote ? "green" : "orange";
                notifications.showNotification({
                    id: "voteTallying",
                    title: "Vote Tallying",
                    color: color,
                    message: `Vote Counting`,
                });
            } catch (e) {
                const error: any = e as Error;
                const message = error.data ? error.data.message : error;
                notifications.showNotification({
                    id: "ErrorVoteTallying",
                    title: "Erorr Vote Tallying",
                    color: "red",
                    message: `${message}`,
                });
            }
        }
    }

    return (
        <div>
            <Paper shadow="xs" p="md">
                <Title
                    order={2}
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    Manage Workflow
                </Title>
                <Grid gutter="xl">
                    <Grid.Col span={12}>
                        <Title order={3}>Recording proposals</Title>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Button onClick={startsRecordingProposals} uppercase>
                            start the registration
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Button
                            color="red"
                            onClick={stopRecordingProposals}
                            uppercase
                        >
                            stop the registration
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Title order={3}>Voting</Title>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Button onClick={startsVotingSession} uppercase>
                            start vote
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Button
                            color="red"
                            onClick={stopVotingSession}
                            uppercase
                        >
                            stop vote
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Title order={3}>Results</Title>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Title order={3}>
                            <Button
                                color="orange"
                                onClick={voteTallying}
                                uppercase
                            >
                                Vote Tayling
                            </Button>
                        </Title>
                    </Grid.Col>
                </Grid>
            </Paper>
        </div>
    );
}

export default SessionManagement;

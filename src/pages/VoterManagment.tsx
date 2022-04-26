import { Paper, Title } from "@mantine/core";
import VotingInteraction from "@components/VotingInteraction";

function VoterManagment() {
  return (
    <div>
      <Paper
        shadow="xs"
        p="md"
        radius={0}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "strecht",
          margin: "0 auto",
          maxWidth: "500px",
        }}
      >
        <Title
          order={2}
          style={{
            marginBottom: "10px",
          }}
        >
          Voters Management
        </Title>
        <VotingInteraction />
      </Paper>
    </div>
  );
}

export default VoterManagment;

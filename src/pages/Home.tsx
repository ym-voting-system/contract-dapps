import {
  createStyles,
  Image,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Paper,
  Container,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import image from "../assets/image.svg";

import HeaderLayout from "@layout/header";
import FooterLayout from "@layout/footer";

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  content: {
    maxWidth: "600px",
    marginRight: theme.spacing.xl * 3,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: "350px",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.container} radius={0}>
      <HeaderLayout />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React dapps
            </Title>
            <Text color="dimmed" mt="md">
              Build an amazing Dapps with all settings of you needs.
              <br />
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types.
              <br />
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project.
              <br />
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                📦 <b>Hardhat</b> - Ethereum development environment for
                professionals
              </List.Item>
              <List.Item>
                🦾 <b>TypeChain </b> - Hardhat plugin - Automatically generate
                TypeScript bindings for Smart Contracts while using Hardhat.
              </List.Item>
              <List.Item>
                ⚙️ <b>Automatic</b> Deploy in local node
              </List.Item>
              <List.Item>
                ⚡️ <b>Fast apps</b> with React 18, Vite, Yarn, ESBuild
              </List.Item>
              <List.Item>
                🔥<b> Layout </b>system and <b>Routes</b>
              </List.Item>
              <List.Item>
                🔥 <b>Path aliases </b> (@Components, @Layout, @Pages...)
              </List.Item>
              <List.Item>
                🎨 <b>Components Library </b> with Mantine
              </List.Item>
              <List.Item>
                🛠️ <b> Pre-configured </b>with code quality tools: ESLint,
                Prettier, TypeScript, Cypress, Vitest
              </List.Item>
              <List.Item>
                ⚙️ <b>CI/CD</b>: Github Action and Vercel
              </List.Item>
            </List>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
      <FooterLayout />
    </Paper>
  );
}

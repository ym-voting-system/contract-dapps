import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram,
  BrandLinkedin,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 60,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "blue", deg: 40 }}
          size="sm"
          transform="uppercase"
        >
          React - Mantine
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            component={Link}
            to={{ pathname: "https://twitter.com/younesmjl" }}
            size="lg"
            target="_blank"
          >
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to={{
              pathname:
                "https://twitter.com/youneshttps://www.linkedin.com/in/younes-manjal/",
            }}
            target="_blank"
            size="lg"
          >
            <BrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

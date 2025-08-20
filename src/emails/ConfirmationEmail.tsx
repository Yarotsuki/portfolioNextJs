import { Html, Head, Body, Container, Text } from "@react-email/components";
import * as React from 'react';

interface ConfirmationEmailProps {
  name: string;
}

export const ConfirmationEmail: React.FC<ConfirmationEmailProps> = ({ name }) => {
  return (
    <Html lang="fr">
      <Head>
        <title>Confirmation de message</title>
      </Head>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.heading}>Bonjour {name}, 👋</Text>
          <Text style={styles.paragraph}>
            Merci pour votre message ! Je vous remercie de m&apos;avoir contacté, je vous recontacterai dans les plus brefs delais.
          </Text>
          <Text style={styles.signature}>
            Cordialement,<br />Corbel Victorien
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: "#f3f3f3",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "red",
  },
  paragraph: {
    fontSize: "16px",
  },
  signature: {
    fontSize: "14px",
    color: "#555",
  },
};

export default ConfirmationEmail;

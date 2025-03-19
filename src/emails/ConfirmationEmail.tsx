import { Html, Head, Body, Container, Section, Img, Text, Row, Column, Link } from "@react-email/components";

export const ConfirmationEmail = ({ name }: { name: string }) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f3f3f3", padding: "20px" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>Bonjour {name}, 👋</Text>
          <Text style={{ fontSize: "16px" }}>Merci pour votre message ! Je vous remercie de m&apos;avoir contacté, je vous recontacterai dans les plus brefs delais.</Text>
          <Text style={{ fontSize: "14px", color: "#555" }}>Cordialement,<br />Corbel Victorien</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmationEmail;

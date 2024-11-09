'use client';

import { Contact } from '@/lib/validationSchemas';
import { Card } from 'react-bootstrap';
// import Link from 'next/link';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <img src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} width={75} />
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {contact.firstName}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ContactCard;

import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setCurrentImageUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={currentImageUrl}
      />
    </>
  );
}

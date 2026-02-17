import { Button, Container, Stack, Image, Text } from '@mantine/core';
import { useForm } from '../context/FormContext';
import krowdyLogo from '../assets/krowdy.png';

const Home = () => {
  const { toggleModal } = useForm();

  return (
    <Container size="xs" h="100vh" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack align="center" gap="xl">
        <Image 
          src={krowdyLogo} 
          w={400}
          fallbackSrc="https://placehold.co/200x60?text=Krowdy+Logo"
          alt="Krowdy Logo"
        />
        
        <Text c="dimmed" size="sm" ta="center">
          Sistema de Mensajeria
        </Text>

        <Button 
          variant="gradient"
          gradient={{ from: 'orange', to: 'yellow', deg: 163 }}
          size="lg" 
          radius="md" 
        >
          Enviar Mensajes
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
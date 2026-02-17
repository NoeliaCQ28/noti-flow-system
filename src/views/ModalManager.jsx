// src/views/ModalManager.jsx
import { Modal, Stepper, Button, Group, Text, Stack, Code } from '@mantine/core';
import { useForm } from '../context/FormContext';
import StepOne from './StepOne';
import ConfiguracionCanal from './ConfiguracionCanal';

const ModalManager = () => {
  const { modalAbierto, toggleModal, activeStep, formData, prevStep } = useForm();

  return (
    <Modal 
      opened={modalAbierto} 
      onClose={toggleModal} 
      title={<Text fw={700}>Gestión de Envíos</Text>}
      size="xl" 
      padding="xl"
      centered
      closeOnClickOutside={false}
    >

      <Stepper  color="yellow" active={activeStep} onStepClick={() => {}} allowNextStepsSelect={false}>
        

        <Stepper.Step label="Inicio" description="Plantilla y Canales">
          <div style={{ marginTop: 20 }}>
            <StepOne />
          </div>
        </Stepper.Step>

        {formData.canales.map((canalId) => (
          <Stepper.Step 
            key={canalId} 
            label={canalId === 'email' ? 'Correo Electrónico' : canalId.toUpperCase()} 
            description="Personalizar"
          >
            <div style={{ marginTop: 20 }}>
              <ConfiguracionCanal canalId={canalId} />
            </div>
          </Stepper.Step>
        ))}

        <Stepper.Step label="Resumen" description="Confirmar envío">
          <Stack mt="md">
            <Text size="xl" fw={700} ta="center">🚀 ¡Todo listo para enviar!</Text>
            
            <Text>Se enviarán las siguientes notificaciones:</Text>
            <Code block>
              {JSON.stringify(formData.contenido, null, 2)}
            </Code>
            
            <Group justify="flex-end" mt="xl">
              <Button variant="default" onClick={prevStep}>Atrás</Button>
              <Button 
                color="green" 
                onClick={() => {
                   alert('¡Mensajes Enviados con éxito!');
                   toggleModal(); 
                }}
              >
                Confirmar Envío
              </Button>
            </Group>
          </Stack>
        </Stepper.Step>

      </Stepper>
    </Modal>
  );
};

export default ModalManager;
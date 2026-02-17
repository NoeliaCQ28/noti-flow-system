import { Stack, TextInput, Textarea, Text, Button, Group } from '@mantine/core';
import { useForm } from '../context/FormContext';
import { useEffect } from 'react';
import { PLANTILLAS_DATA } from '../constants/config';

const ConfiguracionCanal = ({ canalId }) => {
  const { formData, actualizarContenido, nextStep, prevStep } = useForm();
    useEffect(() => {
    const contenidoActual = formData.contenido[canalId];
    const dataPlantilla = PLANTILLAS_DATA[formData.plantilla]; 

    if (!dataPlantilla) return;

    // Caso especial: EMAIL (Tiene Asunto y Mensaje)
    if (canalId === 'email') {
      if (!contenidoActual.asunto && dataPlantilla.email?.asunto) {
        actualizarContenido('email', 'asunto', dataPlantilla.email.asunto);
      }
      if (!contenidoActual.mensaje && dataPlantilla.email?.mensaje) {
        actualizarContenido('email', 'mensaje', dataPlantilla.email.mensaje);
      }
    } 
    // Caso estándar: SMS o WHATSAPP (Solo Mensaje)
    else {
      const textoPredefinido = dataPlantilla[canalId]; 
      if (!contenidoActual.mensaje && textoPredefinido) {
        actualizarContenido(canalId, 'mensaje', textoPredefinido);
      }
    }
  }, [canalId, formData.plantilla]); 

  const datos = formData.contenido[canalId];

  return (
    <Stack>
      <Text size="lg" fw={700} tt="capitalize" c="yellow">
        Editar mensaje para {canalId === 'email' ? 'Correo Electrónico' : canalId}
      </Text>
      {canalId === 'email' && (
        <TextInput
          label="Asunto"
          placeholder="Asunto del correo"
          value={datos?.asunto || ''}
          onChange={(e) => actualizarContenido(canalId, 'asunto', e.target.value)}
        />
      )}

      <Textarea
        label="Mensaje"
        placeholder="Escribe el contenido del mensaje..."
        autosize
        minRows={6}
        value={datos?.mensaje || ''}
        onChange={(e) => actualizarContenido(canalId, 'mensaje', e.target.value)}
      />

      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={prevStep}>Atrás</Button>
        <Button onClick={nextStep} color="yellow">Siguiente</Button>
      </Group>
    </Stack>
  );
};

export default ConfiguracionCanal;
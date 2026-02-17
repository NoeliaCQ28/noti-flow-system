import { Stack, Radio, Checkbox, Button, Text, Group, Paper } from '@mantine/core';
import { useForm } from '../context/FormContext';
import { CANALES_ORDEN, PLANTILLAS_DATA } from '../constants/config';
import { intersection } from 'es-toolkit';

const StepOne = () => {
  const { formData, actualizarData, nextStep } = useForm();

  const handleCanalChange = (id, checked) => {
    let nuevosCanales = [...formData.canales];
    let nuevoContenido = { ...formData.contenido };

    if (checked) {
      nuevosCanales.push(id);
    } else {
      nuevosCanales = nuevosCanales.filter((c) => c !== id);
      if (id === 'email') {
        nuevoContenido.email = { asunto: '', mensaje: '' };
      } else {
        nuevoContenido[id] = { mensaje: '' };
      }
    }


    const ordenMaestroIds = CANALES_ORDEN.map((c) => c.id);
    const canalesOrdenados = intersection(ordenMaestroIds, nuevosCanales);

    actualizarData({ canales: canalesOrdenados, contenido: nuevoContenido });
  };

  return (
    <Stack gap="lg">
      
      {/* SECCIÓN 1: PLANTILLAS */}
      <Paper withBorder p="md" radius="md">
        <Text fw={700} mb="sm" c="dimmed">1. Selecciona el Tipo de Mensaje</Text>
        <Radio.Group
          value={formData.plantilla}
          onChange={(value) => {
            const contenidoReseteado = {
              sms: { mensaje: '' },
              email: { asunto: '', mensaje: '' },
              whatsapp: { mensaje: '' }
            };
            actualizarData({ plantilla: value, contenido: contenidoReseteado });
          }}
        >
          <Group mt="xs">
            {Object.entries(PLANTILLAS_DATA).map(([key, data]) => (
              <Radio key={key} value={key} label={data.label} color="yellow" />
            ))}
          </Group>
        </Radio.Group>
      </Paper>

      {/* SECCIÓN 2: CANALES */}
      <Paper withBorder p="md" radius="md">
        <Text fw={700} mb="sm" c="dimmed">2. Canales de Envío (Selección Múltiple)</Text>
        <Stack mt="xs" gap="sm">
          {CANALES_ORDEN.map((c) => (
            <Checkbox
              key={c.id}
              label={c.label}
              checked={formData.canales.includes(c.id)}
              onChange={(e) => handleCanalChange(c.id, e.currentTarget.checked)}
              color="yellow"
            />
          ))}
        </Stack>
      </Paper>

      {/* BOTÓN SIGUIENTE */}
      <Group justify="flex-end" mt="md">
        <Button
          onClick={nextStep}
          disabled={!formData.plantilla || formData.canales.length === 0}
          color="yellow"
        >
          Siguiente
        </Button>
      </Group>

    </Stack>
  );
};

export default StepOne;
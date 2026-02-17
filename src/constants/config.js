export const CANALES_ORDEN = [
  { id: 'sms', label: 'SMS' },
  { id: 'email', label: 'Correo Electrónico' },
  { id: 'whatsapp', label: 'WhatsApp' }
];

export const PLANTILLAS_DATA = {
  invitacion: {
    label: 'Invitación',
    sms: "Hola [Nombre], te invitamos a participar en el proceso de [nombre del proceso] que se llevará a cabo el [fecha] a las [hora]. Por favor confirma tu asistencia.",
    whatsapp: "Hola [Nombre], te invitamos a participar en el proceso de [nombre del proceso] que se llevará a cabo el [fecha] a las [hora]. Por favor confirma tu asistencia.",
    email: {
      asunto: "Invitación al proceso de [nombre del proceso]",
      mensaje: "Estimado/a [Nombre],\nEsperamos que te encuentres bien. A través de este medio, queremos invitarte a participar..."
    }
  },
  recordatorio: {
    label: 'Recordatorio',
    sms: "Hola [Nombre], te recordamos que el proceso de [nombre del proceso] al que confirmaste asistencia se realizará el [fecha] a las [hora]. ¡Te esperamos!",
    whatsapp: "Hola [Nombre], te recordamos que el proceso de [nombre del proceso] al que confirmaste asistencia se realizará el [fecha] a las [hora]. ¡Te esperamos!",
    email: {
      asunto: "Recordatorio del proceso de [nombre del proceso]",
      mensaje: "Estimado/a [Nombre],\nQueremos recordarte que el proceso de [nombre del proceso] se realizará el [fecha]..."
    }
  },
  personalizado: {
    label: 'Personalizado',
    sms: "",
    whatsapp: "",
    email: {
      asunto: "",
      mensaje: ""
    }
  }
};
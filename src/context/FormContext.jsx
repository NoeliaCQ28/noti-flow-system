import { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    plantilla: '', 
    canales: [],
    
    contenido: {
      sms: { mensaje: '' },
      email: { asunto: '', mensaje: '' },
      whatsapp: { mensaje: '' }
    }
  });

  const toggleModal = () => {
    setModalAbierto((prev) => {
      const next = !prev;
      if (!next) {
        setActiveStep(0);
        setFormData({
          plantilla: '',
          canales: [],
          contenido: {
            sms: { mensaje: '' },
            email: { asunto: '', mensaje: '' },
            whatsapp: { mensaje: '' }
          }
        });
      }
      return next;
    });
  };


  const nextStep = () => setActiveStep((current) => current + 1);
  const prevStep = () => setActiveStep((current) => current - 1);

  const actualizarData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };


  const actualizarContenido = (canal, campo, valor) => {
    setFormData(prev => ({
      ...prev,
      contenido: {
        ...prev.contenido,
        [canal]: {
          ...prev.contenido[canal],
          [campo]: valor
        }
      }
    }));
  };

  return (
    <FormContext.Provider value={{ 
      formData, 
      actualizarData, 
      actualizarContenido,
      modalAbierto, 
      toggleModal,
      activeStep,
      nextStep,
      prevStep 
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
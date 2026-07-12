'use client';

import { createContext, useContext, useState } from 'react';
import ContactModal from '@/src/components/ContactModal';

const ContactContext = createContext<(state: boolean) => void>(() => {});

export const useContactModal = () => useContext(ContactContext);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <ContactContext.Provider value={setContactOpen}>
      {children}
      <ContactModal open={isContactOpen} setContactOpen={setContactOpen} />
    </ContactContext.Provider>
  );
}

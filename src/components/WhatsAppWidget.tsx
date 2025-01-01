import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  ariaLabel: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ phoneNumber, ariaLabel }) => {
  const formattedNumber = phoneNumber.replace(/\s+/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label={ariaLabel}
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
    </a>
  );
};

export default WhatsAppWidget;
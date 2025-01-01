import React from 'react';
import { Mail, Phone } from 'lucide-react';
import WhatsAppWidget from './components/WhatsAppWidget';
import { translations } from './translations/fr';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img
              src="https://pub-08bbd095d9c740f0aeb4ffb7d29231e2.r2.dev/flyingtl/logo.jpg"
              alt="FlyingTL Logo"
              className="mx-auto h-24 md:h-32 w-auto object-contain"
            />
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-12 mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              {translations.underConstruction}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              {translations.workingHard}
            </p>

            {/* Contact Information */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Phone className="w-4 md:w-5 h-4 md:h-5" />
                <a 
                  href="tel:+21263739332" 
                  className="text-sm md:text-base hover:text-blue-600 transition-colors"
                >
                  +212 637 39 33 52
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Mail className="w-4 md:w-5 h-4 md:h-5" />
                <a 
                  href="mailto:contact@flyingtl.com"
                  className="text-sm md:text-base hover:text-blue-600 transition-colors"
                >
                  contact@flyingtl.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} FlyingTL. {translations.allRightsReserved}
          </p>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <WhatsAppWidget 
        phoneNumber="+21263739332" 
        ariaLabel={translations.chatOnWhatsApp}
      />
    </div>
  );
}

export default App;
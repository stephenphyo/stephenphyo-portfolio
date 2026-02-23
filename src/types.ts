export type PortfolioContact = {
  email: string;
  emailJs?: {
    enabled: boolean;
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  detailsTitle?: string;
  detailsText?: string;
};



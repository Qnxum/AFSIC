const afsicConferenceData = {
  event: {
    name: "AFSIC",
    fullName: "Africa Sports Investment Conference",
    location: "Johannesburg",
    year: "2025",
    poweredBy: "AIPD - African Institute of People Development"
  },
  
  delegatePackage: {
    name: "DELEGATE PACKAGE",
    pricing: {
      individual: {
        price: 3500,
        currency: "R",
        label: "PER DELEGATE"
      },
      group: {
        price: 29500,
        currency: "R",
        groupSize: 10,
        savings: 5500,
        label: "GROUP OF 10",
        savingsLabel: "SAVE R5,500"
      }
    },
    
    inclusions: [
      "Full conference access",
      "Networking sessions, teas and lunch",
      "Branded conference folder",
      "Pen and notepad",
      "Name tag with lanyard",
      "Conference programme booklet"
    ]
  },
  
  bankingDetails: {
    accountName: "African Institute of People Development",
    accountType: "FNB Business",
    accountNumber: "63146165053",
    reference: "AFSIC25, Delegate Name, Company"
  },
  
  contactInformation: {
    phone: "+27-63-840-6655",
    emails: [
      "andyle@asscogroup.com",
      "marketing@asscogroup.com"
    ]
  },
  
  registration: {
    deadline: "Friday, 25 July 2025",
    callToAction: "REGISTER ON OR BEFORE"
  },
  
  // Additional structured data for easy access
  packageSummary: {
    totalValue: 3500,
    groupDiscount: {
      available: true,
      minimumSize: 10,
      discountAmount: 5500,
      discountPerPerson: 550
    },
    
    categories: {
      access: ["Full conference access"],
      networking: ["Networking sessions, teas and lunch"],
      materials: [
        "Branded conference folder",
        "Pen and notepad", 
        "Conference programme booklet"
      ],
      identification: ["Name tag with lanyard"]
    }
  },
  
  // Pricing calculations
  calculations: {
    individualPrice: 3500,
    groupTotalPrice: 29500,
    groupPricePerPerson: 2950,
    groupSavingsPerPerson: 550,
    groupSavingsTotal: 5500,
    groupDiscountPercentage: Math.round((5500 / (10 * 3500)) * 100) // ~15.7%
  }
};

export default afsicConferenceData;

// Example usage functions
export function getPackagePrice(attendees = 1) {
  if (attendees >= 10) {
    const groups = Math.floor(attendees / 10);
    const individuals = attendees % 10;
    return (groups * 29500) + (individuals * 3500);
  }
  return attendees * 3500;
}

export function calculateSavings(attendees: number) {
  if (attendees >= 10) {
    const groups = Math.floor(attendees / 10);
    return groups * 5500;
  }
  return 0;
}

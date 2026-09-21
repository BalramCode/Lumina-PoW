import cdo from "../assets/cdo.jpeg";
import collector from "../assets/collector.jpeg";
import doctor from "../assets/doctor.jpeg";
import daptasanjeeb from "../assets/daptaSanjeeb.jpg";
import daptabalram from "../assets/daptaBalram.jpg";
import autism1 from "../assets/autism1.jpg";

export const stakeholders = [
  {
    id: 'overview',
    title: 'Lumina Overview',
    location: 'Core Initiative',
    heading: 'Dismantling Financial & Social Barriers',
    description:
      'Project Lumina is a groundbreaking socio-economic initiative that successfully dismantles both the financial and social barriers surrounding autism in underserved communities.',
    observations: [
      'Combines a 100% free digital platform with inclusive offline clubs',
      'Rescues families from catastrophic medical debt',
      'Actively engineers true, grassroots social acceptance',
    ],
    images: [autism1],
  },
  {
    id: 'collector',
    title: 'District Collector - Kalahandi',
    location: 'Government Authority',
    heading: "Here's what he feels about Lumina:",
    description:
      '“Lumina redefines autism support by shifting care from expensive clinics directly into the hands of empowered families. Its 100% free model protects marginalized households from catastrophic healthcare debt while giving non-verbal children an immediate digital voice.”\n\n— Shri Sachin Pawar, IAS (Collector & District Magistrate, Kalahandi)',
    observations: [
      'Shifts care directly into the hands of empowered families',
      'Protects marginalized households from healthcare debt',
      'Gives non-verbal children an immediate digital voice',
    ],
    images: [collector],
  },
  {
    id: 'cdo',
    title: 'Chief Development Officer, Zilla Parishad - Kalahandi',
    location: 'Zilla Parishad',
    heading: "Here's what he feels about Lumina:",
    description:
      '“Project Lumina is a transformative initiative that bridges crucial gaps in social infrastructure. By making care accessible directly at the family level, it provides sustainable relief from healthcare burdens and empowers non-verbal children with accessible digital communication tools.”\n\n— Sri Soumya Ranjan Pradhan, IAS (CDO-cum-EO, Zilla Parishad, Kalahandi)',
    observations: [
      'Bridges crucial gaps in social infrastructure',
      'Makes care accessible directly at the family level',
      'Provides sustainable relief from healthcare burdens',
    ],
    images: [cdo],
  },
  {
    id: 'ngo',
    title: 'NGO Partner',
    location: 'DAPTA',
    heading: "Here's what DAPTA has to say about Lumina:",
    description:
      '“Through its innovative blend of digital tools and inclusive offline clubs, Lumina addresses social discrimination at its cultural root. By bringing neurotypical peers and autistic children together, it offers a sustainable, CSR-funded blueprint for true community acceptance.”',
    observations: [
      'Addresses social discrimination at its cultural root',
      'Brings neurotypical peers and autistic children together',
      'Offers a sustainable, CSR-funded blueprint for community acceptance',
    ],
    images: [daptasanjeeb, daptabalram],
  }
];
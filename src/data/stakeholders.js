// import cdo from "../assets/cdo.jpeg";
// import collector from "../assets/collector.jpeg";
// import doctor from "../assets/doctor.jpeg";
// import daptasanjeeb from "../assets/daptaSanjeeb.jpg";
// import daptabalram from "../assets/daptaBalram.jpg";
// import autism1 from "../assets/autism1.jpg";
// import parent1 from "../assets/parent1.jpg";
// import parent2 from "../assets/parent2.png";
// import ritumam from "../assets/ritumam.jpg";
// import psy from "../assets/psychiatrist.jpg";
// import cdmo from "../assets/cdmo.png";
// import minatiDash from "../assets/minatiDash.png";

const cdo = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352456/81c816ac-e357-4794-be40-0027c8dbee5d.png";
const collector = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352462/0416c71c-70bc-4cc3-a793-cf6a32f6509f.png";
const doctor = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352437/fddcd8c2-b1bf-4f41-91d1-c99f58c8f3c2.png";
const daptasanjeeb = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352587/0eaabe5b-70eb-41f6-9f40-eecc33bf72d0.png";
const daptabalram = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352579/3073ae8b-2e7d-4764-8187-bf7770b04c45.png";
const autism1 = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352987/1d965189-c460-447b-8b51-4e15cba66956.png";
const parent1 = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352640/53450b10-848f-4b51-9bf5-3b4af8953934.png";
const parent2 = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352949/3e524a70-c67b-4d29-b359-a43cb14a13ac.png";
const ritumam = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352658/ab415aee-c0c9-4a00-ba22-c472c595ce3e.png";
const psy = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352654/0eff2d4c-e7e9-4557-896e-2f15462376f4.png";
const cdmo = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352500/f8a349ad-ccd3-43f4-956c-0872f0e1b953.png";
const minatiDash = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1793352470/4cabdbaa-b886-4463-bf41-9317d8156787.png";

export const stakeholders = [
  {
    id: 'bureaucrats',
    title: 'Bureaucrats',
    subtitle: 'District Administration & Public Health Leadership — Kalahandi',
    officials: [
      {
        id: 'collector',
        title: 'District Collector – Kalahandi',
        designation: 'District Magistrate & Collector',
        department: 'District Administration, Kalahandi',
        location: 'Government Perspective',
        heading: 'Potential Perspective on Lumina:',
        description:
          'Lumina proposes a community-oriented approach to autism support by attempting to connect families with information, professionals, and inclusive community resources through a single platform. From a public-service perspective, such a model could potentially help address geographic, financial, and informational barriers faced by families in underserved areas.\n\nIf implemented at scale and supported through appropriate institutional partnerships, the concept could contribute to stronger community-level autism awareness and inclusion while complementing existing government and healthcare services.',
        observations: [
          'Potentially improves access to autism-related information and services',
          'Could help address geographic and financial barriers',
          'Could strengthen community-level awareness and inclusion',
        ],
        images: [collector],
      },
      {
        id: 'cdo',
        title: 'Chief Development Officer, Zilla Parishad – Kalahandi',
        designation: 'CDO-cum-EO, Zilla Parishad',
        department: 'Panchayati Raj & Drinking Water Dept.',
        location: 'Development Perspective',
        heading: 'Potential Perspective on Lumina:',
        description:
          'Project Lumina proposes a digital and community-based approach to addressing gaps in autism support infrastructure. By connecting families with professionals, educational resources, and community networks, the platform could potentially complement existing social and healthcare systems.\n\nIts broader societal potential lies in making autism support more accessible at the family and community level. With appropriate partnerships, responsible implementation, and long-term sustainability, Lumina could contribute to a more inclusive support ecosystem for underserved communities.',
        observations: [
          'Could help bridge gaps in local support infrastructure',
          'Could improve access to resources at the family level',
          'Could support long-term community inclusion',
        ],
        images: [cdo],
      },
      {
        id: 'cdmo',
        title: 'Chief District Medical Officer – Kalahandi',
        designation: 'Chief District Medical & Public Health Officer',
        department: 'Health & Family Welfare Dept.',
        location: 'Public Health Perspective',
        heading: 'Potential Perspective on Lumina:',
        description:
          'Lumina presents a promising, feasible approach to autism inclusion by integrating digital support with community-based interventions. Its potential social impact lies in empowering families, improving communication, and reducing stigma. The model offers scalability through institutional partnerships and existing infrastructure. Its integrated, community-centred approach demonstrates originality and merits pilot implementation and evaluation.',
        observations: [
          'Integrating Lumina with existing DEIC-led district outreach initiatives could improve early identification and family support.',
          'Community-based clubs, if implemented with professional guidance, may help reduce stigma and promote inclusion.',
          'Pilot implementation in Kalahandi, followed by evaluation, would provide valuable insights into scalability and impact.',
        ],
        images: [cdmo],
      },
    ],
  },

  {
    id: 'overview',
    title: 'Psychology Professionals',
    subtitle: 'Clinical, Developmental & Research Perspectives — Kalahandi',
    eyebrow: 'Professional Perspective — Fieldwork Visit',
    profiles: [
      {
        id: 'minati-dash',
        title: 'Minati Dash',
        designation: 'Specialist, District Early Intervention Centre (DEIC)',
        department: 'District Early Intervention Centre (DEIC)',
        location: 'Professional Perspective',
        heading: 'Potential Perspective on Lumina:',
        shortTitle: 'Minati Dash',
        caption: 'Fieldwork consultation with Minati Dash at DEIC, Kalahandi',
        description:
          'Lumina offers a promising and practical approach to autism intervention by combining family education, assistive communication, and community-based support. Its potential impact includes improving early intervention access, empowering caregivers, and promoting inclusion. Through partnerships with DEICs, NGOs, and schools, its innovative, integrated model could be scaled across underserved communities.',
        images: [minatiDash],
      },
      {
        id: 'rituparna-mitra',
        title: 'Rituparna Mitra',
        designation: 'Research Scholar in Psychology',
        department: 'Psychology Research & Child Development',
        location: 'Research Perspective',
        heading: 'Potential Perspective on Lumina:',
        shortTitle: 'Rituparna Mitra',
        caption: 'Consultation with Rituparna Mitra, Department of Psychology',
        description:
          'Lumina presents a promising concept for making autism-related information, guidance, and support services more accessible to caregivers. One of the major challenges faced by families can be identifying the appropriate professional, service, or source of information at the right time. By proposing an integrated platform that brings these resources together, Lumina could potentially reduce some of the difficulties associated with navigating fragmented support systems.\n\nIf developed and implemented responsibly, the platform may also contribute to greater awareness, caregiver empowerment, and social inclusion of children with Autism Spectrum Disorder. Its potential societal impact lies not only in connecting families with services, but also in encouraging communities to understand autism and move toward greater acceptance and inclusion.',
        images: [ritumam],
      },
      {
        id: 'guru-prasad-bag',
        title: 'Guru Prasad Bag',
        designation: 'Clinical Psychologist',
        department: 'Clinical Psychology & Mental Health',
        location: 'Clinical Perspective',
        heading: 'Potential Perspective on Lumina:',
        shortTitle: 'Guru Prasad Bag',
        caption: 'Clinical consultation with Guru Prasad Bag, Clinical Psychologist',
        description:
          'The proposed Lumina platform addresses two important and often overlooked dimensions of autism support. First, it recognises the emotional burden and burnout that caregivers may experience. In many situations, attention remains primarily focused on the child, while the psychological well-being of parents and caregivers receives comparatively less attention. By proposing easier access to professionals, peer support, and reliable information, Lumina has the potential to strengthen support systems for caregivers as well.\n\nSecond, the initiative proposes reducing financial and geographic barriers to accessing autism-related support. If implemented effectively, providing free access to reliable resources and connecting families with appropriate professionals could be particularly meaningful for underserved communities. From a societal perspective, Lumina represents a promising concept that seeks to move autism support beyond the individual child and toward a more inclusive ecosystem involving families, professionals, and communities.',
        images: [psy],
      },
    ],
  },


  {
    id: 'parent',
    title: 'Parents',
    subtitle: 'Lived Experiences & Caregiver Perspectives — Kalahandi',
    eyebrow: 'Parent Perspective — Fieldwork Consultation',
    profiles: [
      {
        id: 'rajat-mishra',
        title: 'Mr. Rajat Mishra',
        designation: 'Parent & Caregiver',
        department: 'Parent Perspective',
        location: 'Parent Perspective',
        heading: 'Potential Perspective on Lumina:',
        shortTitle: 'Mr. Rajat Mishra',
        caption: 'Fieldwork consultation with Mr. Rajat Mishra',
        tag: 'Parent Consultation • Kalahandi',
        imagePosition: 'center 20%',
        description:
          'For many families, navigating autism support can involve searching for reliable information, identifying appropriate professionals, and finding communities that understand their experiences. Lumina proposes bringing these forms of support together in one accessible platform.\n\nFrom a parent’s perspective, such an ecosystem could potentially reduce feelings of isolation and make it easier to discover resources, connect with other caregivers, and participate in inclusive community activities. If successfully implemented, Lumina could contribute to a future where families feel better informed, more connected, and less alone while navigating their child’s developmental journey.',
        observations: [
          'Potential Need: Accessible therapy information and caregiver support',
          'Potential Impact: Greater connection between families and local communities',
        ],
        images: [parent1],
      },
      {
        id: 'dr-ghanashyam-behera',
        title: 'Dr. Ghanashyam Behera',
        designation: 'Parent & Caregiver',
        department: 'Parent Perspective',
        location: 'Parent Perspective',
        heading: 'Potential Perspective on Lumina:',
        shortTitle: 'Dr. Ghanashyam Behera',
        caption: 'Parent perspective consultation with Dr. Ghanashyam Behera',
        tag: 'Parent Perspective • Kalahandi',
        imagePosition: 'center 15%',
        description:
          '“As a parent, I believe Lumina has the potential to bring meaningful change to society by promoting autism awareness, social acceptance, and inclusion. Its vision of connecting families with professionals and support networks offers hope for a better future where children with autism are understood, respected, and given equal opportunities to thrive.”',
        observations: [
          'Promotes autism awareness, social acceptance, and community inclusion',
          'Envisions connecting families with professionals and vital support networks',
          'Offers hope and equal opportunities for children with autism to thrive',
        ],
        images: [parent2],
      },
    ],
  },

  {
    id: 'ngo',
    title: 'NGO Partner',
    location: 'DAPTA Perspective',
    heading: 'Potential Perspective from an NGO Partner:',
    description:
      'Lumina proposes combining digital access to autism resources with community-based inclusion initiatives. This approach could potentially address not only the lack of accessible support but also the social isolation and discrimination that some autistic children and their families may experience.\n\nThe proposed Lumina Clubs and community activities could create opportunities for autistic and neurotypical children, parents, volunteers, and community members to interact in inclusive environments. If implemented sustainably through partnerships with NGOs, CSR organisations, and local institutions, the concept could contribute to a broader shift from awareness toward meaningful social acceptance.',
    observations: [
      'Could address social isolation and barriers to inclusion',
      'Could encourage interaction between autistic and neurotypical communities',
      'Could create opportunities for NGO and CSR-supported community programs',
    ],
    images: [daptasanjeeb, daptabalram],
  },
];